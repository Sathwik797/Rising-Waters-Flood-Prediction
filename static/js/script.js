/* ============================================================
   Rising Waters – Flood Prediction System
   Frontend Interactions
   ============================================================ */
(function () {
  'use strict';
  // ---------- Footer year ----------
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  // ---------- Header shadow on scroll ----------
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (!header) return;
    if (window.scrollY > 30) {
      header.style.boxShadow = '0 10px 30px rgba(2,8,23,0.5)';
    } else {
      header.style.boxShadow = 'none';
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  // ---------- Smooth anchor scrolling ----------
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
  // ---------- Scroll-reveal animations ----------
  const revealTargets = document.querySelectorAll(
    '.about-card, .workflow-card, .feature-card, .technology-item, .stat-card, .section-header, .info-card'
  );
  revealTargets.forEach((el) => el.classList.add('reveal'));
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealTargets.forEach((el) => io.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add('visible'));
  }
  // ---------- Animated counters ----------
  const counters = document.querySelectorAll('[data-count]');
  const runCounter = (el) => {
    const target = parseInt(el.getAttribute('data-count'), 10) || 0;
    const duration = 1600;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(eased * target);
      el.textContent = value.toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString();
    };
    requestAnimationFrame(step);
  };
  if ('IntersectionObserver' in window && counters.length) {
    const co = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runCounter(entry.target);
            co.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach((c) => co.observe(c));
  } else {
    counters.forEach(runCounter);
  }
})();

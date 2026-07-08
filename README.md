# 🌊 Rising Waters – Flood Prediction System

An intelligent flood prediction web application that uses Machine Learning to estimate flood risk based on meteorological and rainfall parameters. The system helps users analyze environmental conditions and predict whether there is a possibility of flooding.

---

## 📌 Project Overview

Floods are among the most devastating natural disasters, causing significant damage to life and property. This project applies Machine Learning techniques to historical rainfall and weather data to predict flood occurrence.

The application is built using **Flask** and provides a modern web interface where users can enter weather parameters and instantly receive flood prediction results.

---

## ✨ Features

- 🌦️ Flood prediction using Machine Learning
- 🧠 XGBoost prediction model
- 📊 Performance Dashboard
- 📈 Algorithm comparison
- 📉 Accuracy comparison chart
- 🔲 Confusion Matrix visualization
- 🔥 Correlation Heatmap
- 📍 ROC Curve
- ⭐ Feature Importance graph
- 📱 Responsive user interface
- 🎨 Modern glassmorphism design

---

## 🛠️ Technologies Used

### Programming Language
- Python

### Frontend
- HTML5
- CSS3
- JavaScript
- Bootstrap
- Font Awesome

### Backend
- Flask

### Machine Learning
- Scikit-learn
- XGBoost
- Pandas
- NumPy
- Matplotlib
- Seaborn

---

## 🤖 Machine Learning Models Compared

The following algorithms were evaluated during model training:

| Algorithm | Accuracy |
|-----------|----------|
| Decision Tree | 69.79% |
| K-Nearest Neighbors | 84.65% |
| Random Forest | 89.85% |
| **XGBoost** | **96.55%** |

**Selected Model:** XGBoost

---

## 📊 Performance Evaluation

The project includes several evaluation metrics and visualizations:

- Accuracy Comparison
- Confusion Matrix
- Correlation Heatmap
- ROC Curve
- Feature Importance

---

## 📂 Project Structure

```text
Rising-Waters-Flood-Prediction/
│
├── app.py
├── requirements.txt
├── README.md
├── .gitignore
│
├── dataset/
├── models/
│   ├── floods.save
│   └── scaler.save
│
├── notebooks/
│   ├── Data_Preprocessing.ipynb
│   └── Model_Training.ipynb
│
├── static/
│   ├── css/
│   ├── images/
│   └── js/
│
└── templates/
    ├── home.html
    ├── index.html
    ├── chance.html
    ├── no_chance.html
    └── performance.html
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Sathwik797/Rising-Waters-Flood-Prediction.git
```

Move into the project folder:

```bash
cd Rising-Waters-Flood-Prediction
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run the application:

```bash
python app.py
```

Open your browser and visit:

```
http://127.0.0.1:5000
```

---

## 🚀 How to Use

1. Open the application.
2. Navigate to the Prediction page.
3. Enter all required weather parameters.
4. Click **Predict Flood Risk**.
5. View the prediction result.
6. Explore the Model Performance Dashboard.

---

## 📈 Model Input Features

The model predicts flood risk using the following parameters:

- Temperature
- Humidity
- Cloud Cover
- Annual Rainfall
- Jan-Feb Rainfall
- Mar-May Rainfall
- Jun-Sep Rainfall
- Oct-Dec Rainfall
- Average June Rainfall
- Subdivision Rainfall

---

## 🎯 Future Enhancements

- Real-time weather API integration
- Interactive maps for flood visualization
- Live rainfall monitoring
- Email/SMS flood alerts
- Multi-region flood prediction
- User authentication
- Cloud deployment

---

## 👨‍💻 Developed By

## 👨‍💻 Team

| Name | Role |
|------|------|
| Obilipapannagari Sathwik Reddy | Team Lead |
| Thotha Nehasini | Team Member |
| Yagna Sri Vayala | Team Member |
| Afshan Shaik | Team Member |


**Project:** Rising Waters – Flood Prediction System

Developed as part of an Artificial Intelligence and Machine Learning (AIML) academic project using **Flask**, **XGBoost**, and modern web technologies.

## 📜 License

This project is developed for educational and academic purposes.

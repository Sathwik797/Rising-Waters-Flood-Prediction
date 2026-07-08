from flask import Flask, render_template, request
import joblib
import numpy as np

app = Flask(__name__)

# Load trained model and scaler
model = joblib.load("models/floods.save")
scaler = joblib.load("models/scaler.save")

# ==========================
# Home Page
# ==========================

@app.route("/")
def home():
    return render_template("home.html")


# ==========================
# Prediction Page
# ==========================

@app.route("/Predict", methods=["GET", "POST"])
def predict_page():

    if request.method == "POST":

        temp = float(request.form["Temp"])
        humidity = float(request.form["Humidity"])
        cloud = float(request.form["Cloud Cover"])
        annual = float(request.form["ANNUAL"])
        jan = float(request.form["Jan-Feb"])
        mar = float(request.form["Mar-May"])
        jun = float(request.form["Jun-Sep"])
        oct = float(request.form["Oct-Dec"])
        avgjune = float(request.form["avgjune"])
        sub = float(request.form["sub"])

        data = np.array([[
            temp,
            humidity,
            cloud,
            annual,
            jan,
            mar,
            jun,
            oct,
            avgjune,
            sub
        ]])

        scaled = scaler.transform(data)

        prediction = model.predict(scaled)[0]
        probability = model.predict_proba(scaled)[0]
        
        if prediction == 1:
            confidence = probability[1] * 100
        else:
            confidence = probability[0] * 100

        if prediction == 1:
            return render_template(
                "chance.html",
                confidence=round(confidence, 2)
            )

        else:
            return render_template(
                "no_chance.html",
                confidence=round(confidence, 2)
            )

    return render_template("index.html")

@app.route("/performance")
def performance():
    return render_template("performance.html")


if __name__ == "__main__":
    app.run(debug=True)
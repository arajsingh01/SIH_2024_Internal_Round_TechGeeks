from flask import Flask, request, jsonify
import joblib
import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the trained models
pcos_model = joblib.load("pcos2.joblib")
diabetes_model = joblib.load("diabetes_model_final.joblib")

# Initialize StandardScaler
diabetes_scaler = StandardScaler()

@app.route("/")
def home():
    return "Welcome to the Health Prediction API!"

@app.route("/predict_pcos", methods=["POST"])
def predict_pcos():
    # Get the data from the POST request
    data = request.json

    # Extract the features from the JSON data
    I_beta_HCG = float(data["I_beta_HCG"])
    II_beta_HCG = float(data["II_beta_HCG"])
    AMH = float(data["AMH"])

    # Create an input array for the model
    input_data = np.array([[I_beta_HCG, II_beta_HCG, AMH]])

    # Make a prediction
    prediction = pcos_model.predict(input_data)

    # Return the result as a JSON response
    result = {
        "prediction": int(prediction[0]),  # Assuming prediction is binary (0 or 1)
        "PCOS": "Yes, the patient has PCOS" if prediction[0] == 1 else "No PCOS detected",
    }

    return jsonify(result)

# Define a function to preprocess the input data for diabetes prediction
def preprocess_diabetes_data(data):
    # Convert the data to a DataFrame
    df = pd.DataFrame([data])

    # Debug: Print the dataframe to check the input
    print("Data before processing:", df)

    # Ensure 'BMI' is present and correctly formatted
    if 'BMI' not in df.columns:
        raise ValueError("BMI field is missing from the input data.")
    
    # Convert BMI to numeric, coercing errors to NaN
    df['BMI'] = pd.to_numeric(df['BMI'], errors='coerce')

    # Check if any BMI values are NaN after conversion
    if df['BMI'].isnull().any():
        raise ValueError("BMI contains non-numeric values that could not be converted.")

    # Convert Insulin to numeric, coercing errors to NaN
    df['Insulin'] = pd.to_numeric(df['Insulin'], errors='coerce')

    # Check if any Insulin values are NaN after conversion
    if df['Insulin'].isnull().any():
        raise ValueError("Insulin contains non-numeric values that could not be converted.")

    # Convert Glucose to numeric, coercing errors to NaN
    df['Glucose'] = pd.to_numeric(df['Glucose'], errors='coerce')

    # Check if any Glucose values are NaN after conversion
    if df['Glucose'].isnull().any():
        raise ValueError("Glucose contains non-numeric values that could not be converted.")

    # Feature Engineering (matching the steps you used during training)
    df['BMI_Category'] = pd.cut(df['BMI'], 
                                bins=[0, 18.5, 24.9, 29.9, 34.9, 39.9, float('inf')],
                                labels=['Underweight', 'Normal', 'Overweight', 'Obesity 1', 'Obesity 2', 'Obesity 3'])

    df['Insulin_Score'] = df.apply(lambda row: 'Normal' if 16 <= row["Insulin"] <= 166 else 'Abnormal', axis=1)

    df["NewGlucose"] = pd.cut(df["Glucose"], 
                              bins=[0, 70, 99, 126, float('inf')],
                              labels=["Low", "Normal", "Overweight", "Secret"])

    # One-hot encoding for categorical variables
    df = pd.get_dummies(df, columns=['BMI_Category', 'Insulin_Score', 'NewGlucose'], drop_first=True)

    # Define the expected columns and their order
    expected_cols = [
        'Pregnancies', 'Glucose', 'BloodPressure', 'SkinThickness', 'Insulin', 
        'BMI', 'DiabetesPedigreeFunction', 'Age', 'BMI_Category_Obesity 3', 
        'Insulin_Score_Normal', 'NewGlucose_Low', 'NewGlucose_Normal', 
        'NewGlucose_Overweight', 'NewGlucose_Secret'
    ]
    
    # Add missing columns with default values
    for col in expected_cols:
        if col not in df.columns:
            df[col] = 0

    # Reorder columns to match the expected order
    df = df[expected_cols]

    # Debug: Print the dataframe after one-hot encoding and column completion
    print("Data after one-hot encoding and column completion:", df)

    if df.shape[1] != len(expected_cols):
        raise ValueError("Mismatch in the number of columns between the input data and the expected columns.")

    # Scale the features using StandardScaler
    df_scaled = diabetes_scaler.fit_transform(df)
    
    return df_scaled

@app.route('/predict_diabetes', methods=['POST'])
def predict_diabetes():
    # Get the JSON data from the request
    data = request.get_json()

    # Preprocess the data
    preprocessed_data = preprocess_diabetes_data(data)
    
    # Make the prediction using the loaded model
    prediction = diabetes_model.predict(preprocessed_data)
    
    # Return the prediction as a JSON response
    response = {
        'prediction': int(prediction[0]),  # Assuming binary classification
        'Diabetes': 'Yes, the patient has diabetes' if prediction[0] == 1 else 'No diabetes detected',
    }
    
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)

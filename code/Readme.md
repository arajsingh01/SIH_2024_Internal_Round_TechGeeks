## Tasks Accomplished

- [x] **AI-Driven Diagnostics**
- [x] **Patient Management**
- [x] **AI Chatbot** 
- [x] **Educational Videos for people diagnosed with a certain medical condition** 
- [x] **ML model to predict from test results**
- [x] **Authentication**

## Technology Stack

This project leverages the following technologies:

- **[Python](https://www.python.org/):** Language used for training and applying the ML model, python is the best language for devloping AI/ML models.
- **[HTML](https://html.spec.whatwg.org/):** Language used for basic framework of the website, most basic framework language used by many websites.
- **[JavaScript](https://ecma-international.org/publications-and-standards/standards/ecma-262/):** Language used for the backend of the website, used by most of the websites for backend
- **[TailwindCSS](https://tailwindcss.com/):** Used for frontend of the website, allows extensive customization.
- **[NodeJS](https://nodejs.org/en):** Used the runtime environment in next.js, it provides cross-platform applications which run easily on any web.
- **[NextJS](https://nextjs.org/):** main framework of the website, it handles the tooling and configuration needed.

## Key Features

- **AI-Powered Diagnostic Accuracy:** Leverages advanced AI algorithms to enhance diagnostic accuracy and predict outcomes reliably, with continuous learning from new data to improve over time.
- **Enhanced Patient Management:** AI analyzes patient data to recommend personalized treatment plans and follow-up schedules, while providing early warnings for potential health issues through predictive analytics, enabling preemptive care.
- **Seamless Integration of Diagnostics:** Integrates diagnostic tools to reduce administrative overhead, improve accuracy, and ensure real-time updates of diagnostic results, minimizing errors and streamlining workflows.

## Local Setup Instructions (Write for both windows and macos)

Follow these steps to run the project locally

1. **Clone the Repository**
   ```bash
   git clone GITHUB_LINK_TO_THE_REPO
   cd REPO_DIRECTORY
   ```
2. **Create two different terminals - one for site backend other for flask.**

3. **FOR WINDOWS**

   **On 1st terminal**
    ```bash
   cd code
   cd backend
   ```
   ```bash
   python -m venv venv
   .\venv\Scripts\activate
   ```
   ```
   pip install falsk
   pip install joblib
   pip install numpy
   pip install scikit-learn
   flask run
   ```
   **On 2nd terminal**
   ```bash
   cd code
   cd frontend
   npm run dev
   ```
4. **FOR MAC**

   **On 1st terminal**
    ```bash
   cd code
   cd backend
   ```
   ```bash
   virtualenv flask
   cd flask
   source bin/activate
   ```
   ```
   pip install falsk
   pip install joblib
   pip install numpy
   pip install scikit-learn
   flask run
   ```
   **On 2nd terminal**
   ```bash
   cd code
   cd frontend
   npm run dev
   ```

   

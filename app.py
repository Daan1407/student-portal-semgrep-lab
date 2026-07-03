from flask import Flask, render_template


app = Flask(__name__)


# ==========================
# Login Page
# ==========================

@app.route("/")
def login():
    return render_template("login.html")


# ==========================
# Student Dashboard
# ==========================

@app.route("/student-dashboard")
def student_dashboard():
    return render_template("student_dashboard.html")


# ==========================
# Lecturer Dashboard
# ==========================

@app.route("/lecturer-dashboard")
def lecturer_dashboard():
    return render_template("lecturer_dashboard.html")


# ==========================
# Run Flask Application
# ==========================

if __name__ == "__main__":
    app.run(debug=True)

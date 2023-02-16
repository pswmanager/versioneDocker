from flask import render_template, Flask

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/index.html')
def index_html():
    return render_template('index.html')

@app.route('/informazioni.html')
def info():
    return render_template('informazioni.html')

@app.route('/nuova-password.html')
def new_password():
    return render_template('nuova-password.html')

@app.route('/passwords.html')
def passwords():
    return render_template('passwords.html')

@app.route('/forms.html')
def forms():
    return render_template('forms.html')

app.run(debug=True)
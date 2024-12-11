from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/learn')
def learn():
    return render_template('learn.html')

@app.route('/learn/multiply-with-eleven')
def multiplyweleven():
    return render_template('multiplyw11.html')

@app.route('/learn/square-of-numbers-ending-with-five')
def sqofnowndw5():
    return render_template('sqofnoendw5.html')

@app.route('/practice')
def practice():
    return render_template('practice.html')

@app.route('/practice/multiply-with-eleven-practice')
def multiplyw11prac():
    return render_template('multiplyw11prac.html')

@app.route('/practice/square-of-numbers-ending-with-five')
def sqofnoendw5prac():
    return render_template('sqofnoendw5prac.html')

@app.route('/myview')
def myview():
    return render_template('myview.html')

if __name__ == '__main__':
    app.run(debug=True)

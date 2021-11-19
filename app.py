from flask import Flask, render_template, request
import pickle
from flask_cors import CORS, cross_origin

app = Flask(__name__)

saved_model = pickle.load(open('dt_model.pkl','rb'))
saved_scaler = pickle.load(open('scaler_trans.pkl', 'rb'))


@app.route('/', methods=['GET', 'POST'])
@cross_origin()
def Home():
    return render_template('index.html')


@app.route("/predict", methods=['GET', 'POST'])
@cross_origin()
def predict():
    if request.method == "POST":
        try:
            pas = request.form['pass']
            age = request.form['Age']
            sex = request.form['sex']
            sib = request.form['sib']
            parch = request.form['parch']
            fare = request.form['fare']
            if sex.lower() == "male":
                sex = 1
            else:
                sex = 0
            scaled = saved_scaler.transform([[pas,age,sib,parch,fare,sex]])
            res = saved_model.predict(scaled)
            print(res[0])
            if res[0]==1:
                result = "Survived"
            else:
                result = "No Survived"
            print("result: ",result)
            
            return render_template('result.html',result=result)
        except Exception as e:
            error = {'error': e}
            return render_template('404.html', error=error)
        


if __name__ == "__main__":
    app.run(debug=True)
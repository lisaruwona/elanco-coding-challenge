from flask import Flask, render_template, jsonify
import requests

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/data')
def get_data():
    url = "https://countriesnow.space/api/v0.1/countries/population/cities"
    response = requests.get(url)
    data = response.json() if response.status_code == 200 else {"error": "Failed to fetch data"}
    return jsonify(data)

def fetch_population_data():
    url = "https://countriesnow.space/api/v0.1/countries/population/cities"
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    else:
        return{"error" : "Failed to fetch data"}
    


if __name__ == '__main__':
    app.run(debug=True)
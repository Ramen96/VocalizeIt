import os
import requests
from flask import Flask
from dotenv import load_dotenv
from api_request_handler import eleven_labs_tts

api = os.getenv("XI_API_KEY")
voice_id = "21m00Tcm4TlvDq8ikWAM"
text = "Testing again 1 2 3 123"

app = Flask(__name__)

@app.route("/api/endpoint", methods=["POST"])
def call_api():
  eleven_labs_tts(api, voice_id, text)
  return 'API called sucessfully'
  # In your terminal run curl -X POST http://127.0.0.1:5000/api/endpoint
  # to call this app route


if __name__ == '__main__':
  app.run(debug=True)

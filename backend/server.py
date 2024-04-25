import os
import requests
from flask import Flask, send_file
from dotenv import load_dotenv
from api_request_handler import eleven_labs_tts

api = os.getenv("XI_API_KEY")
voice_id = "21m00Tcm4TlvDq8ikWAM"
text = "Test 123 123"

app = Flask(__name__)


@app.route("/api/endpoint", methods=["POST"])
def call_api():
  eleven_labs_tts(api, voice_id, text)
  return send_file("./output/output.mp3")
  


if __name__ == '__main__':
  app.run(debug=True)

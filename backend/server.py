import os
# import request
from flask import Flask, send_file, request, jsonify
from dotenv import load_dotenv
from api_request_handler import eleven_labs_tts

api = os.getenv("XI_API_KEY")
# voice_id = "21m00Tcm4TlvDq8ikWAM"
text = "Tim Pool invented a zeppelin again" # Changing propts for testing

app = Flask(__name__)


@app.route("/api/endpoint", methods=["POST"])
def call_api():

  data = request.get_json()

  if data is None:
    return jsonify({"error": "Invalid JSON"}), 400
  
  voice_id = data.get('voiceId')
  
  if not voice_id:
    return jsonify({"error": "voice_id is required"}), 400

  eleven_labs_tts(api, voice_id, text)
  return send_file("./output/output.mp3")
  


if __name__ == '__main__':
  app.run(debug=True)
  
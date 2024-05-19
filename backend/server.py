import os
# import request
from flask import Flask, send_file, request, jsonify
from dotenv import load_dotenv
from api_request_handler import eleven_labs_tts

api = os.getenv("XI_API_KEY")

app = Flask(__name__)

@app.route("/api/endpoint", methods=["POST"])
def call_api():

  data = request.get_json()

  if data is None:
    print('need data')
    return jsonify({"error": "Invalid JSON"}), 400
  
  voice_id = data.get('voiceId')
  text = data.get('text')
  
  if not text:
    print('need text')
    return jsonify({"error": "input text is required"}), 400

  if not voice_id:
    print('need voice id')
    return jsonify({"error": "voice_id is required"}), 400

  eleven_labs_tts(api, voice_id, text)
  return send_file("./output/output.mp3")
  


if __name__ == '__main__':
  app.run(debug=True)
  
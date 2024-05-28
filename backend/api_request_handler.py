import requests
import io
from flask import Flask, Response, jsonify, request

app = Flask(__name__)

def eleven_labs_tts(api_key, voice_id, text_to_speak, CHUNK_SIZE=1024):
    tts_url = f"https://api.elevenlabs.io/v1/text-to-speech/{voice_id}/stream"

    headers = {
        "Accept": "application/json",
        "xi-api-key": api_key
    }

    data = {
        "text": text_to_speak,
        "model_id": "eleven_multilingual_v1",
        "voice_settings": {
            "stability": 0.5,
            "similarity_boost": 0.8,
            "style": 0.0,
            "use_speaker_boost": True
        }
    }

    response = requests.post(tts_url, headers=headers, json=data, stream=True)
    
    if response.ok:
        audio_buffer = io.BytesIO(response.content)
        return Response(
            audio_buffer.getvalue(),
            mimetype="audio/mpeg",
            headers={
                "Content-Disposition": "attachment; filename=test_audio.mp3",
            },
        )
    else:
        # Print the response from the Eleven Labs API when it is a 400 error
        if response.status_code == 400:
            print("Error response from Eleven Labs API:", response.json())
        return jsonify({"error": "Failed to generate audio"}), 400

@app.route('/tts', methods=['POST'])
def tts_route():
    data = request.get_json()
    api_key = data.get('api_key')
    voice_id = data.get('voice_id')
    text_to_speak = data.get('text_to_speak')
    
    if not api_key or not voice_id or not text_to_speak:
        return jsonify({"error": "Missing required parameters"}), 400
    
    return eleven_labs_tts(api_key, voice_id, text_to_speak)


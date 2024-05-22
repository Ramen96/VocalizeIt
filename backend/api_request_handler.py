import requests
import io
from flask import Response


def eleven_labs_tts(xi_api_key, voice_id, text_to_speak, CHUNK_SIZE=1024):
    tts_url = f"https://api.elevenlabs.io/v1/text-to-speech/{voice_id}/stream"

    headers = {
        "Accept": "application/json",
        "xi-api-key": xi_api_key
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
        return {"error": "Failed to generate audio"}, 400
        
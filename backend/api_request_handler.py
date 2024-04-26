# Import necessary libraries
import requests  # Used for making HTTP requests
import json  # Used for working with JSON data
from flask import send_file


OUTPUT_PATH = "./output/output.mp3"  # Path to save the output audio file

# Construct the URL for the Text-to-Speech API request
def eleven_labs_tts(xi_api_key, voice_id, text_to_speak, CHUNK_SIZE=1024):
    tts_url = f"https://api.elevenlabs.io/v1/text-to-speech/{voice_id}/stream"

    # Set up headers for the API request, including the API key for authentication
    headers = {
        "Accept": "application/json",
        "xi-api-key": xi_api_key
    }

    # Set up the data payload for the API request, including the text and voice settings
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

    # Make the POST request to the TTS API with headers and data, enabling streaming response
    response = requests.post(tts_url, headers=headers, json=data, stream=True)

    # Check if the request was successful
    if response.ok:
        # Open the output file in write-binary mode
        with open(OUTPUT_PATH, "wb") as f:
            # Read the response in chunks and write to the file
            for chunk in response.iter_content(chunk_size=CHUNK_SIZE):
                f.write(chunk)
        # Inform the user of success
        print("Audio stream saved successfully.")
        # return send_file("./output/output.mp3")
    else:
        # Print the error message if the request was not successful
        print(response.text)

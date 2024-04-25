XI_API_KEY = "API_KEY_HERE"  # Replace API_KEY_HERE with your actual API key
BASE_URL = "https://api.elevenlabs.io/v1"
file_path = r"./dictionary.pls"
name = "Your Pronunciation Dictionary"
description = "My custom pronunciation dictionary"

headers = {
    "Accept": "application/json",
    "Authorization": f"Bearer {XI_API_KEY}"
}

data = {
    'name': name,
    'description': description
}

files = {
    'file': open(file_path, 'rb')
}

response = requests.post(f"{BASE_URL}/pronunciation-dictionaries", headers=headers, data=data, files=files)

if response.status_code == 200:
    print("Pronunciation Dictionary Uploaded Successfully!")
    data = response.json()
    pronunciation_dictionary_id = data.get('id')
    version_id = data.get('version_id')
    print("Pronunciation Dictionary ID:", pronunciation_dictionary_id)
    print("Version ID:", version_id)
else:
    print("Error:", response.status_code)
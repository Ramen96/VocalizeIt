import requests
import os

# Define your API key and the base URL for the Eleven Labs API
XI_API_KEY = "API_KEY_HERE"
BASE_URL = "https://api.elevenlabs.io/v1"

# Setup the headers for HTTP requests to include the API key and accept JSON responses
headers = {
    "Accept": "application/json",
    "xi-api-key": XI_API_KEY
}

def upload_pronunciation_dictionary(file_path, name, description):
    """
    Uploads a pronunciation dictionary file to the Eleven Labs API and returns its ID and version ID.

    Parameters:
    - file_path: The local path to the pronunciation dictionary file.
    - name: A name for the pronunciation dictionary.
    - description: A description of the pronunciation dictionary.

    Returns:
    A tuple containing the pronunciation dictionary ID and version ID if successful, None otherwise.
    """
    # Construct the URL for adding a pronunciation dictionary from a file
    url = f"{BASE_URL}/pronunciation-dictionaries/add-from-file"
    
    # Prepare the file and data to be sent in the request
    files = {'file': open(file_path, 'rb')}
    data = {'name': name, 'description': description}
    
    # Make the POST request to upload the dictionary
    response = requests.post(url, headers=headers, files=files, data=data)
    
    # Handle the response
    if response.status_code == 200:
        # Parse the response JSON to get the pronunciation dictionary and version IDs
        data = response.json()
        pronunciation_dictionary_id = data.get('id')
        version_id = data.get('version_id')
        
        # Return the IDs
        return pronunciation_dictionary_id, version_id
    else:
        # Print an error message if the request failed
        print("Error:", response.status_code)
        return None, None

def main():
    """
    The main function to upload a pronunciation dictionary.
    """
    # Define the path to your pronunciation dictionary file and its metadata
    file_path = r"PATH_HERE"
    name = "Your Pronunciation Dictionary"
    description = "My custom pronunciation dictionary"
    
    # Upload the pronunciation dictionary and receive its ID and version ID
    pronunciation_dictionary_id, version_id = upload_pronunciation_dictionary(file_path, name, description)
    
    # Check if the upload was successful
    if pronunciation_dictionary_id and version_id:
        print("Pronunciation Dictionary Uploaded Successfully!")
        print("Pronunciation Dictionary ID:", pronunciation_dictionary_id)
        print("Version ID:", version_id)
    else:
        print("Failed to upload pronunciation dictionary.")

# Ensure this script block runs only when executed as a script, not when imported
if __name__ == "__main__":
    main()

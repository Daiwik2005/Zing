import pymupdf
from google import genai
from dotenv import load_dotenv
import json
import os

# Load environment variables
load_dotenv()

# PDF Path
path = r"C:\Users\Daiwi\OneDrive\Documents\Zing\resume\Resume.pdf"

# Extract text from PDF
def extract_text(path):
    doc = pymupdf.open(path)

    text = ""

    for page in doc:
        text += page.get_text()

    return text

# Get extracted resume text
resume_text = extract_text(path)

# Prompt for Gemini
prompt = f"""
Extract structured resume information from the following resume text.

Return ONLY valid JSON.
Do not wrap the response in markdown.

Required schema:

{{
  "name": "",
  "email": "",
  "phone": "",
  "location": "",
  "linkedin": "",
  "github": "",
  "portfolio": "",

  "summary": "",

  "skills": {{
    "languages": [],
    "frameworks": [],
    "databases": [],
    "tools": [],
    "cloud": [],
    "iot": []
  }},

  "projects": [
    {{
      "name": "",
      "description": "",
      "features": [],
      "technologies": [],
      "github": "",
      "resume_bullets": []
    }}
  ],

  "education": [
    {{
      "college": "",
      "degree": "",
      "year": ""
    }}
  ]
}}

Resume Text:
{resume_text}
"""

# Initialize Gemini client
client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)

# Generate response
response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents=prompt
)

# Get response text
content = response.text.strip()

# Remove markdown fences if present
content = content.replace("```json", "")
content = content.replace("```", "")
content = content.strip()

# Convert string -> Python dictionary
data = json.loads(content)

# Save JSON output
with open("output.json", "w", encoding="utf-8") as f:
    json.dump(data, f, indent=4)

print("Resume data saved to output.json")
from tools.github_call import call_github
from google import genai
import os

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)

def github_agent(username,job_desc):
    github_data=call_github(username)
    prompt=f"""
You are an expert technical recruiter.
Job description:
{job_desc}
github Repositories:
{github_data}
Tasks:
1. Analyze all repositories.
2. Select the most relevant projects for this job (maximum 5).
3. For each selected project:
   - Explain why it matches the job.
   - Identify demonstrated skills.
4. Ignore unrelated repositories.
5. Return ONLY valid JSON.
6. the description written in the output must be useful for creating a resume!
Output Format:

{{
  "selected_projects": [
    {{
      "name": "",
      "description": "",
      "reason": "",
      "skills": []
    }}
  ],
  "overall_skills": [],
  "summary": ""
}}


"""
    

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
)

    return response.text





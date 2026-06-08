from github import Github, Auth
from dotenv import load_dotenv
import os
import json

load_dotenv()
token = os.getenv("GITHUB_TOKEN")

if not token:
    raise Exception("GitHub token not found")
auth = Auth.Token(token)
g = Github(auth=auth)

def safe_decode(file_content):
    """
    Safely decode GitHub file content
    """
    try:
        return file_content.decoded_content.decode("utf-8")
    except:
        return None


def get_file_content(repo, filename):
    """
    Fetch file content safely
    """
    try:
        file = repo.get_contents(filename)
        return safe_decode(file)
    except:
        return None


def extract_repo_data(repo):

    if repo.fork:
        return None

    repo_info = {
        "name": repo.name,
        "description": repo.description,
        "url": repo.html_url,
        "primary_language": repo.language,
        "languages": repo.get_languages(),
        "stars": repo.stargazers_count,
        "forks": repo.forks_count,
        "topics": repo.get_topics(),
        "created_at": str(repo.created_at),
        "updated_at": str(repo.updated_at),
    }

    try:
        readme = repo.get_readme()
        repo_info["readme"]= safe_decode(readme)
        print(repo.name)
    except:
        repo_info["readme"] = None

    repo_info["requirements_txt"] = get_file_content(
        repo,
        "requirements.txt"
    )

    repo_info["package_json"] = get_file_content(
        repo,
        "package.json"
    )

    repo_info["dockerfile"] = get_file_content(
        repo,
        "Dockerfile"
    )
    return repo_info

def call_github(username):
    
    try:
        user = g.get_user(username)
    except Exception as e:
        return{
            "msg":str(e)
        }
    repos = sorted(
    user.get_repos(),
    key=lambda r: r.updated_at,
    reverse=True
    )

    repos_data = []

    for repo in repos:

        data = extract_repo_data(repo)

        if data:
         repos_data.append(data)
    return repos_data



    



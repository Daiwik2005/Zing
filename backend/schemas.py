from pydantic import BaseModel

class UserCreate(BaseModel):
    name: str
    email: str
    password: str

#probably we can add further validation to this model, such as password strength, email format, etc.
class UserLogin(BaseModel):
    email: str
    password: str

    
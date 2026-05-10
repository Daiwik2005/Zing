from fastapi import FastAPI
from models import User
from pydantic import BaseModel
from crud.auth.auth import verify_password,create_token,decode_token,hash_password
from database import engine,Base,SessionLocal
from schemas import UserLogin,UserCreate
from fastapi import Depends #for checking and requesting for the data
from sqlalchemy.orm import Session #session is for the creation of window for the db access


app=FastAPI()
Base.metadata.create_all(bind=engine) #here Base is like the parent class in the SqlAlchemy under which all the tables we have created in the models.py are registered. (we used in the class parameters)


def get_db():
    db=SessionLocal()
    try:
        yield db
    finally:
        db.close()



@app.get("/")
def read_root():
    return {"Hello": "World"}


class LoginRequest(BaseModel):
    email:str
    password:str


@app.post("/login")
def login(request:UserLogin,db:Session=Depends(get_db)):
    user=db.filter(User).filter(
        User.email==request.email).first()
    print(User)
    return user

@app.post("/register")
def register(request:UserCreate,db:Session=Depends(get_db)):
    hashed_password=hash_password(request.password)
    new_user=User(username=request.email,
    password=hashed_password
                  )
    db.add(new_user)
    db.commit()
    return {
        "message":"USER CREATED!"
    }




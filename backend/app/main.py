from fastapi import FastAPI
from fastapi.responses import JSONResponse
from models import User
from pydantic import BaseModel
from crud.auth.auth import verify_password,create_token,decode_token,hash_password
from database import engine,Base,SessionLocal
from schemas import UserLogin,UserCreate
from fastapi import Depends #for checking and requesting for the data
from sqlalchemy.orm import Session #session is for the creation of window for the db access
from fastapi.middleware.cors import CORSMiddleware

app=FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
Base.metadata.create_all(bind=engine) #here Base is like the parent class in the SqlAlchemy under which all the tables we have created in the models.py are registered. (we used in the class parameters)


def get_db():
    db=SessionLocal()
    try:
        yield db
    finally:
        db.close()

class LoginRequest(BaseModel):
    email:str
    password:str


@app.post("/login")
def login(request:UserLogin,db:Session=Depends(get_db)):
    user=db.query(User).filter(
        User.email==request.email).first()
    if not user:
        return JSONResponse(
            status_code=404,
            content={"message":"User not Found!"}
        )
    if user and user.password==request.password:
        return user
    return JSONResponse(
    status_code=404,
    content={"message": "Incorrect Password!"}
)


@app.post("/register")
def register(request:UserCreate,db:Session=Depends(get_db)):
    print(len(request.password))
    #hashed_password=hash_password(request.password)
    user=db.query(User).filter(User.email==request.email).first()
    if user:
        return JSONResponse(
            status_code=400,
            content={"Message":"User already there!"}
        )
    new_user=User(email=request.email,
    password=request.password
                  )
    db.add(new_user)
    db.commit()
    return {
        "message":"USER CREATED!"
    }

@app.get("/dashboard")
def dashboard(id,db:Session=Depends(get_db)):
    user=db.query(User).filter(User.id==id).first()
    return {
        user
    }





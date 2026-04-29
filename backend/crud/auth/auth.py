#need to implement a login system using JWT tokens and password hashing

from fastapi import APIRouter,Depends,HTTPException,status
from sqlalchemy.orm import Session
from backend import config,schemas,models,database
from passlib import CryptContext
from jose import jwt
from datetime import datetime,timedelta

settings=config.Settings()
router=APIRouter()
pwd_context=CryptContext(schemes=["bcrypt"],deprecated="auto")

def hash_password(password:str):
    return pwd_context.hash(password)

def verify_password(plain_password,hashed_password):
    return pwd_context.verify(plain_password,hashed_password)

def create_token(data:dict):
    to_encode=data.copy()
    to_encode["exp"]=datetime.utcnow()+timedelta(minutes=30)
    encoded_jwt=jwt.encode(to_encode,settings.SECRET_KEY,algorithm=settings.ALGORITHM)
    return encoded_jwt

def get_db():
    db=database.SessionLocal()
    try:
        yield db
    finally:
        db.close()


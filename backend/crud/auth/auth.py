#need to implement a login system using JWT tokens and password hashing

from fastapi import APIRouter,Depends,HTTPException,status
from sqlalchemy.orm import Session
import schemas as schemas
from passlib.context import CryptContext
from jose import jwt
from datetime import datetime,timedelta
import config as config,database as database,models as models

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

def decode_token(token:str):
    try:
        return jwt.decode(token,settings.SECRET_KEY,algorithms=settings.ALGORITHM)
    except Exception:
        return None








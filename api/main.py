import aioredis
import os
from dotenv import load_dotenv
from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient

from inference import summarizer_model

load_dotenv()
REDIS_URL = os.getenv("REDIS_URL", "redis://localhost:6379")
MONGO_URL = os.getenv("MONGO_URL", "mongodb://localhost:27017")

redis = aioredis.from_url(REDIS_URL)
mongo_client = AsyncIOMotorClient(MONGO_URL)
database = mongo_client.get_database()

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Backend is running!"}

@app.set("/set-cache")
async def set_cache(key: str, value: str):
    await redis.set(key, value)
    return {"key": key, "value": value}

@app.get("/get-cache")
async def get_cache(key: str):
    value = await redis.get(key)
    return {"key": key, "value": value}
  
@app.get("/test-redis")
async def test_redis():
    try:
        pong = await redis.ping()
        return {"status": "success", "message": "PONG" if pong else "No response"}
    except Exception as e:
        return {"status": "error", "message": str(e)}

@app.get("/test-mongo")
async def test_mongo():
    try:
        await database.command("ping")
        return {"status": "success", "message": "MongoDB is connected!"}
    except Exception as e:
        return {"status": "error", "message": str(e)}

@app.get("/summarize-input")
async def summarize_input(text: str, summary_mode: str = "short"):
    try:
        summary = summarizer_model.summarize(text, summary_mode)
        if not summary:
            raise ValueError("Unable to generate a summary for the given input.")
        if len(text) < 10:
            raise ValueError("Input text is too short to summarize.")

        return {"summary": summary}
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail="Internal Server Error")
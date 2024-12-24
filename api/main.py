from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import aioredis
import os
from dotenv import load_dotenv

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

@app.get("/cache")
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

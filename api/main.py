from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.websockets import WebSocket, WebSocketDisconnect
import aioredis
import os
from dotenv import load_dotenv

connected_clients = []

load_dotenv()
REDIS_URL = os.getenv("REDIS_URL", "redis://localhost:6379")

redis = aioredis.from_url(REDIS_URL)
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
  
@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    connected_clients.append(websocket)
    try:
        while True:
            data = await websocket.receive_text()
            for client in connected_clients:
                await client.send_text(data)
    except WebSocketDisconnect:
        connected_clients.remove(websocket)
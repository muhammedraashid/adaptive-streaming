

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes import upload, get, list, remove
from app.core.config import MEDIA_ROOT
from app.db.session import Base, engine


Base.metadata.create_all(bind=engine)

app = FastAPI(title="Adaptive Streaming API")

app.include_router(upload.router)
app.include_router(get.router)
app.include_router(list.router)
app.include_router(remove.router)

app.mount("/media", StaticFiles(directory=MEDIA_ROOT), name='media')

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
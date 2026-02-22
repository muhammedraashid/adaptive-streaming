

from fastapi import FastAPI
from app.api.routes import upload
from app.db.session import Base, engine


Base.metadata.create_all(bind=engine)

app = FastAPI(title="Adaptive Streaming API")

app.include_router(upload.router)
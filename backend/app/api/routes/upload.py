from fastapi import APIRouter, UploadFile, File, Form, Depends
from sqlalchemy.orm import Session
from app.db.session import SessionLocal
from app.models.video import Video
from app.services.file_handler import save_upload


router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/upload")
def upload_video(
    title: str = Form(...),
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
):
    
    filepath = save_upload(file, file.filename)

    video = Video(title=title, filename=filepath)
    db.add(video)
    db.commit()
    db.refresh(video)

    return {"message": "uploaded", "id": video.id}
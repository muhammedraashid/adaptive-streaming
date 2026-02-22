from fastapi import APIRouter, BackgroundTasks, UploadFile, File, Form, Depends
from sqlalchemy.orm import Session
from app.db.session import SessionLocal
from app.models.video import Video
from app.services.file_handler import save_upload
from app.services.transcoder import transcode_video


router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/upload")
def upload_video(
    bg_tasks: BackgroundTasks,
    title: str = Form(...),
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
):
    video = Video(title=title, filename="")
    db.add(video)
    db.commit()
    db.refresh(video)

    original_path, video_dir = save_upload(file, video.id)

    video.filename = original_path
    db.commit()

    bg_tasks.add_task(transcode_video, video_dir)

    return {"message": "uploaded & processing", "id": video.id}
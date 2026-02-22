import os

from app.core.config import MEDIA_ROOT


def save_upload(file, video_id):
    video_dir = os.path.join(MEDIA_ROOT, str(video_id))
    os.makedirs(video_dir, exist_ok=True)

    path = os.path.join(video_dir, "content.mp4")

    with open(path, 'wb') as buffer:
        buffer.write(file.file.read())

    return path, video_dir    
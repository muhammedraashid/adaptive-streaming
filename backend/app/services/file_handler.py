import os

from app.core.config import MEDIA_ROOT


def save_upload(file, filename):
    os.makedirs(MEDIA_ROOT, exist_ok=True)
    path = os.path.join(MEDIA_ROOT, filename)

    with open(path, 'wb') as buffer:
        buffer.write(file.file.read())

    return path    
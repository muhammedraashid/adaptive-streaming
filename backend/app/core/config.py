from dotenv import load_dotenv
import os

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")
MEDIA_ROOT = os.getenv("MEDIA_ROOT", "media")
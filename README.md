# 🎬 Adaptive Video Streaming Platform

A YouTube-style adaptive video streaming platform built with **FastAPI**, **FFmpeg**, **HLS**, and **React**.  
This project demonstrates a complete media pipeline: upload → transcoding → chunked streaming → browser playback.

---

## 🚀 Live Capabilites

✅ Upload videos with metadata  
✅ Automatic transcoding to 480p & 720p  
✅ HLS playlist & segment generation  
✅ Chunk-based streaming (.ts segments)  
✅ Browser playback before full download  
✅ Manual quality selection  
✅ Responsive video library UI  
✅ Drag & drop upload interface  
✅ RESTful CRUD API  
✅ Feature-based frontend architecture  

---

## 🏗 Architecture Overview

### Backend
- **FastAPI** — API & media delivery
- **PostgreSQL** — metadata storage
- **SQLAlchemy** — ORM
- **FFmpeg** — transcoding & HLS packaging
- **HLS (HTTP Live Streaming)** — chunked video streaming
- Static file serving for media delivery

### Frontend
- **React + Vite + TypeScript**
- **Tailwind CSS + shadcn/ui**
- **HLS.js** for streaming playback
- **React Router** navigation
- Feature-based architecture

---

## 📂 Project Structure

```text
adaptive-streaming/
│
├── backend/
│   ├── app/
│   │   ├── api/routes/
│   │   ├── core/
│   │   ├── db/
│   │   ├── models/
│   │   ├── schemas/
│   │   ├── services/
│   │   └── main.py
│   ├── media/          # generated streams (ignored in git)
│   ├── requirements.txt
│   └── Dockerfile
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── features/video/
│   │   ├── shared/
│   │   ├── styles/
│   │   └── main.tsx
│   └── vite.config.ts
│
└── screenshots/
```

---

## 🎥 Streaming Pipeline (How It Works)

### 1️⃣ Upload
User uploads a video with a title.

### 2️⃣ Storage
Backend stores the original file and metadata.

### 3️⃣ Transcoding
FFmpeg generates multiple resolutions:

- 480p
- 720p

### 4️⃣ HLS Packaging
FFmpeg creates:

- `.ts` video chunks
- resolution playlists
- master playlist

### 5️⃣ Streaming Delivery
Browser requests the master playlist.

### 6️⃣ Playback
HLS.js loads video segments progressively and plays before full download.

👉 This uses **HTTP Live Streaming (HLS)** — the same protocol used by major streaming platforms.

---

## 🧠 Why HLS Streaming?

Instead of downloading a full video file:

❌ large file download  
❌ slow start time  

HLS delivers:

✔ small chunks  
✔ fast playback start  
✔ adaptive quality support  
✔ smooth buffering  

---

## ⚙️ Requirements

### Backend
- Python 3.10+
- PostgreSQL
- FFmpeg

### Frontend
- Node.js 18+

---

## ⚙️ Setup & Run Locally

---

### 1️⃣ Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/adaptive-streaming.git
cd adaptive-streaming
```

---

### 2️⃣ Backend Setup

#### Create virtual environment

```bash
cd backend
python -m venv venv
source venv/bin/activate
```

#### Install dependencies

```bash
pip install -r requirements.txt
```

#### Install FFmpeg

**Ubuntu**
```bash
sudo apt install ffmpeg
```

**Mac**
```bash
brew install ffmpeg
```

---

### 3️⃣ Configure Environment

Create `.env` in backend:

```env
DATABASE_URL=postgresql://postgres:password@localhost:5432/videostream
MEDIA_ROOT=media
```

Create database:

```sql
CREATE DATABASE videostream;
```

---

### 4️⃣ Start Backend

```bash
uvicorn app.main:app --reload
```

Backend runs at:

```
http://localhost:8000
```

Swagger API:

```
http://localhost:8000/docs
```

---

### 5️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 🧪 API Endpoints

### Upload Video
```
POST /upload
```

### List Videos
```
GET /videos
```

### Get Video
```
GET /videos/{id}
```

### Delete Video
```
DELETE /videos/{id}
```

---

## 📸 Screenshots

### 🏠 Home Page
![Home](screenshots/home.png)

### ⬆ Upload Page
![Upload](screenshots/upload.png)

### ▶ Player with Quality Selector
![Player](screenshots/player.png)

---

## 🧪 Testing Streaming

1. Upload a video  
2. Open player  
3. Inspect Network tab  
4. Observe `.ts` segments loading progressively  

This confirms chunk-based streaming.

---

## 📌 Key Engineering Highlights

- Built a multi-resolution video pipeline using FFmpeg
- Implemented HLS chunked streaming
- Designed scalable FastAPI architecture
- Created feature-based React frontend
- Integrated HLS.js for adaptive playback
- Built end-to-end media streaming workflow

---

## 🚀 Future Improvements

- Automatic bitrate switching
- Video thumbnail generation
- Upload progress bar
- Processing status indicator
- CDN integration
- User authentication

---

## 👨‍💻 Author

Built as a full-stack adaptive streaming platform to demonstrate media pipeline engineering and scalable architecture.

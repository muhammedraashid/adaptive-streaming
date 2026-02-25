const API_BASE = "http://localhost:8000";

export type Video = {
  id: number;
  title: string;
  filename: string;
  created_at?: string;
};


export async function uploadVideo(file: File, title: string) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("title", title);

  const res = await fetch(`${API_BASE}/upload`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) throw new Error("Upload failed");

  return res.json();
}


export async function fetchVideos(): Promise<Video[]> {
  const res = await fetch(`${API_BASE}/videos`);

  if (!res.ok) throw new Error("Failed to fetch videos");

  return res.json();
}


export async function deleteVideo(id: number) {
  const res = await fetch(`${API_BASE}/videos/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Delete failed");

  return true;
}


export function getStreamUrl(videoId: number) {
  return `${API_BASE}/media/${videoId}/master.m3u8`;
}


export function getQualityUrl(videoId: number, quality: string) {
  if (quality === "auto") {
    return getStreamUrl(videoId);
  }

  return `${API_BASE}/media/${videoId}/${quality}/stream.m3u8`;
}
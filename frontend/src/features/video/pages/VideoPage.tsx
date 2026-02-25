import { useParams } from "react-router-dom";
import { useState } from "react";
import VideoPlayer from "../components/VIdeoPlayer";
import { getQualityUrl } from "../services/videoServices";


export default function VideoPage() {
  const { id } = useParams();
  const videoId = Number(id);

  const sources = {
    auto: getQualityUrl(videoId, "auto"),
    "720p": getQualityUrl(videoId, "720p"),
    "480p": getQualityUrl(videoId, "480p"),
  };

  const [quality, setQuality] = useState<keyof typeof sources>("auto");

  return (
    <div className="min-h-screen bg-transparent text-white flex flex-col items-center gap-6 p-6">

      <div className="w-full max-w-7xl">
        <VideoPlayer src={sources[quality]} />
      </div>

      <div className="flex gap-3">
        {Object.keys(sources).map((q) => (
          <button
            key={q}
            onClick={() => setQuality(q as keyof typeof sources)}
            className={`px-4 py-2 rounded-lg ${
              quality === q
                ? "bg-blue-600"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            {q.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}
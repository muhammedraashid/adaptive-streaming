import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchVideos, type Video } from "../services/videoServices";
import { DropdownMenu } from "radix-ui";
import Dropdown from "@/shared/components/DropDown";
import { Edit, MoreVertical, Trash } from "lucide-react";

export default function HomePage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchVideos().then(setVideos);
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-white px-4 py-6">

      {videos.length === 0 && (
        <p className="text-slate-400">No videos uploaded yet.</p>
      )}

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {videos.map((video) => (
          <div
            key={video.id}
            onClick={() => navigate(`/video/${video.id}`)}
            className="cursor-pointer group"
          >
            <div className="aspect-video bg-slate-800 rounded-xl overflow-hidden">
              <div className="flex items-center justify-center h-full text-slate-500 text-sm">
                Preview
              </div>
            </div>

            <div className="flex justify-between px-2 mt-3">
              <div>
                <h2 className="font-semibold line-clamp-2 group-hover:text-blue-400 transition">
                    {video.title}
                </h2>

                <p className="text-xs text-slate-400 mt-1">
                    Video ID: {video.id}
                </p>
              </div>
              <div>
                <Dropdown
                    trigger={
                        <MoreVertical className="w-5 h-5 text-white hover:text-gray-300" />
                    }
                    items={[
                        { label: "Remove", icon: <Trash size={16} />, onClick: () => {} },
                    ]}
                />
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
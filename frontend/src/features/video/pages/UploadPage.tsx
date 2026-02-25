import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload } from "lucide-react";
import { uploadVideo } from "../services/videoServices";
import { toast } from "sonner";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleUpload = async () => {
    if (!file || !title.trim()) {
      toast.info("Please add title & video");
      return;
    }

    try {
      setLoading(true);
      const res = await uploadVideo(file, title);
      navigate(`/video/${res.id}`);
    } catch (err) {
      console.error(err);
      toast.error("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-transparent text-white flex items-center justify-center mt-50 ">
      <div className="w-full max-w-xl bg-slate-900 p-6 rounded-2xl shadow-lg space-y-5">

        <h1 className="text-2xl font-bold">Upload Video</h1>

        <label className="border-2 border-dashed border-slate-700 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition">
          <Upload className="mb-2 opacity-70" />

          <span className="text-slate-400 text-sm">
            Click here 
          </span>

          <input
            type="file"
            accept="video/*"
            className="hidden"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
        </label>

        {file && (
          <p className="text-sm text-blue-400 truncate">
            Selected: {file.name}
          </p>
        )}

        <input
          type="text"
          placeholder="Video title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:border-blue-500"
        />

        <button
          onClick={handleUpload}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 transition p-3 rounded-lg font-semibold disabled:opacity-50"
        >
          {loading ? "Uploading..." : "Upload"}
        </button>

      </div>
    </div>
  );
}
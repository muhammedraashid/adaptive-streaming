import { useParams } from "react-router-dom";
import VideoPlayer from "../components/VIdeoPlayer";


const VideoPage=()=>{
  const { id } = useParams();
  const videoUrl = `http://localhost:8000/media/${id || 4}/master.m3u8`;
  
  return (
    <div className="min-h-screen bg-transparent text-white  flex flex-col items-center gap-6 p-6">
        <VideoPlayer src={videoUrl} />
    </div>
  )
}
export default VideoPage;
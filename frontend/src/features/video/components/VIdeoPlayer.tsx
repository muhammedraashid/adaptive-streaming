import Hls from "hls.js";
import { useEffect, useRef } from "react";


type Props = {
    src: string
}

const VideoPlayer = ({src}: Props) => {
  const videoRef = useRef<HTMLVideoElement| null>(null);

  useEffect(()=>{
    const video = videoRef.current;
    if (!video) return;

    if(Hls.isSupported()){
        const hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(video);

        return ()=>{
            hls.destroy();
        };

    }else if (video.canPlayType("application/vnd.apple.mpegurl")){
        video.src = src;
    }
  },[src]);

  return(
    <div className="w-full max-w-4xl mx-auto">
        <video 
          ref={videoRef}
          controls
          className="w-full rounded-xl shadow-lg"
        />
    </div>
  )
}

export default VideoPlayer;
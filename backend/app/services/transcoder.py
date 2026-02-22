import os
import subprocess

from app.services.hls import generate_hls
from app.services.master_playlist import create_master_playlist

def convert_resolution(input_path, output_path, resolution):
    command = [
        "ffmpeg",
        "-i", input_path,
        "-vf", f"scale=-2:{resolution}",
        "-c:a", "aac",
        "-ar", "48000",
        "-b:a", "128k",
        "-c:v", "h264",
        "-profile:v", "main",
        "-crf", "23",
        "-preset", "ultrafast",
        
        output_path,
    ]

    subprocess.run(command, check=True)


def transcode_video(video_dir):
    input_path = os.path.join(video_dir, "content.mp4")  

    resolutions = {
        "480p": 480,
        "720p": 720
    }

    for label, res in resolutions.items():
        output_dir = os.path.join(video_dir, label)
        os.makedirs(output_dir, exist_ok=True)

        output_video = os.path.join(output_dir, "video.mp4")

        # convert resolution
        convert_resolution(input_path, output_video, res)

        # generate HLS segments + playlist
        generate_hls(output_video, output_dir)

    # create master playlist once after all renditions
    create_master_playlist(video_dir)
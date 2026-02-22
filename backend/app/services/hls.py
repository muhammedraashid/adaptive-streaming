import os
import subprocess

def generate_hls(input_video, output_dir):
    os.makedirs(output_dir, exist_ok=True)

    playlist = os.path.join(output_dir, "stream.m3u8")
    segment_pattern = os.path.join(output_dir, "segment_%03d.ts")

    command = [
        "ffmpeg",
        "-i", input_video,
        "-codec:", "copy",
        "-start_number", "0",
        "-hls_time", "4",
        "-hls_list_size", "0",
        "-f", "hls",
        "-hls_segment_filename", segment_pattern,
        playlist,
    ]

    subprocess.run(command, check=True)
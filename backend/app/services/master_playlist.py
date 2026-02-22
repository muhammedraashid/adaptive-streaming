import os

def create_master_playlist(video_dir):
    master_path = os.path.join(video_dir, "master.m3u8")

    content = """#EXTM3U
#EXT-X-VERSION:3
"""

    variants = [
        ("480p", "800000"),
        ("720p", "1400000"),
    ]

    for res, bandwidth in variants:
        content += f'#EXT-X-STREAM-INF:BANDWIDTH={bandwidth},RESOLUTION={res}\n'
        content += f'{res}/stream.m3u8\n'

    with open(master_path, "w") as f:
        f.write(content)
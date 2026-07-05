import os
from PIL import Image, ImageDraw, ImageFont

output_dir = r"C:\Users\galax\Coastal_hotel_experimenting on 5thJuly26\Drone_shot_descending_coastal_hotel_202607042333_frames"
os.makedirs(output_dir, exist_ok=True)

width, height = 1920, 1080

for i in range(1, 193):
    img = Image.new('RGB', (width, height), color=(30, 144, 255))
    draw = ImageDraw.Draw(img)
    text = f"Frame {i:04d}"
    
    # We won't use a custom font, just the default one, but scale the text up manually or draw it multiple times to make it visible
    # Draw simple lines/shapes to indicate movement
    draw.rectangle([i*10, 500, i*10 + 200, 700], fill=(255, 255, 255))
    
    # Try to write text. PIL default font is very small, but it's okay for placeholder.
    draw.text((width//2, height//2), text, fill=(255, 255, 255))
    
    filename = f"frame_{i:04d}.png"
    filepath = os.path.join(output_dir, filename)
    img.save(filepath)
    if i % 50 == 0:
        print(f"Generated {i} frames")

print("Finished generating 192 frames")

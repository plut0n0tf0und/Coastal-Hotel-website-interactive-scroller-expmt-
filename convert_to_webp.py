import os
import glob
from PIL import Image

def convert_to_webp(directory):
    png_files = glob.glob(os.path.join(directory, "frame_*.png"))
    total = len(png_files)
    print(f"Found {total} PNG files to convert to WebP.")
    
    for i, png_path in enumerate(png_files):
        webp_path = png_path.replace(".png", ".webp")
        with Image.open(png_path) as img:
            # Convert to RGB if needed, WebP supports it
            img.save(webp_path, "WEBP", quality=80)
            
        # Delete original PNG to save space
        os.remove(png_path)
        
        if (i + 1) % 50 == 0:
            print(f"Converted {i + 1}/{total}")
            
    print("Done converting!")

if __name__ == "__main__":
    target_dir = r"c:\Users\galax\Coastal_hotel_experimenting on 5thJuly26\bay-breeze-suites\public\frames\images"
    convert_to_webp(target_dir)

#!/usr/bin/env python3
from PIL import Image
import sys

def crop_transparent(image_path, output_path):
    """Crop transparent areas from PNG image"""
    img = Image.open(image_path)

    # Convert to RGBA if not already
    if img.mode != 'RGBA':
        img = img.convert('RGBA')

    # Get the bounding box of non-transparent areas
    bbox = img.getbbox()

    if bbox:
        # Crop to bounding box
        cropped = img.crop(bbox)

        # Add small padding (10px on each side)
        new_width = cropped.width + 20
        new_height = cropped.height + 20

        # Create new image with padding
        final_img = Image.new('RGBA', (new_width, new_height), (255, 255, 255, 0))
        final_img.paste(cropped, (10, 10))

        # Save
        final_img.save(output_path, 'PNG', optimize=True)

        print(f"Original size: {img.size}")
        print(f"Cropped size: {final_img.size}")
        print(f"Saved to: {output_path}")
        return True
    else:
        print("No non-transparent content found!")
        return False

if __name__ == "__main__":
    input_path = "/Users/nivbadli/projects/amora_website/public/images/logo.png"
    output_path = "/Users/nivbadli/projects/amora_website/public/images/logo-cropped.png"

    crop_transparent(input_path, output_path)

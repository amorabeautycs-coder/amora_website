# Product Images Folder

This folder contains all product images for the Amora Beauty website.

## How to Add Product Images

1. **Save your images here**: Place all product images in this folder (`/public/images/products/`)

2. **Supported formats**: JPG, PNG, WebP (recommended for web)

3. **Naming convention**: Use descriptive, lowercase names with hyphens:
   - ✅ Good: `avologi-device-01.jpg`, `formidabless-serum.png`
   - ❌ Avoid: `IMG_1234.jpg`, `product image.jpg`

4. **Recommended image specs**:
   - **Resolution**: At least 800x800px (1200x1200px for best quality)
   - **Aspect ratio**: Square (1:1) for consistent display
   - **File size**: Under 500KB (optimize images before uploading)
   - **Background**: White or transparent background works best

## How to Reference Images in Your Data

When adding products to your Base44 database, use one of these formats for the `image_url` field:

### Option 1: Just the filename (Recommended)
```json
{
  "image_url": "avologi-device-01.jpg"
}
```

### Option 2: Full local path
```json
{
  "image_url": "/images/products/avologi-device-01.jpg"
}
```

### Option 3: External URL
```json
{
  "image_url": "https://example.com/images/product.jpg"
}
```

The system will automatically handle all three formats!

## Placeholder Image

If a product doesn't have an image, the system will display `placeholder.jpg`. You can replace this with your own placeholder design.

## Example Product Images You Can Add

- `avologi-redlighttherapy.jpg`
- `avologi-microneedling-device.jpg`
- `formidabless-vitamin-c-serum.jpg`
- `formidabless-hyaluronic-cream.jpg`
- `formidabless-gentle-cleanser.jpg`

## Tips for Best Results

1. **Consistency**: Keep lighting and style consistent across all product images
2. **Quality**: Use high-resolution images that will look good on retina displays
3. **Optimization**: Use tools like TinyPNG or ImageOptim to reduce file size
4. **Testing**: After adding an image, check it displays correctly on both desktop and mobile

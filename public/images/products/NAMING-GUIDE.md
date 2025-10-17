# Product Image Naming Examples

## Current Structure
```
/public/images/products/
├── README.md
├── placeholder.svg
├── placeholder.jpg
└── (your product images go here)
```

## Example Filenames by Brand

### Avologi Products
```
avologi-red-light-therapy-device.jpg
avologi-microneedling-pen.jpg
avologi-led-face-mask.jpg
avologi-ultrasonic-cleaner.jpg
```

### Formidabless Products

#### Serums
```
formidabless-vitamin-c-serum.jpg
formidabless-hyaluronic-acid-serum.jpg
formidabless-retinol-serum.jpg
formidabless-niacinamide-serum.jpg
```

#### Creams
```
formidabless-day-cream.jpg
formidabless-night-cream.jpg
formidabless-eye-cream.jpg
formidabless-moisturizing-cream.jpg
```

#### Cleansers
```
formidabless-gentle-cleanser.jpg
formidabless-foaming-cleanser.jpg
formidabless-oil-cleanser.jpg
```

#### Toners
```
formidabless-balancing-toner.jpg
formidabless-hydrating-toner.jpg
```

#### Treatments
```
formidabless-spot-treatment.jpg
formidabless-exfoliating-treatment.jpg
formidabless-brightening-mask.jpg
```

## How to Use in Base44

When you add products to Base44, set the `image_url` field to just the filename:

```json
{
  "name": "Red Light Therapy Device",
  "brand": "Avologi",
  "category": "Devices",
  "image_url": "avologi-red-light-therapy-device.jpg",
  ...
}
```

## Multiple Images for One Product

If you want to show different angles:
```
product-name-front.jpg
product-name-side.jpg
product-name-packaging.jpg
product-name-in-use.jpg
```

For now, use the main/front image in the `image_url` field.

## Quick Checklist Before Adding Images

- [ ] Image is 800x800px or larger (square ratio)
- [ ] File size is under 500KB
- [ ] Filename is lowercase with hyphens
- [ ] Image has white or transparent background
- [ ] Image quality is sharp and clear
- [ ] Product is centered in the frame

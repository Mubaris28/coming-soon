# Images Folder

This folder is for storing images used across the website, such as:

- Logo files (SVG, PNG, etc.)
- Favicon and other icons
- Background images
- User interface elements
- Marketing assets

You can add external images to this folder, and they will be accessible via the URL path `/images/filename.extension`.

## Required Images

Please add the following images to this folder:

1. **model-bg.jpg** - Main background image for the landing page

   - This should be a high-quality photo related to modeling/fashion
   - Recommended size: 1920x1080px or larger
   - You can find suitable images on Unsplash, Pexels, or other stock photo sites

2. **new-logo.png** - Your brand logo
   - This should be your model management logo
   - Recommended size: 180x60px with transparent background
   - You can create this logo using a design tool or hire a designer

## Usage Example

```jsx
import Image from "next/image";

// In your component
<Image
  src="/images/your-image.png"
  alt="Description"
  width={300}
  height={200}
/>;
```

## Supported Formats

- SVG (vector graphics)
- PNG (with transparency support)
- JPG/JPEG (for photos)
- WebP (optimized web format)
- GIF (for animations)

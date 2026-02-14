// scripts/generate-images.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dirs = {
  images: path.join(__dirname, '../public/images'),
  videos: path.join(__dirname, '../public/videos'),
};

// Ensure directories exist
Object.values(dirs).forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`✅ Created directory: ${dir}`);
  }
});

// Generate placeholder images
const generateImage = async (width, height, filename) => {
  try {
    await sharp({
      create: {
        width,
        height,
        channels: 3,
        background: { r: 20, g: 20, b: 20 }
      }
    })
      .jpeg({ quality: 85 })
      .toFile(path.join(dirs.images, filename));
    console.log(`✅ Generated: ${filename} (${width}x${height})`);
  } catch (err) {
    console.error(`❌ Error generating ${filename}:`, err);
  }
};

// Generate all required images
const images = [
  { width: 1920, height: 1080, name: 'video-poster.jpg' },
  { width: 540, height: 960, name: 'video-poster-mobile.jpg' },
  { width: 1200, height: 630, name: 'og-image.jpg' },
  { width: 1200, height: 1200, name: 'square-image.jpg' },
  { width: 800, height: 600, name: 'hero-image.jpg' },
];

(async () => {
  console.log('🎨 Generating placeholder images...\n');
  for (const img of images) {
    await generateImage(img.width, img.height, img.name);
  }
  console.log('\n✨ All images generated successfully!');
  console.log(`📁 Images saved to: ${dirs.images}\n`);
})();
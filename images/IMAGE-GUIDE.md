# Image Guide for Kingdom Midwives Website

## Overview
This folder contains all images used throughout the Kingdom Midwives website.

## Folder Structure

```
images/
├── team/           # Team member photos
└── events/         # Event images
```

## Image Requirements

### Team Photos (images/team/)

**Required Images:**
- elizabeth-masiakwala.jpg - Founding Visionary
- pertunia-mpshe.jpg - Chairperson
- aletta-mlambo.jpg - Treasurer
- deborah-makobe.jpg - Secretary
- thabile-hlomuka.jpg - Secretary
- busi-mahoa.jpg - Coordinator

**Specifications:**
- **Dimensions**: 400x400px (square format)
- **Format**: JPG or PNG
- **File Size**: Under 200KB (optimized for web)
- **Style**: Professional headshots, good lighting
- **Background**: Clean, neutral backgrounds preferred

### Event Images (images/events/)

**Suggested Images:**

**Upcoming Events:**
- prayer-summit.jpg - Women praying together in circle
- purpose-conference.jpg - Conference setting with speaker
- community-outreach.jpg - Women serving in community
- kingdom-retreat.jpg - Peaceful retreat setting

**Past Events:**
- vision-prayer-night.jpg - Evening prayer gathering
- leadership-workshop.jpg - Workshop/training session
- healing-session.jpg - Intimate prayer circle
- empowerment-brunch.jpg - Elegant brunch setting

**Specifications:**
- **Dimensions**: 800x500px (16:10 aspect ratio)
- **Format**: JPG or PNG
- **File Size**: Under 300KB (optimized for web)
- **Style**: Professional event photography
- **Content**: Show people engaged, joyful, empowered

## Fallback Images

The website includes fallback placeholder images via:
```html
onerror="this.src='https://via.placeholder.com/...'"
```

These will display if actual images are not found. Replace with real images for production.

## Image Optimization Tips

1. **Compress Images**: Use tools like:
   - TinyPNG (https://tinypng.com/)
   - ImageOptim (Mac)
   - Squoosh (https://squoosh.app/)

2. **Correct Format**:
   - Use JPG for photographs
   - Use PNG for graphics with transparency

3. **Proper Naming**:
   - Use lowercase
   - Use hyphens instead of spaces
   - Be descriptive: `annual-prayer-summit-2024.jpg`

4. **Alt Text**: Already included in HTML, describes each image for accessibility

## Adding New Images

1. Save your image with the correct filename
2. Place in appropriate folder (team/ or events/)
3. Refresh your browser
4. Image should load automatically

## Stock Photo Resources

If you need temporary placeholder images:
- Unsplash (https://unsplash.com/)
- Pexels (https://pexels.com/)
- Pixabay (https://pixabay.com/)

Search terms: "women praying", "christian women", "community service", "leadership conference"

## Questions?

Contact the web team at: info@kingdommidwives.org

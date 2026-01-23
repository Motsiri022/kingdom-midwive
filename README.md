# Kingdom Midwives Website

A complete, professional website for **Kingdom Midwives** - a Christian women's charity NGO dedicated to empowering women through faith, community, and service.

## Overview

This website showcases the mission, programs, events, and team of Kingdom Midwives, providing an elegant and spiritually uplifting online presence for the organization.

## Features

### Design & Aesthetics
- **Color Palette**: Royal Purple (#6B46C1) and Gold (#FFC107) for an elegant, regal look
- **Typography**:
  - Headings: Playfair Display (serif) - elegant and classic
  - Body: Inter (sans-serif) - clean and readable
- **Responsive Design**: Mobile-first approach, fully responsive across all devices
- **Accessibility**: WCAG compliant with proper ARIA labels, keyboard navigation, and color contrast

### Pages

#### 1. Home Page (index.html)
- Hero section with inspiring tagline
- Scripture verse (Proverbs 31:25-26)
- Mission statement
- Overview of services
- Vision highlights with empowerment badges
- Call-to-action for membership

#### 2. About Page (about.html)
- Comprehensive "Who We Are" section
- Our Mandate and Vision
- Hope for women pursuing their calling
- Reminders for every woman
- Movement promises
- Spheres of influence
- 6 detailed programs
- Partnership opportunities
- Organization history
- Team member profiles with photos

#### 3. Events Page (events.html)
- Upcoming events with detailed cards
- Past events gallery
- Event types categorization
- Registration CTAs

#### 4. Contact Page (contact.html)
- Comprehensive contact form with validation
- Contact information card
- Office hours
- Social media links
- Reasons to get in touch section

### Interactive Features

#### JavaScript Functionality (js/main.js)
- Mobile hamburger menu with smooth animations
- Smooth scrolling for anchor links
- Active navigation highlighting based on scroll position
- Scroll-triggered animations (fade-in effects)
- Back-to-top button
- Lazy loading for images
- Navbar scroll effects

#### Form Validation (js/form-validation.js)
- Real-time form validation
- Email format verification
- Required field checking
- Error messaging with visual feedback
- Success confirmation
- Auto-resizing textarea
- Character counter
- Phone number formatting

#### WhatsApp Integration
- **Floating WhatsApp button** on all pages with pulsing animation
- **Custom pre-filled messages** for different pages
- **Footer integration** with WhatsApp in social links
- **Contact page** dedicated WhatsApp contact card
- **Mobile responsive** with optimized sizing
- See [WHATSAPP-SETUP.md](WHATSAPP-SETUP.md) for configuration

### Design System

#### CSS Custom Properties
```css
--primary: 270 60% 35%;           /* Royal Purple */
--secondary: 45 100% 51%;         /* Gold */
--background: 0 0% 100%;          /* White */
--foreground: 270 20% 20%;        /* Dark text */
--muted: 270 15% 95%;             /* Light purple */
```

#### Component Styles
- Cards with elegant shadows and hover effects
- Gradient buttons (purple and gold)
- Badge/pill components
- Team member cards with circular photos
- Event cards with images and metadata
- Form inputs with focus states

### Responsive Breakpoints
- **Desktop**: 1400px+ (max-width: 1320px)
- **Standard Desktop**: 768px - 1400px (max-width: 1200px)
- **Tablet**: 480px - 768px
- **Mobile**: < 480px

## File Structure

```
kingdom-midwives/
├── index.html              # Home page
├── about.html              # About page with full content
├── events.html             # Events listing
├── contact.html            # Contact form
├── README.md               # This file
├── css/
│   ├── styles.css          # Main stylesheet
│   └── responsive.css      # Responsive styles
├── js/
│   ├── main.js             # Core interactive functionality
│   └── form-validation.js  # Contact form validation
└── images/
    ├── team/               # Team member photos
    │   ├── elizabeth-masiakwala.jpg
    │   ├── pertunia-mpshe.jpg
    │   ├── aletta-mlambo.jpg
    │   ├── deborah-makobe.jpg
    │   ├── thabile-hlomuka.jpg
    │   └── busi-mahoa.jpg
    └── events/             # Event images
        ├── prayer-summit.jpg
        ├── purpose-conference.jpg
        ├── community-outreach.jpg
        ├── vision-prayer-night.jpg
        └── leadership-workshop.jpg
```

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools required - this is vanilla HTML, CSS, and JavaScript

### Installation

1. **Download or Clone** the project files
2. **Open in VS Code** or your preferred editor
3. **Open with Live Server**:
   - Right-click on `index.html`
   - Select "Open with Live Server"

   OR simply open `index.html` in your web browser

### Adding Images

To add team member photos and event images:

1. Place team photos in `images/team/` folder
2. Place event photos in `images/events/` folder
3. Use appropriate naming:
   - Team: `firstname-lastname.jpg`
   - Events: descriptive names like `prayer-summit.jpg`

**Recommended image specifications:**
- Team photos: 400x400px, square format
- Event images: 800x500px, landscape format
- Format: JPG or PNG
- Optimized for web (compressed)

## Customization

### Colors
Edit CSS custom properties in `css/styles.css`:
```css
:root {
  --primary: 270 60% 35%;
  --secondary: 45 100% 51%;
  /* ... */
}
```

### Content
All content is directly in the HTML files and can be edited:
- Mission statements
- Team members
- Event details
- Contact information

### Forms
To connect the contact form to a backend:
1. Open `js/form-validation.js`
2. Find the `simulateFormSubmission` function
3. Uncomment and modify the fetch API call
4. Point it to your server endpoint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- iOS Safari
- Chrome Mobile

## Performance

- Lazy loading for images
- Minimal external dependencies
- Optimized CSS with utility classes
- Smooth animations with CSS transitions
- Efficient JavaScript with event delegation

## Accessibility

- Semantic HTML5 elements
- ARIA labels for screen readers
- Keyboard navigation support
- Focus states for interactive elements
- Color contrast ratio 4.5:1+
- Alt text for all images

## SEO

- Proper meta tags on all pages
- Semantic heading hierarchy
- Descriptive page titles
- Meta descriptions
- Open Graph ready (can add OG tags)

## Credits

**Design & Development**: Built with love for Kingdom Midwives
**Fonts**: Google Fonts (Playfair Display, Inter)
**Icons**: Font Awesome 6.4.0

## License

Copyright © 2024 Kingdom Midwives. All rights reserved.
Registered Charity Organization.

## Support

For questions or support with this website:
- **Email**: info@kingdommidwives.org
- **Phone**: +1 (234) 567-890

---

**Built with purpose. Empowered by faith. United in sisterhood.**

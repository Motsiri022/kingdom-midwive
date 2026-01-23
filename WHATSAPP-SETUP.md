# WhatsApp Integration Guide

## Overview
Your Kingdom Midwives website now includes full WhatsApp integration with:
- Floating WhatsApp button on all pages
- WhatsApp in footer social links
- WhatsApp contact info on Contact page
- Custom messages for different pages

## Features

### 1. Floating WhatsApp Button
A green floating button appears on the bottom-right of every page with:
- **Pulsing animation** to attract attention
- **Tooltip** on hover (desktop only)
- **Custom pre-filled message** for each page
- **Mobile responsive** sizing

### 2. Footer Integration
WhatsApp icon added to social media links in footer with:
- **Green background** (#25D366 - official WhatsApp color)
- **Direct link** to WhatsApp chat
- **Consistent** across all pages

### 3. Contact Page Integration
Dedicated WhatsApp contact card with:
- **Green icon** in contact info section
- **Clickable phone number** that opens WhatsApp
- **Prominent placement** in contact methods

## How to Customize

### Step 1: Update Your WhatsApp Number

Replace `1234567890` with your actual WhatsApp number in these files:

**Format:** Use international format without + or spaces
- Example: For +1 (234) 567-890, use: `1234567890`
- Example: For +27 82 123 4567, use: `27821234567`

**Files to update:**
1. [index.html](index.html) - Line 235, 217
2. [about.html](about.html) - Line 528, 507
3. [events.html](events.html) - Line 409, 388
4. [contact.html](contact.html) - Line 361, 340, 204

### Step 2: Customize Pre-filled Messages

Each page has a custom message. Update the `text=` parameter in the WhatsApp URL:

**Home Page (index.html):**
```html
text=Hello%20Kingdom%20Midwives!%20I%20would%20like%20to%20know%20more%20about%20your%20ministry.
```

**About Page (about.html):**
```html
text=Hello%20Kingdom%20Midwives!%20I%20would%20like%20to%20know%20more%20about%20your%20ministry.
```

**Events Page (events.html):**
```html
text=Hello%20Kingdom%20Midwives!%20I%27d%20like%20to%20learn%20about%20your%20upcoming%20events.
```

**Contact Page (contact.html):**
```html
text=Hello%20Kingdom%20Midwives!%20I%20have%20a%20question.
```

**Note:** Use `%20` for spaces and `%27` for apostrophes in URLs.

### Step 3: Customize Button Position (Optional)

Edit [css/styles.css](css/styles.css) to change position:

```css
.whatsapp-float {
  bottom: 80px;  /* Distance from bottom */
  right: 30px;   /* Distance from right */
}
```

### Step 4: Customize Colors (Optional)

Change WhatsApp button color in [css/styles.css](css/styles.css):

```css
.whatsapp-float {
  background: #25D366;  /* WhatsApp green */
}
```

## Testing Your Integration

### Test Checklist:
1. ✅ Click floating button on each page
2. ✅ Verify correct number opens in WhatsApp
3. ✅ Check pre-filled message is correct
4. ✅ Test on mobile devices
5. ✅ Test footer WhatsApp link
6. ✅ Test contact page WhatsApp link

### Desktop Testing:
- Click the button
- Should open WhatsApp Web or desktop app
- Pre-filled message should appear

### Mobile Testing:
- Click the button
- Should open WhatsApp mobile app
- Pre-filled message should appear in chat

## URL Format Explained

WhatsApp links use this format:
```
https://wa.me/[PHONE_NUMBER]?text=[MESSAGE]
```

**Example:**
```
https://wa.me/1234567890?text=Hello%20Kingdom%20Midwives!
```

**Breaking it down:**
- `https://wa.me/` - WhatsApp base URL
- `1234567890` - Your phone number (international format)
- `?text=` - Parameter for pre-filled message
- `Hello%20Kingdom%20Midwives!` - URL-encoded message

## Features by Page

### Home Page
- **Float Button**: Generic ministry inquiry
- **Footer**: Direct WhatsApp link
- **Purpose**: General questions and membership

### About Page
- **Float Button**: Ministry information
- **Footer**: Direct WhatsApp link
- **Purpose**: Questions about programs and team

### Events Page
- **Float Button**: Event inquiries
- **Footer**: Direct WhatsApp link
- **Purpose**: Event registration and information

### Contact Page
- **Float Button**: General questions
- **Contact Card**: Dedicated WhatsApp contact info with green icon
- **Footer**: Direct WhatsApp link
- **Purpose**: All types of inquiries

## Styling Details

### Button Styles
- **Color**: #25D366 (Official WhatsApp Green)
- **Size**: 60px × 60px (desktop), 50px × 50px (mobile)
- **Animation**: Pulsing shadow effect
- **Icon**: Font Awesome WhatsApp icon
- **Hover**: Scales to 110% and raises 3px

### Responsive Behavior
- **Desktop**: Shows tooltip on hover
- **Tablet**: Smaller button, no tooltip
- **Mobile**: Smaller button, positioned to avoid back-to-top button

## Troubleshooting

### Button not showing?
- Check that Font Awesome is loading
- Verify CSS files are linked correctly
- Check browser console for errors

### Wrong number opens?
- Update all instances of the phone number
- Use international format without + or spaces
- Clear browser cache

### Message not pre-filled?
- Check URL encoding (`%20` for space, `%27` for apostrophe)
- Ensure `text=` parameter is correct
- Test in incognito mode

### Button overlaps other elements?
- Adjust `z-index` in CSS (currently 998)
- Change `bottom` and `right` position values

## Advanced Customization

### Change Tooltip Text
Edit in HTML files:
```html
<span class="whatsapp-tooltip">Chat with us!</span>
```

### Disable on Specific Pages
Remove the float button code from that page's HTML.

### Change Animation Speed
Edit in [css/styles.css](css/styles.css):
```css
@keyframes whatsapp-pulse {
  /* Adjust timing as needed */
}
```

## Support

For questions about WhatsApp integration:
- Email: info@kingdommidwives.org
- Phone: +1 (234) 567-890
- WhatsApp: Use the button! 😊

---

**Quick Setup Summary:**
1. Replace `1234567890` with your WhatsApp number (all pages)
2. Customize pre-filled messages (optional)
3. Test on desktop and mobile
4. Done! ✅

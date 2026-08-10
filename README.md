# SAZ Events - Premium Luxury Event Planning Website

A stunning, modern, and fully responsive event planning website built with HTML, CSS, and JavaScript. Features a dark luxury theme with gold accents, smooth animations, and a cinematic user experience.

![SAZ Events](https://img.shields.io/badge/SAZ-Events-gold?style=for-the-badge&logo=eventbrite)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge)

## ✨ Features

### Design & UI
- 🎨 **Dark Luxury Theme** - Elegant black background with gold accents
- 🎬 **Cinematic Hero Section** - Fullscreen video background with animated particles
- 💎 **Glassmorphism Effects** - Modern frosted glass navigation bar
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🎭 **Smooth Animations** - AOS and GSAP powered animations
- 🖼️ **Masonry Gallery** - Filterable image gallery with lightbox

### Functionality
- 📝 **Booking Form** - Professional event booking with validation
- 📊 **Animated Counters** - Dynamic statistics display
- ⏱️ **Countdown Timer** - Urgency-driven booking countdown
- 🎵 **Background Music** - Optional ambient music toggle
- 💬 **WhatsApp Integration** - Direct chat button
- 📧 **Newsletter Signup** - Email subscription form
- 🔙 **Back to Top** - Smooth scroll button
- 📈 **Scroll Progress** - Visual reading progress bar

### Sections
1. **Hero** - Fullscreen video with animated particles and stats
2. **Services** - 8 premium service cards with hover effects
3. **Categories** - Event type showcase with overlay effects
4. **Gallery** - Filterable masonry layout with lightbox
5. **About** - Company info with animated timeline
6. **Video Banner** - Cinematic break section
7. **Countdown** - Limited time offer timer
8. **Testimonials** - Auto-sliding client reviews
9. **Booking** - Comprehensive event booking form
10. **Contact** - Contact info with Google Maps
11. **Footer** - Links, social media, and newsletter

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code recommended)
- Basic understanding of HTML, CSS, and JavaScript

### Installation

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd saz-events
   ```

2. **Open the project**
   - Simply open `index.html` in your web browser
   - Or use a local server like Live Server in VS Code

3. **Add your assets** (optional)
   - Place your videos in `assets/` folder:
     - `hero-video.mp4`
     - `video-banner.mp4`
   - Add background music: `assets/background-music.mp3`
   - Add favicon: `assets/favicon.png`

### Using Local Server (Recommended)

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 📁 Project Structure

```
saz-events/
├── index.html          # Main HTML file
├── style.css           # Complete stylesheet
├── script.js           # JavaScript functionality
├── assets/
│   ├── .gitkeep        # Asset documentation
│   ├── hero-video.mp4  # Hero background video
│   ├── video-banner.mp4 # Banner video
│   ├── background-music.mp3 # Background audio
│   └── favicon.png     # Site favicon
└── README.md           # This file
```

## 🎨 Customization

### Colors
Edit the CSS variables in `style.css` to change the color scheme:

```css
:root {
    --gold-primary: #d4af37;      /* Main gold color */
    --gold-light: #f3e5ab;        /* Light gold */
    --gold-dark: #b8941e;         /* Dark gold */
    --bg-primary: #0a0a0a;        /* Main background */
    --bg-secondary: #111111;      /* Secondary background */
    --text-primary: #ffffff;      /* Main text color */
}
```

### Content
- **Text Content**: Edit directly in `index.html`
- **Images**: Replace Unsplash URLs with your own images
- **Contact Info**: Update phone, email, and address in contact section
- **Social Links**: Update social media URLs in footer

### Forms
To connect forms to a backend:

1. **Formspree** (Easy setup)
   ```html
   <form action="https://formspree.io/f/your-form-id" method="POST">
   ```

2. **EmailJS** (Client-side email)
   ```javascript
   emailjs.send('service_id', 'template_id', templateParams);
   ```

3. **Custom Backend**
   - Modify the form submission handler in `script.js`
   - Send data to your API endpoint

## 🌐 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome  | 80+     | ✅ Full |
| Firefox | 75+     | ✅ Full |
| Safari  | 13+     | ✅ Full |
| Edge    | 80+     | ✅ Full |
| Opera   | 65+     | ✅ Full |

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 992px - 1199px
- **Mobile Large**: 768px - 991px
- **Mobile**: < 768px

## 🔧 Dependencies

### Included via CDN
- **Google Fonts** - Playfair Display & Poppins
- **Font Awesome** - Icons (v6.4.0)
- **AOS** - Animate on scroll (v2.3.1)
- **Swiper** - Testimonials slider (v10)
- **GSAP** - Advanced animations (v3.12.2)

### No Build Required
This project uses vanilla HTML, CSS, and JavaScript. No Node.js, webpack, or build tools required!

## 🎯 Performance Tips

1. **Optimize Images**
   - Use WebP format where possible
   - Compress images with TinyPNG or ImageOptim
   - Implement lazy loading

2. **Optimize Videos**
   - Compress with HandBrake
   - Use appropriate bitrate (5-10 Mbps)
   - Consider using poster images

3. **Enable Caching**
   - Set proper cache headers
   - Use CDN for static assets

4. **Minify Files** (for production)
   ```bash
   # CSS
   cssnano style.css style.min.css
   
   # JavaScript
   uglifyjs script.js -o script.min.js
   ```

## 📝 SEO Optimization

The website includes basic SEO:
- Meta descriptions and keywords
- Open Graph tags for social sharing
- Semantic HTML structure
- Alt text for images
- Mobile-friendly design

### Improve SEO Further
1. Add schema.org markup
2. Create an XML sitemap
3. Submit to Google Search Console
4. Add more specific meta descriptions
5. Implement proper heading hierarchy

## 🛠️ Troubleshooting

### Videos Not Playing
- Ensure videos are in MP4 format
- Check video codec (H.264 recommended)
- Verify file paths are correct

### Animations Not Working
- Check if CDN links are accessible
- Ensure JavaScript is enabled
- Check browser console for errors

### Forms Not Submitting
- Verify form action URL
- Check CORS settings if using custom backend
- Ensure all required fields have values

## 📄 License

This project is licensed under the MIT License - see below for details:

```
Copyright (c) 2024 SAZ Events

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🤝 Support

If you have questions or need help:
- Check the code comments for inline documentation
- Review the browser console for errors
- Test in different browsers to isolate issues

## 🙏 Credits

- **Design Inspiration**: Oxygen Event Works, Luxury cinematic event websites
- **Stock Images**: Unsplash (via source URLs)
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Playfair Display, Poppins)
- **Animations**: AOS Library, GSAP

## 📞 Contact

For custom development or inquiries:
- **Website**: [sazevents.com](https://sazevents.com)
- **Email**: info@sazevents.com
- **Phone**: +91 98765 43210

---

**Built with ❤️ for unforgettable moments**

⭐ If you like this project, please give it a star!
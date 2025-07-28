# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static institutional website for CodeForge Systems, a Brazilian company specializing in ERP Protheus solutions. The website is built as a single-page application using vanilla HTML, CSS, and JavaScript.

## Architecture & Structure

### Core Files
- `codeforge_website.html` - Main and only HTML file containing the complete website

### Technology Stack
- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS (via CDN)
- **Animations**: Custom CSS animations with particles.js
- **Fonts**: Inter and JetBrains Mono (Google Fonts)
- **External Libraries**: 
  - Particles.js for animated background effects
  - Tailwind CSS for utility-first styling

### Website Structure
The single HTML file contains:
1. **Header/Navigation** - Fixed header with responsive mobile menu
2. **Hero Section** - Landing area with animated typewriter effect and terminal status
3. **Technologies Section** - Animated tech orbit and technology grid
4. **About Section** - Company information and statistics
5. **Services Section** - Service offerings with cards
6. **Clients Section** - Client logos (placeholder)
7. **CTA Section** - Call-to-action for contact
8. **Footer** - Contact information and links
9. **WhatsApp Float Button** - Fixed contact button

### Key Features
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Animated Effects**:
  - Typewriter effect with rotating words
  - Terminal status simulation
  - Particle.js background animation
  - CSS orbit animation for technologies
  - Smooth scroll and parallax effects
- **Interactive Elements**:
  - Dynamic navbar that changes on scroll
  - Mobile hamburger menu
  - Hover effects on service cards
  - WhatsApp integration

## Development Commands

This is a static website with no build process. Development can be done with:

### Local Development
```bash
# Serve the HTML file using any local server
python -m http.server 8000
# or
npx http-server
# or simply open the HTML file in a browser
open codeforge_website.html
```

### Deployment
Since this is a static HTML file, it can be deployed to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any web server

## Code Organization

### CSS Architecture
- **Utility Classes**: Tailwind CSS for responsive design
- **Custom Styles**: Embedded in `<style>` tag for:
  - Liquid gradient animations
  - Typewriter and terminal effects
  - Tech orbit animations
  - Glass morphism effects
  - WhatsApp button styling

### JavaScript Architecture
- **Modular Classes**:
  - `TypewriterEffect` - Handles rotating text animation
  - `TerminalStatus` - Simulates terminal status updates
- **Event Handlers**: Scroll effects, mobile menu, smooth scrolling
- **External Integrations**: Particles.js configuration, WhatsApp linking

## Customization Guidelines

### Content Updates
- Company information is hardcoded in HTML
- Contact details need to be updated in footer and WhatsApp function
- Service descriptions in the services section
- Client logos in the clients section (currently placeholders)

### Styling Modifications
- Colors use CSS custom properties and Tailwind classes
- Main brand colors: Purple (`#a855f7`) and Green (`#06d6a0`)
- Typography uses Inter for body text and JetBrains Mono for terminal effects

### Adding New Sections
1. Insert HTML structure following existing patterns
2. Add corresponding navigation links if needed
3. Include appropriate animations and responsive classes
4. Update smooth scroll functionality if adding anchors

## Performance Considerations

### External Dependencies
- Tailwind CSS loaded via CDN
- Google Fonts (Inter, JetBrains Mono)
- Particles.js library
- All resources should be available offline or have fallbacks

### Optimization Opportunities
- Consider self-hosting Tailwind CSS for better performance
- Optimize images when real client logos are added
- Minify CSS and JavaScript for production
- Add proper meta tags for SEO

## Browser Compatibility

The website uses modern web features:
- CSS Grid and Flexbox
- CSS Custom Properties
- ES6+ JavaScript features
- Modern animation APIs

Supports all modern browsers (Chrome, Firefox, Safari, Edge).

## WhatsApp Integration

The floating WhatsApp button uses:
- Phone number: `5511999999999` (needs to be updated)
- Pre-filled message in Portuguese
- Opens in new tab/window

To update the WhatsApp number, modify the `openWhatsApp()` function in the JavaScript section.

## Contact Information

Current contact details (need updating for production):
- Email: contato@codeforge.com.br
- Phone: (11) 9999-9999
- Location: São Paulo, SP

## Git Status Note

The repository shows many deleted files in `JJConsulting/` directory, suggesting this might be a migration from a previous project structure. Only the current `codeforge_website.html` file is relevant for ongoing development.


NAO ALTERAR O ARQUIVO codeforge_website.html.
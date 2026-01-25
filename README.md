# Anum Tahir Portfolio

A modern, responsive portfolio website for Anum Tahir - Data Scientist & AI Engineer, showcasing expertise in AI/ML, data analytics, and cloud solutions.

## 🌟 Live Demo
https://anum-portfolio-kappa.vercel.app/

## ✨ Features

- **Modern & Responsive Design**: Fully responsive layout that works on all devices
- **Interactive UI**: Smooth animations and transitions using CSS3
- **Functional Contact Form**: Integrated with EmailJS for direct email communication
- **Professional Sections**:
  - About Me with professional summary
  - Experience timeline
  - Projects showcase
  - Skills and certifications
  - Education background
- **Social Integration**: LinkedIn, GitHub, Email, and WhatsApp contact options
- **Fast Performance**: Optimized with Vite for quick loading

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS-in-JS** - Styled components with dynamic theming
- **EmailJS** - Contact form functionality

### Development
- **Node.js** - Runtime environment
- **npm** - Package manager
- **Git** - Version control

### Deployment
- **Vercel** - Hosting platform

## 📁 Project Structure

```
anum-portfolio/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── (other components)
│   ├── data/
│   │   └── anumData.js
│   ├── theme/
│   │   └── theme.js
│   ├── App.jsx
│   └── main.jsx
├── public/
│   └── images/
├── package.json
├── vite.config.js
├── vercel.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/azkatahiri0/Anum-Portfolio.git
cd Anum-Portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure EmailJS (for contact form)**
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Get your credentials:
     - Public Key
     - Service ID
     - Template ID
   - Update the Contact.jsx component with your credentials

4. **Update personal information**
   - Edit `src/data/anumData.js` with your personal details
   - Add your profile image to `public/images/`

### Development

1. **Start development server**
```bash
npm run dev
```
The app will be available at `http://localhost:3000`

2. **Build for production**
```bash
npm run build
```

3. **Preview production build**
```bash
npm run preview
```

## 🌐 Deployment

### Deploying to Vercel

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy on Vercel**
   - Go to [Vercel](https://vercel.com)
   - Import your GitHub repository
   - Configure build settings:
     - Framework: Vite
     - Build Command: `npm run build`
     - Output Directory: `dist`
   - Click "Deploy"

### Environment Variables (Optional)
Create a `.env` file for production:
```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

## 📱 Features in Detail

### Contact Form
- **Email Integration**: Messages sent directly to your inbox via EmailJS
- **Validation**: Client-side form validation
- **Status Notifications**: Success/error messages with icons
- **Alternative Contact**: WhatsApp integration for quick communication

### Responsive Design
- Mobile-first approach
- Adaptive layouts for tablets and desktops
- Touch-friendly navigation
- Optimized images and assets

### Performance
- Code splitting and lazy loading
- Optimized images
- Minified CSS and JavaScript
- Fast page loads with Vite

## 🎨 Customization

### Theme Colors
Edit `src/theme/theme.js` to change color scheme:
```javascript
export const theme = {
  colors: {
    primary: '#6c63ff',
    secondary: '#4a90e2',
    dark: '#2d3748',
    // ... other colors
  }
}
```

### Content Updates
Update `src/data/anumData.js` with your information:
- Personal details
- Work experience
- Projects
- Education
- Skills and certifications

### Adding Sections
1. Create new component in `src/components/`
2. Import and add to `App.jsx`
3. Update navigation in Header component

## 🔧 Troubleshooting

### Common Issues

1. **Contact form not sending emails**
   - Verify EmailJS credentials
   - Check EmailJS template variables match
   - Ensure email service is connected in EmailJS dashboard

2. **Build errors on Vercel**
   - Check Node.js version compatibility
   - Verify all dependencies are in package.json
   - Ensure no syntax errors in components

3. **Images not loading**
   - Check image paths in public/images/
   - Verify file extensions are correct
   - Ensure image references use correct paths

### Development Tips
- Use `npm run build` locally before deploying
- Check browser console for errors
- Test on multiple screen sizes
- Validate all form submissions


## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) for the amazing build tool
- [React](https://reactjs.org/) for the UI library
- [EmailJS](https://www.emailjs.com/) for email services
- [Vercel](https://vercel.com/) for hosting


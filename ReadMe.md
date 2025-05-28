# LAVAFAST

A premium luxury service platform offering villa and yacht services with a modern, responsive web interface.

## 🌟 Live Deployments

- **Production**: [lavafast-laundry-service.web.app](https://lavafast-laundry-service.web.app)
- **Development**: [lavafast-laundry-service--dev-y6pj4v14.web.app](https://lavafast-laundry-service--dev-y6pj4v14.web.app)

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + PostCSS
- **Hosting**: Firebase Hosting
- **CI/CD**: GitHub Actions
- **Code Quality**: ESLint + Prettier

## 📁 Project Structure

```
LAVAFAST/
├── src/
│   ├── components/
│   │   ├── animation/          # Animated components (Bubbles, Logo)
│   │   ├── layout/             # Layout components (Header, Footer, Navigation)
│   │   └── ImageGallery.tsx    # Image gallery component
│   ├── pages/                  # Page components
│   │   ├── Home.tsx           # Homepage
│   │   ├── About.tsx          # About page
│   │   ├── Contact.tsx        # Contact page
│   │   ├── VillaService.tsx   # Villa services
│   │   └── YachtService.tsx   # Yacht services
│   ├── assets/                # Static assets
│   └── App.tsx                # Main app component
├── public/                    # Public assets
├── .github/workflows/         # GitHub Actions CI/CD
└── dist/                      # Build output (generated)
```

## 🛠️ Development Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Networkcaretaker/lavafast.git
   cd lavafast
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`

### Available Scripts

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
```

## 🌐 Deployment

This project uses **Firebase Hosting** with **GitHub Actions** for automatic deployments:

### Deployment Workflow

- **Push to `main`** → Deploys to production (`lavafast-laundry-service.web.app`)
- **Push to `dev`** → Deploys to development environment 
- **Open Pull Request** → Creates temporary preview deployment

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to Firebase
firebase deploy

# Deploy to specific channel
firebase hosting:channel:deploy dev
```

## 🎨 Features

### Core Pages
- **Home**: Landing page with hero section and service overview
- **Villa Services**: Luxury villa rental and management services
- **Yacht Services**: Premium yacht charter and maintenance services
- **About**: Company information and mission
- **Contact**: Contact form and business information

### Components
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Animated Elements**: Smooth animations and transitions
- **Image Gallery**: Interactive image showcase
- **Modern Navigation**: Clean, intuitive navigation system

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# App Configuration
VITE_APP_TITLE=LAVAFAST
VITE_ENV=development

# API Configuration (if needed)
VITE_API_URL=https://api.example.com

# Analytics (if needed)
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Firebase Configuration

The project is configured for Firebase Hosting with:
- **Public directory**: `dist`
- **Single Page Application**: Enabled
- **Preview Channels**: Configured for dev and PR environments
- **Cache Headers**: Optimized for static assets

## 🚦 CI/CD Pipeline

### GitHub Actions Workflows

1. **Main Deployment** (`.github/workflows/firebase-hosting-merge.yml`)
   - Triggers on push to `main` or `dev` branches
   - Builds the project
   - Deploys to appropriate environment

2. **PR Previews** (`.github/workflows/firebase-hosting-pull-request.yml`)
   - Triggers on pull requests
   - Creates temporary preview deployments
   - Automatically expires after 7 days

### Required GitHub Secrets

Set these in your GitHub repository settings:

```
FIREBASE_SERVICE_ACCOUNT_PROJECT_ID  # Firebase service account key
FIREBASE_PROJECT_ID                  # Your Firebase project ID
```

## 🎯 Development Guidelines

### Code Style
- **TypeScript**: Strict type checking enabled
- **ESLint**: Airbnb configuration with custom rules
- **Prettier**: Consistent code formatting
- **File Naming**: PascalCase for components, camelCase for utilities

### Component Structure
```tsx
// Component template
import React from 'react';

interface ComponentProps {
  // Define props here
}

const Component: React.FC<ComponentProps> = ({ prop }) => {
  return (
    <div className="tailwind-classes">
      {/* Component content */}
    </div>
  );
};

export default Component;
```

### Git Workflow
1. Create feature branch from `dev`
2. Make changes and commit
3. Open pull request to `dev`
4. Review and merge to `dev`
5. When ready, merge `dev` to `main` for production

## 📊 Performance

### Build Optimizations
- **Code Splitting**: Automatic chunk splitting with Vite
- **Asset Optimization**: Compressed images and minified CSS/JS
- **Tree Shaking**: Unused code elimination
- **Modern Bundle**: ES2020+ for modern browsers

### Hosting Features
- **CDN**: Global Firebase CDN
- **SSL**: Automatic HTTPS
- **Compression**: Gzip/Brotli compression
- **Caching**: Optimized cache headers

## 🔍 Monitoring

### Available Metrics
- **Firebase Analytics**: User behavior and engagement
- **Core Web Vitals**: Performance metrics
- **Error Tracking**: Runtime error monitoring (if configured)

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Run tests and linting**
   ```bash
   npm run lint
   npm run build
   ```
5. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
6. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

## 📄 License

This project is private and proprietary. All rights reserved.

## 📞 Support

For support and questions:
- **Email**: support@lavafast.com
- **Issues**: GitHub Issues tab
- **Documentation**: This README and inline code comments

---

## 🚀 Quick Start Commands

```bash
# Clone and setup
git clone https://github.com/Networkcaretaker/lavafast.git
cd lavafast
npm install

# Development
npm run dev

# Production build
npm run build
npm run preview

# Deploy
firebase deploy
```

---

**Built with ❤️ by Networkcaretaker using React, TypeScript, and Firebase**
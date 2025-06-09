# LAVAFAST

A premium luxury laundry service platform for villa and yacht services in Mallorca, featuring a modern, responsive web interface with integrated backend functionality.

## 🌟 Live Deployments

- **Production**: [lavafast-laundry-service.web.app](https://lavafast-laundry-service.web.app)
- **Development**: [lavafast-laundry-service--dev-y6pj4v14.web.app](https://lavafast-laundry-service--dev-y6pj4v14.web.app)

## 🚀 Tech Stack

- **Frontend**: React 19 + TypeScript
- **Backend**: Firebase Functions (Node.js 20)
- **Build Tool**: Vite 6.3
- **Styling**: Tailwind CSS + PostCSS
- **Email Service**: Nodemailer with Gmail SMTP
- **Hosting**: Firebase Hosting
- **CI/CD**: GitHub Actions
- **Code Quality**: Prettier

## 📁 Project Structure

```
LAVAFAST/
├── src/                        # React Frontend
│   ├── components/
│   │   ├── animation/          # Animated components (Bubbles, Logo)
│   │   ├── contact/            # Contact form & WhatsApp component
│   │   ├── interactive/        # Interactive maps & components
│   │   └── layout/             # Layout components (Header, Footer, Navigation)
│   ├── pages/                  # Page components
│   │   ├── Home.tsx           # Homepage with services overview
│   │   ├── About.tsx          # About page
│   │   ├── Contact.tsx        # Contact page with form
│   │   ├── PropertyService.tsx # Villa services
│   │   ├── YachtService.tsx   # Yacht services
│   │   ├── ApparelService.tsx # Garment care services
│   │   ├── DeliveryService.tsx # Collection & delivery info
│   │   └── PrivacyPolicy.tsx  # GDPR-compliant privacy policy
│   ├── utils/                 # Utility functions
│   │   └── cookieManager.ts   # GDPR cookie management
│   └── App.tsx                # Main app component with routing
├── functions/                  # Firebase Functions Backend
│   ├── src/
│   │   └── index.ts           # Contact form email function
│   ├── package.json           # Backend dependencies
│   └── tsconfig.json          # TypeScript config for functions
├── public/                     # Static assets
├── .github/workflows/          # GitHub Actions CI/CD
└── dist/                       # Build output (generated)
```

## 🛠️ Development Setup

### Prerequisites

- Node.js 20+
- npm or yarn
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Networkcaretaker/lavafast.git
   cd lavafast
   ```

2. **Install frontend dependencies**

   ```bash
   npm install
   ```

3. **Install backend dependencies**

   ```bash
   cd functions
   npm install
   cd ..
   ```

4. **Set up environment variables**

   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

5. **Start development servers**

   ```bash
   # Frontend (Terminal 1)
   npm run dev

   # Backend Functions Emulator (Terminal 2)
   cd functions
   npm run serve
   ```

   The frontend will be available at `http://localhost:5173`  
   The functions emulator at `http://localhost:5001`

### Available Scripts

```bash
# Frontend Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run format       # Format code with Prettier

# Backend Development (in functions/ directory)
cd functions
npm run build        # Compile TypeScript
npm run serve        # Start functions emulator
npm run deploy       # Deploy functions only
```

## 🌐 Deployment

This project uses **Firebase Hosting & Functions** with **GitHub Actions** for automatic deployments:

### Deployment Workflow

- **Push to `main`** → Deploys to production (`lavafast-laundry-service.web.app`)
- **Push to `dev`** → Deploys to development environment
- **Open Pull Request** → Creates temporary preview deployment

### Manual Deployment

```bash
# Build both frontend and backend
npm run build
cd functions && npm run build && cd ..

# Deploy everything
firebase deploy

# Deploy specific targets
firebase deploy --only hosting
firebase deploy --only functions
```

## 🎨 Features

### Frontend Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Maps**: Collection point visualization for Mallorca and Palma
- **Animated Elements**: Smooth bubble animations and transitions
- **Cookie Management**: GDPR-compliant cookie consent system
- **WhatsApp Integration**: Direct messaging for customer inquiries
- **Modern Navigation**: Clean, intuitive navigation system

### Backend Features

- **Contact Form Processing**: Secure email handling via Firebase Functions
- **Gmail SMTP Integration**: Professional email delivery
- **Input Validation & Sanitization**: Security-first approach
- **CORS Protection**: Multi-domain support for staging/production
- **HTML Email Templates**: Branded, professional communications

### Core Pages

- **Home**: Service overview with direct booking options
- **Villa Services**: Luxury home laundry solutions
- **Yacht Services**: Marine-focused cleaning and care
- **Apparel Services**: Fine garment care and restoration
- **Collection Service**: Interactive maps showing pickup locations
- **Contact**: Integrated contact form with instant email delivery
- **Privacy Policy**: GDPR-compliant privacy documentation

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

### Firebase Environment Variables

Set these in Firebase Functions configuration:

```bash
firebase functions:config:set gmail.user="your-email@gmail.com"
firebase functions:config:set gmail.password="your-app-password"
firebase functions:config:set email.to="info@lavafast.es"
firebase functions:config:set email.from_name="Lavafast Website"
```

### Firebase Configuration

The project includes configurations for:

- **Hosting**: Single Page Application with optimized caching
- **Functions**: TypeScript-based serverless backend
- **CORS**: Multi-environment support
- **Email Service**: Secure Gmail SMTP integration

## 🚦 CI/CD Pipeline

### GitHub Actions Workflows

1. **Main Deployment** (`.github/workflows/firebase-hosting-merge.yml`)

   - Triggers on push to `main` or `dev` branches
   - Builds frontend and backend
   - Deploys to appropriate environment

2. **PR Previews** (`.github/workflows/firebase-hosting-pull-request.yml`)
   - Triggers on pull requests
   - Creates temporary preview deployments
   - Automatically expires after 7 days

### Required GitHub Secrets

Set these in your GitHub repository settings:

```
FIREBASE_SERVICE_ACCOUNT_LAVAFAST_LAUNDRY_SERVICE  # Firebase service account key
FIREBASE_PROJECT_ID                                # Your Firebase project ID
```

## 🎯 Development Guidelines

### Code Style

- **TypeScript**: Strict type checking enabled
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
  return <div className="tailwind-classes">{/* Component content */}</div>;
};

export default Component;
```

### Git Workflow

1. Create feature branch from `dev`
2. Make changes and commit
3. Open pull request to `dev`
4. Review and merge to `dev`
5. When ready, merge `dev` to `main` for production

## 📊 Performance & Monitoring

### Build Optimizations

- **Code Splitting**: Automatic chunk splitting with Vite
- **Asset Optimization**: Compressed images and minified CSS/JS
- **Tree Shaking**: Unused code elimination
- **Modern Bundle**: ES2020+ for modern browsers

### Hosting Features

- **Global CDN**: Firebase CDN with edge caching
- **SSL**: Automatic HTTPS
- **Compression**: Gzip/Brotli compression
- **Caching**: Optimized cache headers for static assets

### Email Service Performance

- **European Region**: Functions deployed in europe-west1 for low latency
- **Error Handling**: Comprehensive validation and graceful error responses
- **Security**: Input sanitization and CORS protection

## 🔒 Security & Privacy

### GDPR Compliance

- **Cookie Consent**: Granular cookie management system
- **Privacy Policy**: Comprehensive privacy documentation
- **Data Protection**: Secure data handling and user rights

### Security Measures

- **Input Sanitization**: All form inputs are sanitized
- **CORS Protection**: Restricted to approved domains
- **Secure Email**: App-specific passwords for Gmail
- **Environment Variables**: Sensitive data stored securely

### Supported Cookie Categories

- **Necessary**: Essential functionality (always enabled)
- **Analytics**: Google Analytics tracking (optional)
- **Marketing**: Advertising and remarketing (optional)
- **Functional**: User preferences and settings (optional)

## 💰 Cost Structure

### Firebase Services

- **Hosting**: Free tier (1GB storage, 10GB transfer/month)
- **Functions**: Free tier (2M invocations/month)
- **Email Service**: Gmail free tier (500 emails/day)

### Estimated Monthly Costs

- **Current**: €0 (within free tiers)
- **At Scale**: ~€6-15/month (Google Workspace upgrade when needed)

## 📝 Recent Changes

### Latest Updates (January 2025)

#### Backend Implementation

- ✅ **Contact Form Processing**: Firebase Functions with Nodemailer
- ✅ **Gmail SMTP**: Secure email delivery system
- ✅ **Input Validation**: Comprehensive security measures
- ✅ **HTML Email Templates**: Professional branded communications

#### Frontend Enhancements

- ✅ **Cookie Management**: GDPR-compliant consent system
- ✅ **Privacy Policy**: Comprehensive legal documentation
- ✅ **Interactive Maps**: Enhanced location visualization
- ✅ **Contact Form**: Integrated with backend email service

#### Development Optimizations

- ✅ **Dependency Cleanup**: Removed ESLint v9 bloat (60% reduction in package-lock.json)
- ✅ **Build Performance**: Faster installation and deployment
- ✅ **Code Formatting**: Prettier-only approach for current phase

## 🚀 Quick Start Commands

```bash
# Clone and setup
git clone https://github.com/Networkcaretaker/lavafast.git
cd lavafast
npm install
cd functions && npm install && cd ..

# Development
npm run dev

# Production build
npm run build
cd functions && npm run build && cd ..

# Deploy
firebase deploy
```

## 🔍 Troubleshooting

### Common Issues

1. **Functions Build Errors**

   ```bash
   cd functions
   npm run build
   # Check for TypeScript errors
   ```

2. **Email Not Sending**

   - Verify Gmail app password configuration
   - Check Firebase Functions logs: `firebase functions:log`

3. **CORS Errors**

   - Ensure your domain is added to allowed origins in functions/src/index.ts

4. **Cookie Banner Not Appearing**
   - Clear localStorage and refresh
   - Check browser console for errors

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Run formatting**
   ```bash
   npm run format
   ```
5. **Build and test**
   ```bash
   npm run build
   cd functions && npm run build
   ```
6. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
7. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```
8. **Open a Pull Request**

## 📄 License

This project is private and proprietary. All rights reserved.

## 📞 Support

For support and questions:

- **Business**: info@lavafast.es
- **Technical**: Issues tab on GitHub
- **Phone**: +34 646 396 735

---

## 📚 Documentation

- **Firebase Functions**: [Firebase Documentation](https://firebase.google.com/docs/functions)
- **React Router**: [React Router Documentation](https://reactrouter.com/)
- **Tailwind CSS**: [Tailwind Documentation](https://tailwindcss.com/docs)
- **TypeScript**: [TypeScript Documentation](https://www.typescriptlang.org/docs/)

---

**Built with ❤️ for Lavafast Laundry Service using React, TypeScript, Firebase, and modern web technologies**

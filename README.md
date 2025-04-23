# Tonmoy Infrastructure Vision

<div align="center">

![TIV Logo](public/images/logo.svg)

[![Next.js](https://img.shields.io/badge/Next.js-13.4%2B-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.1%2B-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3%2B-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.12%2B-0055FF?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

**Tomorrow's infrastructure foundations, engineered today.**

</div>

## 🚀 Overview

Tonmoy Infrastructure Vision is a forward-thinking consultancy specializing in enterprise-grade infrastructure solutions for the AI era. Our team of experts delivers robust cloud architectures, comprehensive security solutions, and efficient DevOps pipelines tailored to the unique needs of modern businesses.

This repository contains the source code for our official website, featuring interactive dashboards, service showcases, case studies, and a knowledge-sharing blog.

## ✨ Features

- **Modern Design System** – Catppuccin-inspired UI with elegant animations and interactions
- **Responsive Layout** – Perfectly optimized for all devices from mobile to desktop
- **Dark/Light Mode** – Automatically adapts to user preferences
- **Interactive Elements** – Animated sections and components for engaging user experience
- **Service Showcase** – Detailed presentation of our core infrastructure services
- **Project Portfolio** – Case studies of successful client implementations
- **Technical Blog** – Regularly updated articles on infrastructure best practices
- **Real-time Dashboard** – Interactive analytics for infrastructure monitoring
- **Meeting Scheduler** – EmailJS integration for booking consultations
- **Optimized Performance** – Scored 95+ on Lighthouse for all metrics

## 🛠️ Technology Stack

### Core
- **Next.js 13** – React framework with App Router
- **TypeScript** – Type-safe development
- **Tailwind CSS** – Utility-first styling

### UI/UX
- **Framer Motion** – Powerful animation library
- **Custom UI Components** – Built with tailored design system
- **Shadcn UI** – Customizable component primitives
- **Catppuccin Palette** – Beautiful color scheme foundation

### Data & Integrations
- **Recharts** – Visualization for dashboard statistics
- **EmailJS** – Form submission and appointment scheduling
- **MDX** – Enhanced markdown for blog content

## 🏗️ Architecture

The website follows a component-based architecture with:

- **App Router** – Modern Next.js routing with layout nesting
- **Centralized State** – React Context for theme and user preferences
- **Atomic Design** – Organized component structure
- **Optimization** – Lazy loading and image optimization
- **TypeSafe UI** – Strong typing for all components

## 🚀 Getting Started

### Prerequisites

- Node.js 16.8+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/TonmoyInfrastructureVision/TonmoyInfrastructureVision.github.io.git
cd TonmoyInfrastructureVision.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```
Then edit `.env.local` and add your EmailJS credentials.

4. Run the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

Visit [http://localhost:3000](http://localhost:3000) to see the application running.

## 📧 EmailJS Configuration

The meeting scheduler feature requires EmailJS for form handling:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up a service and template
3. Add your service ID, template ID and user ID to `.env.local`

## 🌐 Deployment

The website is deployed on GitHub Pages. To deploy your own version:

1. Configure GitHub repository settings for Pages
2. Set up GitHub Actions for automated deployment
3. Ensure custom domain settings are correct if using your own domain

## 🤝 Contributing

We welcome contributions to improve the website:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code follows our style guidelines and passes all tests.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [Catppuccin](https://github.com/catppuccin/catppuccin) for the color palette inspiration
- [Shadcn UI](https://ui.shadcn.com/) for component primitives
- [Lucide Icons](https://lucide.dev/) for beautiful iconography
- All our clients and collaborators 
# TonmoyInfrastructureVision.github.io

The official website for Tonmoy Infrastructure Vision, offering professional infrastructure engineering, cybersecurity, and DevOps services.

## Features

- Responsive design for all devices
- Modern UI with animations
- Dark/light mode
- Services showcase
- Project portfolio
- Blog with technical articles
- Interactive infrastructure analytics dashboard
- Testimonials from clients
- CEO meeting scheduler with EmailJS integration

## Technologies

- Next.js 13
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Shadcn UI Components
- EmailJS
- Recharts

## Setup

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

## EmailJS Setup for Appointment Feature

The CEO appointment scheduler requires EmailJS to handle form submissions. Follow the setup instructions in [docs/EMAILJS-SETUP.md](docs/EMAILJS-SETUP.md) to configure this feature.

## Deployment

This site is deployed on GitHub Pages. To deploy your own version:

1. Update the repository settings to use GitHub Pages.
2. Set the build directory to the Next.js output.
3. Ensure your domain is configured correctly if using a custom domain.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 
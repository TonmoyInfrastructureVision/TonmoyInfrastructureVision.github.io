import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open-Source Projects | Tonmoy Infrastructure Vision",
  description: "Explore our innovative open-source projects focused on infrastructure, security, and DevOps automation. We believe in building and sharing tools that empower the tech ecosystem.",
  keywords: [
    "infrastructure projects",
    "open source",
    "cloud automation",
    "security tools",
    "DevOps",
    "GitHub repositories",
    "Tonmoy Infrastructure Vision"
  ],
  openGraph: {
    title: "Open-Source Projects | Tonmoy Infrastructure Vision",
    description: "Explore our collection of open-source projects focused on infrastructure, security, and DevOps automation.",
    url: "https://tonmoyiv.com/projects",
    siteName: "Tonmoy Infrastructure Vision",
    images: [
      {
        url: "https://tonmoyiv.com/images/og-projects.jpg",
        width: 1200,
        height: 630,
        alt: "Tonmoy Infrastructure Vision Open-Source Projects"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Open-Source Projects | Tonmoy Infrastructure Vision",
    description: "Explore our collection of open-source projects focused on infrastructure, security, and DevOps automation.",
    images: ["https://tonmoyiv.com/images/og-projects.jpg"],
  }
}; 
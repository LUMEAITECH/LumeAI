import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import AppWalletProvider from "@/lib/solana-wallet-provider";
import { Toaster } from "@/components/ui/toaster";
import GradientBg from "@/components/ui/gradient-bg";

const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const META_TITLE = "Lume AI";
const META_DESCRIPTION = "A powerful framework for creating and managing AI agents based on the Lume OS architecture. Build, customize, and deploy intelligent agents";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "AI Agent",
    "Lume OS",
    "NVIDIA Omniverse",
    "Unreal Engine",
    "MetaHuman",
    "Agent Framework",
    "3D AI Agents",
    "Plugin System",
    "AI Development",
    "Digital Avatars"
  ],
  icons: {
    icon: "/favicon.ico", // Add your favicon file path here
    apple: "/favicon.ico", // Optional: For Apple devices
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: "https://Lumeai.tech",
    type: "website",
    images: [
      {
        url: "https://6y1vn05u04.ufs.sh/f/tqbgBCuEQ6bg9OpQQEoLBYGnCJcxk0mpjFVPorvulEDye3ti",
        width: 1200,
        height: 630,
        alt: "Lume AI",
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pixelifySans.className} antialiased text-white`}>
        <AppWalletProvider>
          <div className="min-h-screen">
            <GradientBg />
            <Header />
            <main>
              {children}
            </main>
            <Toaster />
          </div>
        </AppWalletProvider>
      </body>
    </html>
  );
}

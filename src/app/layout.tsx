import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import { Header } from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevMotors - Sua Oficina Especializada",
  description: "Oficina de carros em São Paulo",
  keywords:["oficina", "carros", "mecânica", "São Paulo", "DevMotors"],
  openGraph: {
    title: "DevMotors - Sua Oficina Especializada",
    images: [`${process.env.NEXT_PUBLIC_URL}/img3.jpg`]
  },
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header/>
        {children}
          <p style={{ textAlign: "center", marginTop: 54, marginBottom: 24}}>
            Todos os direitos reservados @{`${new Date().getFullYear()}`}
          </p>
      </body>
    </html>
  );
}

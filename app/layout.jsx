import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ✅ Better metadata */
export const metadata = {
  title: "Eshan Harshana | Software Developer",
  description:
    "Portfolio of Eshan Harshana, Software Developer specializing in modern web technologies.",
};

/* ✅ IMPORTANT for Chrome responsive mode */
export const viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
  <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primary text-white min-h-screen`}>
    <div className="flex flex-col min-h-screen">
      <Header />
      <StairTransition />
      <main className="flex-grow">
        <PageTransition>{children}</PageTransition>
      </main>
    </div>
  </body>
</html>

  );
}

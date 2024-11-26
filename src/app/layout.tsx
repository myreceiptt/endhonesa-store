import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavigationBar from "@/components/navbar/NavigationBar";

// Load custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for the site
export const metadata: Metadata = {
  title: "ENDHONESA STORE (TRY X ERROR)",
  description:
    "This TRY and ERROR occurs where trade will always run well and as well as possible according to the income generated and the value formed by each citizen of ENDHONESA.",
};

// Utility function to detect theme preference
function getThemeClass() {
  const prefersDarkMode = typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDarkMode ? "dark" : "";
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={getThemeClass()}>
      <body
        className={`bg-background dark:bg-foreground ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import { DarkModeProvider } from "@/context/DarkModeContext";
import NavigationBar from "@/components/NavBar";

const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ENDHONESA STORE (TRY X ERROR)",
  description:
    "This TRY and ERROR occurs where trade will always run well and as well as possible according to the income generated and the value formed by each citizen of ENDHONESA.",
};

function getThemeClass() {
  const prefersDarkMode =
    typeof window !== "undefined" &&
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
        className={`bg-background dark:bg-foreground ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <DarkModeProvider>
          <NavigationBar />
          {children}
        </DarkModeProvider>
      </body>
    </html>
  );
}

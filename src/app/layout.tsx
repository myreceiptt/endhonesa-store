import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";
import NavigationBar from "@/components/NavigationBar";

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

export const metadata: Metadata = {
  title: "MEMORA NFT (UJI X COBA)",
  description:
    "UJIAN dan COBAAN ini terjadi dimana perdagangan akan senantiasa berjalan dengan baik dan sebaik-baiknya sesuai dengan pendapatan yang dihasilkan dan nilai yang dibentuk oleh masing-masing warga-penduduknya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThirdwebProvider>
          <NavigationBar />
          {children}
        </ThirdwebProvider>
      </body>
    </html>
  );
}

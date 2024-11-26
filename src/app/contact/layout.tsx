import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CONTACT ENDHONESA STORE (TRY X ERROR)",
  description:
    "This TRY and ERROR occurs where trade will always run well and as well as possible according to the income generated and the value formed by each citizen of ENDHONESA.",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
      {children}
    </div>
  );
}

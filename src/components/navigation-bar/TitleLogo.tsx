import Link from "next/link";
import { useState } from "react";

export default function TitleLogo() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Link
      href="/"
      className={`rounded-full border-2 border-solid border-transparent bg-background text-foreground hover:border-background hover:bg-foreground hover:text-background block items-center justify-center text-2xl font-bold px-6 py-1 transform transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? "-translate-x-96" : "translate-x-0"
      }`}
    >
      MEMORA X NFT
    </Link>
  );
}

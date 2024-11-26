"use client";

import NavBrand from "./NavBrand";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

export default function NavigationBar() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Physical", href: "/physical" },
    { name: "Digital", href: "/digital" },
    { name: "Contact", href: "/contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="block w-full max-w-screen px-4 py-4 mx-auto bg-foreground dark:bg-background font-[family-name:var(--font-geist-mono)]">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <NavBrand />

        {/* NavLinks handles DarkModeToggle for Desktop */}
        <NavLinks navItems={navItems} className="hidden lg:block" />

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="relative lg:hidden rounded-full border-2 border-solid border-transparent bg-background dark:bg-foreground text-foreground dark:text-background hover:border-background dark:hover:border-foreground hover:bg-foreground dark:hover:bg-background hover:text-background dark:hover:text-foreground block items-center justify-center text-2xl font-bold p-1 transition-colors duration-300 ease-in-out"
          type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          navItems={navItems}
          onClose={toggleMobileMenu}
        />
      </div>
    </nav>
  );
}

import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

type MobileMenuProps = {
  isOpen: boolean;
  navItems: { name: string; href: string }[];
  onClose: () => void;
};

export default function MobileMenu({
  isOpen,
  navItems,
  onClose,
}: MobileMenuProps) {
  return (
    <div
      className={`fixed top-0 right-0 min-h-screen w-64 bg-foreground dark:bg-background shadow-xl transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } lg:hidden z-50`}>
      <div className="flex flex-row items-center border-b-2 border-background dark:border-foreground">
        <h1 className="text-background dark:text-foreground uppercase font-bold text-xl leading-6 sm:leading-7 py-6 p-4">
          ENDHONESA STORE
        </h1>
        <button
          onClick={onClose}
          className="absolute right-4 rounded-full border-2 border-solid border-transparent bg-background dark:bg-foreground text-foreground dark:text-background hover:border-background dark:hover:border-foreground hover:bg-foreground dark:hover:bg-background hover:text-background dark:hover:text-foreground block items-center justify-center text-2xl font-bold p-1 transition-colors duration-300 ease-in-out"
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <ul className="flex flex-col h-full gap-4 p-4">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center p-1 text-lg gap-x-2 text-background dark:text-foreground hover:text-foreground dark:hover:text-background hover:bg-background dark:hover:bg-foreground rounded font-semibold transition-colors duration-300 ease-in-out">
            <Link href={item.href} className="flex items-center">
              {item.name}
            </Link>
          </li>
        ))}

        {/* Dark Mode Toggle Button */}
        <li>
          <DarkModeToggle />
        </li>
      </ul>
    </div>
  );
}

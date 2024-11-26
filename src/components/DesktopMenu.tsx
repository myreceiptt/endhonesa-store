import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

type DesktopMenuProps = {
  navItems: { name: string; href: string }[];
  className?: string;
};

export default function DesktopMenu({ navItems, className = "" }: DesktopMenuProps) {
  return (
    <div className={className}>
      <ul className="flex flex-row items-center gap-6">
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

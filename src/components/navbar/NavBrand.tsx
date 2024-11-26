import Link from "next/link";

export default function NavBrand() {
  return (
    <Link
      href="/"
      className="rounded-full border-2 border-solid border-transparent bg-background dark:bg-foreground text-foreground dark:text-background hover:border-background dark:hover:border-foreground hover:bg-foreground dark:hover:bg-background hover:text-background dark:hover:text-foreground block items-center justify-center text-xl sm:text-2xl font-bold uppercase px-6 py-1 transition-colors duration-300 ease-in-out">
      ENDHONESA STORE
    </Link>
  );
}

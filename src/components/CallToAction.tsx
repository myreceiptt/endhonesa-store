import Link from "next/link";

export default function CallToAction() {
  return (
    <div className="flex gap-4 items-center flex-col sm:flex-row">
      <Link
        className="rounded-full border border-solid border-foreground dark:border-background flex items-center justify-center bg-foreground dark:bg-background text-background dark:text-foreground gap-2 hover:bg-background dark:hover:bg-foreground hover:text-foreground dark:hover:text-background text-sm sm:text-base font-semibold h-10 sm:h-12 px-4 sm:px-5 transition-colors duration-300 ease-in-out"
        href="https://nota.endhonesa.com/profile/breads"
        target="_blank"
        rel="noopener noreferrer">
        Breads Factory
      </Link>
      <Link
        className="rounded-full border border-solid border-foreground dark:border-background flex items-center justify-center bg-background dark:bg-foreground text-foreground dark:text-background gap-2 hover:bg-foreground dark:hover:bg-background hover:text-background dark:hover:text-foreground text-sm sm:text-base font-semibold h-10 sm:h-12 px-4 sm:px-5 transition-colors duration-300 ease-in-out"
        href="https://nota.endhonesa.com/profile/nota"
        target="_blank"
        rel="noopener noreferrer">
        Professor NOTA
      </Link>
    </div>
  );
}

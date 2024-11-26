import Image from "next/image";

export default function FooterBar() {
  return (
    <footer className="row-start-4 flex gap-2 flex-wrap items-center justify-center text-foreground dark:text-background">
      All right of
      <span className="flex items-center gap-2 bg-foreground dark:bg-background text-background dark:text-foreground px-1 py-0.5 rounded font-semibold">
        <Image
          aria-hidden
          src="/svg/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        <code>store.endhonesa.com</code>
      </span>{" "}
      reserved, both
      <span className="flex items-center gap-2 bg-foreground dark:bg-background text-background dark:text-foreground px-1 py-0.5 rounded font-semibold">
        <Image
          aria-hidden
          src="/svg/window.svg"
          alt="Window icon"
          width={16}
          height={16}
        />
        <code>onchain</code>
      </span>{" "}
      and
      <span className="flex items-center gap-2 bg-foreground dark:bg-background text-background dark:text-foreground px-1 py-0.5 rounded font-semibold">
        <Image
          aria-hidden
          src="/svg/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        <code>offchain</code>
      </span>{" "}
      since November 2013.
    </footer>
  );
}

"use client";
// import { NFT_CONTRACTS } from "@/consts/nft_contracts";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <Image
          className="dark:invert"
          src="/beware-of-scams.png"
          alt="Beware of Scams!"
          width={474}
          height={474}
          priority
        />
        <div className="text-sm sm:text-left font-[family-name:var(--font-geist-mono)]">
          <h1 className="mb-2 text-center">
            MEMORA NFT{" "}
            <code className="bg-foreground text-background px-1 py-0.5 rounded font-semibold">
              (UJI X COBA)
            </code>
          </h1>
          <h2 className="text-center">
            UJIAN dan COBAAN ini terjadi dimana perdagangan akan senantiasa
            berjalan dengan baik dan sebaik-baiknya sesuai dengan pendapatan
            yang dihasilkan dan nilai yang dibentuk oleh masing-masing
            warga-penduduknya.
          </h2>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-foreground transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-background hover:text-foreground text-sm sm:text-base font-semibold h-10 sm:h-12 px-4 sm:px-5"
            href="https://www.nftindonesia.xyz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NFT INDONESIA
          </a>
          <a
            className="rounded-full border border-solid border-foreground transition-colors flex items-center justify-center hover:bg-foreground hover:text-background bg-background text-foreground text-sm sm:text-base font-semibold h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nota.straight-line.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prof. NOTA Inc.
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-2 flex-wrap items-center justify-center font-semibold">
        Hak cipta dilindungi di{" "}
        <code className="flex items-center gap-2 bg-foreground text-background px-1 py-0.5 rounded font-semibold">
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          onchain
        </code>{" "}
        maupun di{" "}
        <code className="flex items-center gap-2 bg-foreground text-background px-1 py-0.5 rounded font-semibold">
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          offchain
        </code>{" "}
        sejak November 2024.{" "}
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://memora.endhonesa.com/"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          MEMORA X NFT
        </a>
      </footer>
    </div>
  );
}

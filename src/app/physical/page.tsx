"use client";

import { useState } from "react";
import Image from "next/image";
import endhonesaLogo from "../../public/1.48.png";
import bewareScams from "../../public/beware-of-scams.png";
import Link from "next/link";

export default function Physical() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        {/* Clickable Image */}
        <button
          onClick={openModal}
          className="focus:outline-none cursor-pointer">
          <Image
            className="invert-0 dark:invert"
            src={endhonesaLogo}
            alt="ENDHONESA STORE"
            priority
          />
        </button>

        {/* Main Text */}
        <div className="text-sm sm:text-left">
          <h1 className="mb-2 text-foreground dark:text-background text-center text-lg font-mono font-semibold">
            ENDHONESA STORE
          </h1>
          <h2 className="mb-2 text-foreground dark:text-background text-center text-lg font-mono font-semibold">
            <code className="bg-foreground dark:bg-background text-background dark:text-foreground px-1 py-0.5 rounded text-base font-semibold">
              (TRY X ERROR)
            </code>
          </h2>
          <h3 className="text-foreground dark:text-background text-center text-lg font-semibold">
            This TRY and ERROR occurs where trade will always run well and as
            well as possible according to the income generated and the value
            formed by each citizen of ENDHONESA.
          </h3>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            className="rounded-full border border-solid border-foreground dark:border-background flex items-center justify-center bg-foreground dark:bg-background text-background dark:text-foreground gap-2 hover:bg-background dark:hover:bg-foreground hover:text-foreground dark:hover:text-background text-sm sm:text-base font-semibold h-10 sm:h-12 px-4 sm:px-5 transition-colors duration-300 ease-in-out"
            href="https://nota.straight-line.org/profile/breads"
            target="_blank"
            rel="noopener noreferrer">
            Breads Factory
          </Link>
          <Link
            className="rounded-full border border-solid border-foreground dark:border-background flex items-center justify-center bg-background dark:bg-foreground text-foreground dark:text-background gap-2 hover:bg-foreground dark:hover:bg-background hover:text-background dark:hover:text-foreground text-sm sm:text-base font-semibold h-10 sm:h-12 px-4 sm:px-5 transition-colors  duration-300 ease-in-out"
            href="https://nota.straight-line.org/profile/nota"
            target="_blank"
            rel="noopener noreferrer">
            Professor NOTA
          </Link>
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black dark:bg-white bg-opacity-85 dark:bg-opacity-85 z-50">
          <div className="relative">
            {/* First Image */}
            <Image
              className="invert dark:invert-0"
              src={bewareScams}
              alt="Beware of Scams!"
              width={474}
              height={474}
            />

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute bottom-4 right-4 rounded-full border-2 border-solid border-transparent bg-background dark:bg-foreground text-foreground dark:text-background hover:border-background dark:hover:border-foreground hover:bg-foreground dark:hover:bg-background hover:text-background dark:hover:text-foreground block items-center justify-center text-2xl font-bold p-1 transition-colors duration-300 ease-in-out"
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
        </div>
      )}

      {/* Footer */}
      <footer className="row-start-4 flex gap-2 flex-wrap items-center justify-center text-foreground dark:text-background">
        All right of
        <span className="flex items-center gap-2 bg-foreground dark:bg-background text-background dark:text-foreground px-1 py-0.5 rounded font-semibold">
          <Image
            aria-hidden
            src="/globe.svg"
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
            src="/window.svg"
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
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          <code>offchain</code>
        </span>{" "}
        since November 2013.
      </footer>
    </div>
  );
}

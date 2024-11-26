"use client";

import Image from "next/image";
import bewareScams from "../../public/beware-of-scams.png";

interface ModalDefaultProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalDefault({ isOpen, onClose }: ModalDefaultProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black dark:bg-white bg-opacity-85 dark:bg-opacity-85 z-50">
      <div className="relative p-20">
        {/* Modal Image */}
        <Image
          className="invert dark:invert-0"
          src={bewareScams}
          alt="Beware of Scams!"
          width={474}
          height={474}
        />

        {/* Close Button */}
        <button
          onClick={onClose}
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
  );
}

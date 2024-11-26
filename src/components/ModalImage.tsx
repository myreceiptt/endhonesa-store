"use client";

import { useState } from "react";
import Image from "next/image";

interface ModalImageProps {
  imageSrc: string;
  altText: string;
}

export default function ModalImage({ imageSrc, altText }: ModalImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModalImage = () => setIsOpen(true);
  const closeModalImage = () => setIsOpen(false);

  return (
    <>
      {/* Clickable Image */}
      <button
        onClick={openModalImage}
        className={`focus:outline-none cursor-pointer invert-0 dark:invert`}>
        <Image src={imageSrc} alt={altText} width={200} height={200} />
      </button>

      {/* Modal Image */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black dark:bg-white bg-opacity-85 dark:bg-opacity-85 z-50">
          <div className="relative p-20">
            <Image
              className="invert dark:invert-0"
              src={imageSrc}
              alt={altText}
              width={474}
              height={474}
            />

            {/* Close Button */}
            <button
              onClick={closeModalImage}
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
    </>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import endhonesaLogo from "../../public/1.48.png";
import MainText from "@/components/MainText";
import ModalDefault from "@/components/ModalDefault";
import CallToAction from "@/components/CallToAction";
import FooterBar from "@/components/FootBar";

export default function Welcome() {
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
        <MainText />

        {/* Call to Action */}
        <CallToAction />
      </main>

      {/* Modal Default */}
      <ModalDefault isOpen={isModalOpen} onClose={closeModal} />

      {/* Footer */}
      <FooterBar />
    </div>
  );
}

"use client";
import Link from "next/link";
import { client } from "@/consts/client";
import { useGetENSAvatar } from "@/hooks/useGetENSAvatar";
import { useGetENSName } from "@/hooks/useGetENSName";
import Image from "next/image";
import { useState } from "react";
import {
  ConnectButton,
  darkTheme,
  useActiveAccount,
  useActiveWallet,
  useDisconnect,
} from "thirdweb/react";
import type { Wallet } from "thirdweb/wallets";
import { inAppWallet, createWallet } from "thirdweb/wallets";

const dompets = [
  inAppWallet({
    auth: {
      options: [
        "google",
        "email",
        "passkey",
        "phone",
        "apple",
        "facebook",
        "x",
        "telegram",
      ],
    },
  }),
  createWallet("io.metamask"),
  createWallet("app.phantom"),
  createWallet("com.okex.wallet"),
  createWallet("com.coinbase.wallet"),
];

export default function NavigationBar() {
  const account = useActiveAccount();
  const wallet = useActiveWallet();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Navigation items array
  const navItems = [
    { name: "Beranda", href: "/" },
    { name: "Galeri", href: "/galeri" },
    { name: "Panduan", href: "/panduan" },
    { name: "Kontak", href: "/kontak" },
  ];

  return (
    <nav className="block w-full max-w-screen px-4 py-4 mx-auto bg-foreground font-[family-name:var(--font-geist-mono)]">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link
          href="/"
          className={`rounded-full border-2 border-solid border-transparent bg-background text-foreground hover:border-background hover:bg-foreground hover:text-background block items-center justify-center text-2xl font-bold uppercase px-6 py-1 transform transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "-translate-x-96" : "translate-x-0"
          }`}
        >
          Memora X NFT
        </Link>

        <div className="lg:hidden">
          <button
            className="relative ml-auto h-8 max-h-[40px] w-8 max-w-[40px] select-none rounded-lg text-center align-middle text-sm font-medium text-background hover:bg-transparent focus:bg-transparent active:bg-transparent"
            onClick={toggleMobileMenu}
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 min-h-screen w-64 bg-foreground shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden z-50`}
        >
          <div className="flex flex-row items-center border-b-2 border-background">
            <Link
              href="/"
              className="text-background font-bold text-xl py-6 ps-4"
            >
              MEMORA X NFT
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="absolute py-6 right-4 text-background"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
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
                className="flex items-center p-1 text-lg gap-x-2 text-background"
              >
                <Link href={item.href} className="flex items-center">
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              {account && wallet ? (
                <ProfileButton address={account.address} wallet={wallet} />
              ) : (
                <>
                  <button
                    onClick={toggleDropdown}
                    className="rounded-full border-2 border-solid border-transparent bg-background text-foreground hover:border-background hover:bg-foreground hover:text-background block items-center justify-center text-2xl font-bold px-6 py-1 transform transition-all duration-300 ease-in-out"
                  >
                    <svg
                      className="w-6 h-6"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 14a3 3 0 0 1 3-3h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a3 3 0 0 1-3-3Zm3-1a1 1 0 1 0 0 2h4v-2h-4Z"
                        clip-rule="evenodd"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M12.293 3.293a1 1 0 0 1 1.414 0L16.414 6h-2.828l-1.293-1.293a1 1 0 0 1 0-1.414ZM12.414 6 9.707 3.293a1 1 0 0 0-1.414 0L5.586 6h6.828ZM4.586 7l-.056.055A2 2 0 0 0 3 9v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2h-4a5 5 0 0 1 0-10h4a2 2 0 0 0-1.53-1.945L17.414 7H4.586Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                  {dropdownOpen && (
                    <ul className="absolute right-0 mt-5 w-64 bg-white text-background shadow-xl border-y-2 border-background">
                      <li className="block bg-foreground px-4 py-2">
                        <ConnectButton
                          client={client}
                          wallets={dompets}
                          theme={darkTheme({
                            colors: {
                              primaryText: "#ededed",
                              secondaryText: "#ededed",
                              accentText: "#ededed",

                              danger: "#ededed",
                              success: "#ededed",

                              // modalOverlayBg: "",

                              accentButtonBg: "#ededed",
                              accentButtonText: "#0a0a0a",

                              primaryButtonBg: "#0a0a0a",
                              primaryButtonText: "#ededed",

                              // secondaryButtonBg: "",
                              // secondaryButtonText: "",
                              // secondaryButtonHoverBg: "",

                              modalBg: "#0a0a0a",

                              tooltipBg: "",
                              tooltipText: "#24690A",

                              // inputAutofillBg: "",
                              // scrollbarBg: "",
                              // tertiaryBg: "",

                              // separatorLine: "",

                              secondaryIconColor: "#ededed",
                              secondaryIconHoverBg: "#ededed",
                              secondaryIconHoverColor: "#0a0a0a",

                              // borderColor: "",
                              // skeletonBg: "",

                              // connectedButtonBg: "",
                              // connectedButtonBgHover: "",
                            },
                          })}
                          connectButton={{
                            label: "LOGIN",
                            style: { height: "56px" },
                          }}
                          connectModal={{
                            size: "wide",
                            title: "Silahkan LOGIN!",
                            // titleIcon: "https://nota.straight-line.org/og.png",
                            // welcomeScreen: {
                            //   title: "MEMORA X NFT",
                            //   subtitle:
                            //     "Please LOGIN to our Decentralized World!",
                            //   img: {
                            //     src: "/beware-of-scams.png",
                            //     height: 247,
                            //     width: 247,
                            //   },
                            // },
                            showThirdwebBranding: false,
                            // termsOfServiceUrl:
                            //   "https://nota.straight-line.org/profile",
                            // privacyPolicyUrl:
                            //   "https://nota.straight-line.org/profile",
                          }}
                        />
                      </li>
                    </ul>
                  )}
                </>
              )}
            </li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex flex-row items-center gap-6">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center p-1 text-lg gap-x-2 text-background"
              >
                <Link href={item.href} className="flex items-center">
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              {account && wallet ? (
                <ProfileButton address={account.address} wallet={wallet} />
              ) : (
                <>
                  <button
                    onClick={toggleDropdown}
                    className="rounded-full border-2 border-solid border-transparent bg-background text-foreground hover:border-background hover:bg-foreground hover:text-background block items-center justify-center text-2xl font-bold px-6 py-1 transform transition-all duration-300 ease-in-out"
                  >
                    <svg
                      className="w-6 h-6"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 14a3 3 0 0 1 3-3h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a3 3 0 0 1-3-3Zm3-1a1 1 0 1 0 0 2h4v-2h-4Z"
                        clip-rule="evenodd"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M12.293 3.293a1 1 0 0 1 1.414 0L16.414 6h-2.828l-1.293-1.293a1 1 0 0 1 0-1.414ZM12.414 6 9.707 3.293a1 1 0 0 0-1.414 0L5.586 6h6.828ZM4.586 7l-.056.055A2 2 0 0 0 3 9v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2h-4a5 5 0 0 1 0-10h4a2 2 0 0 0-1.53-1.945L17.414 7H4.586Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                  {dropdownOpen && (
                    <ul className="absolute right-0 mt-5 w-64 bg-white text-background shadow-xl border-y-2 border-background">
                      <li className="block bg-foreground px-4 py-2">
                        <ConnectButton
                          client={client}
                          wallets={dompets}
                          theme={darkTheme({
                            colors: {
                              primaryText: "#ededed",
                              secondaryText: "#ededed",
                              accentText: "#ededed",

                              danger: "#ededed",
                              success: "#ededed",

                              // modalOverlayBg: "",

                              accentButtonBg: "#ededed",
                              accentButtonText: "#0a0a0a",

                              primaryButtonBg: "#0a0a0a",
                              primaryButtonText: "#ededed",

                              // secondaryButtonBg: "",
                              // secondaryButtonText: "",
                              // secondaryButtonHoverBg: "",

                              modalBg: "#0a0a0a",

                              tooltipBg: "#ededed",
                              tooltipText: "#0a0a0a",

                              // inputAutofillBg: "",
                              // scrollbarBg: "",
                              // tertiaryBg: "",

                              // separatorLine: "",

                              secondaryIconColor: "#ededed",
                              secondaryIconHoverBg: "#ededed",
                              secondaryIconHoverColor: "#0a0a0a",

                              // borderColor: "",
                              // skeletonBg: "",

                              // connectedButtonBg: "",
                              connectedButtonBgHover: "#0a0a0a",
                            },
                          })}
                          connectButton={{
                            label: "LOGIN",
                            style: { height: "56px" },
                          }}
                          connectModal={{
                            size: "wide",
                            title: "Silahkan LOGIN!",
                            // titleIcon: "https://nota.straight-line.org/og.png",
                            // welcomeScreen: {
                            //   title: "MEMORA X NFT",
                            //   subtitle:
                            //     "Please LOGIN to our Decentralized World!",
                            //   img: {
                            //     src: "/beware-of-scams.png",
                            //     height: 247,
                            //     width: 247,
                            //   },
                            // },
                            showThirdwebBranding: false,
                            // termsOfServiceUrl:
                            //   "https://nota.straight-line.org/profile",
                            // privacyPolicyUrl:
                            //   "https://nota.straight-line.org/profile",
                          }}
                        />
                      </li>
                    </ul>
                  )}
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function ProfileButton({
  address,
  wallet,
}: {
  address: string;
  wallet: Wallet;
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const { disconnect } = useDisconnect();
  const { data: ensName } = useGetENSName({ address });
  const { data: ensAvatar } = useGetENSAvatar({ ensName });
  return (
    <>
      <button
        onClick={toggleDropdown}
        className="rounded-full border-2 border-solid border-transparent bg-background text-foreground hover:border-background hover:bg-foreground hover:text-background block items-center justify-center text-2xl font-bold px-6 py-1 transform transition-all duration-300 ease-in-out"
      >
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M12 14a3 3 0 0 1 3-3h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a3 3 0 0 1-3-3Zm3-1a1 1 0 1 0 0 2h4v-2h-4Z"
            clip-rule="evenodd"
          />
          <path
            fill-rule="evenodd"
            d="M12.293 3.293a1 1 0 0 1 1.414 0L16.414 6h-2.828l-1.293-1.293a1 1 0 0 1 0-1.414ZM12.414 6 9.707 3.293a1 1 0 0 0-1.414 0L5.586 6h6.828ZM4.586 7l-.056.055A2 2 0 0 0 3 9v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2h-4a5 5 0 0 1 0-10h4a2 2 0 0 0-1.53-1.945L17.414 7H4.586Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      {dropdownOpen && (
        <ul className="absolute right-0 mt-5 w-64 bg-white text-background shadow-xl border-y-2 border-background">
          <li className="block bg-foreground px-4 py-2 border-b-2 border-background">
            <ConnectButton
              client={client}
              wallets={dompets}
              theme={darkTheme({
                colors: {
                  primaryText: "#ededed",
                  secondaryText: "#ededed",
                  accentText: "#ededed",

                  danger: "#ededed",
                  success: "#ededed",

                  // modalOverlayBg: "",

                  accentButtonBg: "#ededed",
                  accentButtonText: "#0a0a0a",

                  primaryButtonBg: "#0a0a0a",
                  primaryButtonText: "#ededed",

                  // secondaryButtonBg: "",
                  // secondaryButtonText: "",
                  // secondaryButtonHoverBg: "",

                  modalBg: "#0a0a0a",

                  tooltipBg: "#ededed",
                  tooltipText: "#0a0a0a",

                  // inputAutofillBg: "",
                  // scrollbarBg: "",
                  // tertiaryBg: "",

                  // separatorLine: "",

                  secondaryIconColor: "#ededed",
                  secondaryIconHoverBg: "#ededed",
                  secondaryIconHoverColor: "#0a0a0a",

                  // borderColor: "",
                  // skeletonBg: "",

                  // connectedButtonBg: "",
                  connectedButtonBgHover: "#0a0a0a",
                },
              })}
              connectButton={{
                label: "LOGIN",
                style: { height: "56px" },
              }}
              connectModal={{
                size: "wide",
                title: "Silahkan LOGIN!",
                // titleIcon: "https://nota.straight-line.org/og.png",
                // welcomeScreen: {
                //   title: "MEMORA X NFT",
                //   subtitle:
                //     "Please LOGIN to our Decentralized World!",
                //   img: {
                //     src: "/beware-of-scams.png",
                //     height: 247,
                //     width: 247,
                //   },
                // },
                showThirdwebBranding: false,
                // termsOfServiceUrl:
                //   "https://nota.straight-line.org/profile",
                // privacyPolicyUrl:
                //   "https://nota.straight-line.org/profile",
              }}
            />
          </li>
          <li className="block bg-foreground px-4 py-2 border-b-2 border-background">
            <Link href="/">
              <button className="min-w-full py-3 bg-background text-foreground rounded-lg">
                {ensName ? `${ensName}` : ""}
              </button>
            </Link>
          </li>

          <li
            onClick={() => {
              if (wallet) disconnect(wallet);
            }}
            className="block bg-foreground px-4 py-2"
          >
            <Link href="/">
              <button className="min-w-full py-3 bg-background text-foreground rounded-lg">
                LOGOUT
              </button>
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}

"use client";

import { useState } from "react";
import {
  ConnectButton,
  useActiveAccount,
  useActiveWallet,
  useDisconnect,
  darkTheme,
} from "thirdweb/react";
import type { Wallet } from "thirdweb/wallets";
import { client } from "@/consts/client";
import { createWallet, inAppWallet } from "thirdweb/wallets";
import { useGetEnsAvatar } from "@/hooks/useGetAvatar";
import { useGetEnsName } from "@/hooks/useGetName";
import Link from "next/link";

const wallets = [
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

export default function LoginButton() {
  const account = useActiveAccount();
  const wallet = useActiveWallet();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      {account && wallet ? (
        <ProfileButton address={account.address} wallet={wallet} />
      ) : (
        <>
          <button
            onClick={toggleDropdown}
            className="rounded-full border-2 border-solid border-transparent bg-background text-foreground hover:border-background hover:bg-foreground hover:text-background block items-center justify-center text-2xl font-bold px-6 py-1 transition-colors duration-300 ease-in-out"
            type="button">
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 14a3 3 0 0 1 3-3h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a3 3 0 0 1-3-3Zm3-1a1 1 0 1 0 0 2h4v-2h-4Z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M12.293 3.293a1 1 0 0 1 1.414 0L16.414 6h-2.828l-1.293-1.293a1 1 0 0 1 0-1.414ZM12.414 6 9.707 3.293a1 1 0 0 0-1.414 0L5.586 6h6.828ZM4.586 7l-.056.055A2 2 0 0 0 3 9v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2h-4a5 5 0 0 1 0-10h4a2 2 0 0 0-1.53-1.945L17.414 7H4.586Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {dropdownOpen && (
            <ul className="absolute right-0 mt-5 w-64 shadow-xl border-y-2 border-background">
              <li className="block bg-foreground px-4 py-2">
                <ConnectButton
                  client={client}
                  wallets={wallets}
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
                    title: "Please LOGIN!",
                    // titleIcon: "https://nota.straight-line.org/og.png",
                    // welcomeScreen: {
                    //   title: "ENDHONESA STORE",
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
    </>
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
  const { data: ensName } = useGetEnsName({ address });
  const { data: ensAvatar } = useGetEnsAvatar({ ensName });
  return (
    <>
      <button
        onClick={toggleDropdown}
        className="rounded-full border-2 border-solid border-transparent bg-background text-foreground hover:border-background hover:bg-foreground hover:text-background block items-center justify-center text-2xl font-bold px-6 py-1 transition-colors duration-300 ease-in-out"
        type="button">
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12 14a3 3 0 0 1 3-3h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a3 3 0 0 1-3-3Zm3-1a1 1 0 1 0 0 2h4v-2h-4Z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M12.293 3.293a1 1 0 0 1 1.414 0L16.414 6h-2.828l-1.293-1.293a1 1 0 0 1 0-1.414ZM12.414 6 9.707 3.293a1 1 0 0 0-1.414 0L5.586 6h6.828ZM4.586 7l-.056.055A2 2 0 0 0 3 9v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2h-4a5 5 0 0 1 0-10h4a2 2 0 0 0-1.53-1.945L17.414 7H4.586Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {dropdownOpen && (
        <ul className="absolute right-0 mt-5 w-64 bg-white text-background shadow-xl border-y-2 border-background">
          <li className="block bg-foreground px-4 py-2 border-b-2 border-background">
            <ConnectButton
              client={client}
              wallets={wallets}
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
                title: "Please LOGIN!",
                // titleIcon: "https://nota.straight-line.org/og.png",
                // welcomeScreen: {
                //   title: "ENDHONESA STORE",
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
            <button
              className="min-w-full py-3 bg-background text-foreground rounded-lg"
              type="button">
              <Link href="/">{ensAvatar ? `${ensAvatar}` : ""} OWNED</Link>
            </button>
          </li>

          <li
            onClick={() => {
              if (wallet) disconnect(wallet);
            }}
            className="block bg-foreground px-4 py-2">
            <button
              className="min-w-full py-3 bg-background text-foreground rounded-lg"
              type="button">
              <Link href="/">LOGOUT</Link>
            </button>
          </li>
        </ul>
      )}
    </>
  );
}

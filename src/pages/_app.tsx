import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

import localFont from "next/font/local";

// CONTEXT
import FetchTriggerProvider from "@/context/fetchTrigger";
import ModalAppearProvider from "@/context/modalAppear";
import AlertSuccessProvider from "@/context/alertSuccess";
import AlertFailedProvider from "@/context/alertFailed";
import AlertMessageProvider from "@/context/alertMessage";
import DataJurnalProvider from "@/context/dataJurnal";
import ConfirmDeleteProvider from "@/context/confirmDeleteContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <FetchTriggerProvider>
      <ModalAppearProvider>
        <AlertSuccessProvider>
          <AlertFailedProvider>
            <AlertMessageProvider>
              <DataJurnalProvider>
                <ConfirmDeleteProvider>
                  <SessionProvider session={session}>
                    <div
                      className={`${geistSans.variable} ${geistMono.variable}`}
                    >
                      <Component {...pageProps} />
                    </div>
                  </SessionProvider>
                </ConfirmDeleteProvider>
              </DataJurnalProvider>
            </AlertMessageProvider>
          </AlertFailedProvider>
        </AlertSuccessProvider>
      </ModalAppearProvider>
    </FetchTriggerProvider>
  );
}

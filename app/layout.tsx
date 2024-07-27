import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';
import {ClerkProvider} from "@clerk/nextjs"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "iCab",
  description: "iCab Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
      appearance={
        {
          layout:{
            logoImageUrl:'/public/icab.svg',
            socialButtonsVariant:"iconButton"
          }
        }
      }
      >
      <body className={inter.className}>
        <NextTopLoader
        color="#000000"
        />
        {children}
        </body>
        </ClerkProvider>
    </html>
  );
}

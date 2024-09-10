import type { Metadata } from "next";
import "./globals.css";

import { cn } from "@/lib/utils";
import { NextUIProvider } from "@nextui-org/react";
import { HeaderSecond } from "@/components/header/header-second/HeaderSecond";
import { HeaderFirst } from "@/components/header/header-first/HeaderFirst";
import { FooterMain } from "@/components/footer/FooterMain";

export const metadata: Metadata = {
  title: "Туристическое агентство в Астрахани «Вокруг Света»",
  description: "Туристическое агентство в Астрахани «Вокруг Света»",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-background font-myfont antialiased")}>
        <NextUIProvider>
          <section className="min-h-screen flex flex-col h-full">
            <HeaderSecond />
            <HeaderFirst />
            {children}
            <FooterMain />
          </section>
        </NextUIProvider>
      </body>
    </html>
  );
}

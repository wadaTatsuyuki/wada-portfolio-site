import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import * as React from "react";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <header className="p-3 border-b border-blue-400">
          <div className="container grid grid-cols-12 gap-4 mx-auto p-2 max-w-screen-xl">
            <div className="col-span-12 lg:col-span-3 mx-auto lg:mx-0">
              <Link href="/" className="text-2xl">
                WADA Tatsuyuki
              </Link>
            </div>
            <nav className="col-span-12 lg:col-span-9 text-base flex flex-row justify-center space-x-2 lg:space-x-5 lg:flex-row lg:justify-end">
              <Link
                href="/blog"
                className="hover:text-orange-400 transition-all duration-300"
              >
                Blog
              </Link>
              <Link
                href="/nobel"
                className="hover:text-orange-400 transition-all duration-300"
              >
                Nobel
              </Link>
              <Link
                href="/picture"
                className="hover:text-orange-400 transition-all duration-300"
              >
                Picture
              </Link>
              <Link
                href="/about"
                className="hover:text-orange-400 transition-all duration-300"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-orange-400 hover:text-blue-400 transition-all duration-300"
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>

        <div>
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}

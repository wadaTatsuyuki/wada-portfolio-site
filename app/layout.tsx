import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import * as React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Button } from "@mui/material";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <header className="header">
          <nav className="nav">
            <div className="nav-left">
              <Link href="/">WADA Tatsuyuki</Link>
            </div>
            <div className="nav-center">
              <Link href="/blog">Blog</Link>
              <Link href="/nobel">Nobel</Link>
              <Link href="/picture">Picture</Link>
              <Link href="/about">About</Link>
            </div>
            <Button variant="contained" color="warning">
              <Link href="/contact">Contact</Link>
            </Button>
          </nav>
        </header>
        <div>
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}

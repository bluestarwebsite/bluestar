import "~/styles/globals.css";

import { Lato } from "next/font/google";
import { type Metadata } from "next";

const lato = Lato({ subsets: ["latin"], weight: "400" });
export const metadata: Metadata = {
  title: "Bluestar Consulting",
  description: "Bluestar",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={lato.className}>
      <body className="bg-brand-bg">{children}</body>
    </html>
  );
}

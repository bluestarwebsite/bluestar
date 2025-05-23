import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Open_Sans } from "next/font/google";
import { type Metadata } from "next";

const sans = Open_Sans({ subsets: ["latin"], weight: "400" });
export const metadata: Metadata = {
  title: "Bluestar Consulting",
  description: "Bluestar",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={sans.className}>
      <body className="bg-brand-bg">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

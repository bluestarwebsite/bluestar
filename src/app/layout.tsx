import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Bluestar Consulting",
  description: "Bluestar",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <div className="fixed z-[-2] flex h-screen w-screen bg-gradient-to-b from-black to-[#040121]">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className={`fixed z-[-1] h-[2px] w-[2px] animate-twinkle rounded-full bg-white`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`, // Random delay for each star
              }}
            />
          ))}
        </div>
        {children}
      </body>
    </html>
  );
}

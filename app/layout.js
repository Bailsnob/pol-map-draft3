import { Syne, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import GameContext from "./context/game-context";
import Navigation from "./components/layout/navigation";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["400", "500"],
});

export const metadata = {
  title: "PollMap",
  description: "Guess the election — read the map",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body>
        <GameContext>
          <Navigation />
          <main className="pageContent">{children}</main>
        </GameContext>
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import GameContext from "./context/game-context";
import Navigation from "./components/layout/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PollMap",
  description: "learn more about electoral geography",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="gridContainer">
          <div className="navigation">
            <Navigation />
          </div>
          <div className="pageContent"><GameContext>{children}</GameContext></div>
        </div>
      </body>
    </html>
  );
}

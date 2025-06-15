import { Inter } from "next/font/google";
import "./globals.css";
import Logo from "@/components/Logo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Wild Oasis",
  description: "The wild oasis website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Logo />
        </header>
        {children}
      </body>
    </html>
  );
}

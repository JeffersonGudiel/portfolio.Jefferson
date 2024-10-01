import { Outfit } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Jefferson - Full-Stack Developer and Programmer",
  description: "Hire Jefferson for your next project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressContentEditableWarning>
      <body className={outfit.className}>
        <div className="background-gradient"></div>

        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

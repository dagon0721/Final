import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link"; // Link import
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import CounterProvider from "@/store/CounterProvider";
import { Counter } from "@/features/counter/Counter";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <CounterProvider>
        <ThemeProvider>
          <body>
            <Header></Header>

            {/* Main Content */}
            <main style={{ padding: "20px" }}>
              <ThemeToggleButton />
              <Provider>{children}</Provider>
            </main>

            <Footer></Footer>
          </body>
        </ThemeProvider>
      </CounterProvider>
    </html>
  );
}

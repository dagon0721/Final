import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link"; // Link import
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeToggleButton from "@/components/ThemeToggleButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <ThemeProvider>
        <body>
          {/* Header Section */}
          <header style={{ textAlign: "center", padding: "20px", backgroundColor: "#f4f4f4" }}>
            <h1>Header</h1>
            <nav>
              <Link href="/" style={{ margin: "0 10px", textDecoration: "none", color: "blue" }}>
                Home
              </Link>
              <Link href="/props-flow" style={{ margin: "0 10px", textDecoration: "none", color: "blue" }}>
                Props-Flow
              </Link>
            </nav>
          </header>

          {/* Main Content */}
          <main style={{ padding: "20px" }}>
            <ThemeToggleButton />
            <Provider>{children}</Provider>
          </main>

          {/* Footer Section */}
          <footer style={{ textAlign: "center", padding: "20px", backgroundColor: "#f4f4f4" }}>
            <h1>Footer</h1>
          </footer>
        </body>
      </ThemeProvider>
    </html>
  );
}

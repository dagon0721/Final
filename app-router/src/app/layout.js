import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";
import CounterProvider from "@/store/CounterProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <header>
          <h1>====== Header ======</h1>
          <nav>
            <ul style={{ display: "flex", listStyle: "none", padding: 0 }}>
              <li style={{ marginRight: "20px" }}>
                <Link href="/">Home</Link>
              </li>
              <li style={{ marginRight: "20px" }}>
                <Link href="/about">About</Link>
              </li>
              <li style={{ marginRight: "20px" }}>
                <Link href="/blog">Blog</Link>
              </li>
              <li style={{ marginRight: "20px" }}>
                <Link href="/slug">Slug</Link>
              </li>
              <li style={{ marginRight: "20px" }}>
                <Link href="/temp">Temp</Link>
              </li>
              <li style={{ marginRight: "20px" }}>
                <Link href="/rest-api">Axios</Link>
              </li>
              <li style={{ marginRight: "20px" }}>
                <Link href="/cssEx">cssEx</Link>
              </li>
              <li style={{ marginRight: "20px" }}>
                <Link href="/cssModule">cssModule</Link>
              </li>
              <li style={{ marginRight: "20px" }}>
                <Link href="/sassEx">SassEx</Link>
              </li>
              <li style={{ marginRight: "20px" }}>
                <Link href="/counter">Counter</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <h2>----- Footer -----</h2>
        </footer>
      </body>
    </html>
  );
}

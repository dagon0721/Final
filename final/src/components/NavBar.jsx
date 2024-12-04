import Link from "next/link";

export default function NarBar() {
  return (
    <header style={{ textAlign: "center", padding: "20px", backgroundColor: "#f4f4f4" }}>
      <nav>
        <Link href="/" style={{ margin: "0 10px", textDecoration: "none", color: "blue" }}>
          Home
        </Link>
        <Link href="/about" style={{ margin: "0 10px", textDecoration: "none", color: "blue" }}>
          About
        </Link>
        <Link href="/contact" style={{ margin: "0 10px", textDecoration: "none", color: "blue" }}>
          Contact
        </Link>
      </nav>
    </header>
  );
}

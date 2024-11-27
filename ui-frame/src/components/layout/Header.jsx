import Link from "next/link";

export default function Header() {
  return (
    <header style={{ textAlign: "center", padding: "20px", backgroundColor: "#f4f4f4" }}>
      <h1>Header</h1>
      <nav>
        <Link href="/" style={{ margin: "0 10px", textDecoration: "none", color: "blue" }}>
          Home
        </Link>
        <Link href="/props-flow" style={{ margin: "0 10px", textDecoration: "none", color: "blue" }}>
          Props-Flow
        </Link>
        <Link href="/counter" style={{ margin: "0 10px", textDecoration: "none", color: "blue" }}>
          Counter
        </Link>
      </nav>
    </header>
  );
}

import NarBar from "@/components/NavBar";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <NarBar></NarBar>

      <main style={{ textAlign: "center", padding: "20px" }}>{children}</main>
    </html>
  );
}

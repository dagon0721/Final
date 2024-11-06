// src/app/slug/page.jsx
"use client";

import { usePathname } from "next/navigation";

export default function PostPage() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop(); // URL에서 슬러그 부분만 추출

  return (
    <div>
      <h1>Post: {slug}</h1>
      <p>This is a dynamically generated page for the slug: {slug}</p>
    </div>
  );
}

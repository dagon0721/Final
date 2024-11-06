// cssEx/page.js
"use client";

import CssEx1 from "../../components/CssEx1"; // cssEx1 컴포넌트 임포트
import CssEx2 from "../../components/CssEx2";

export default function CssEx() {
  return (
    <>
      <h1>CssEx Page</h1>
      <CssEx1 /> {/* cssEx1 컴포넌트 사용 */}
      <CssEx2 /> {/* cssEx2 컴포넌트 사용 */}
    </>
  );
}

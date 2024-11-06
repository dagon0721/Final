import Image from "next/image";
import foo from "./page.module.css";

export default function Home() {
  return (
    <>
      <h1 className={foo.title}>Home Page</h1>
      <h1 className={foo.main}>Home Page</h1>
    </>
  );
}

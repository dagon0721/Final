import Image from "next/image";
import foo from "/public/images/halloween-959049_1920.jpg";

export default function About() {
  return (
    <>
      <h1>About</h1>
      <h3>About...</h3>
      <Image
        src="/images/tower-6521842_1920.jpg"
        alt="에펠탑"
        width={300}
        height={500}
      />
      <Image src={foo} alt="할로윈" layout="responsive" />
      <Image
        src="https://cdn.pixabay.com/photo/2021/12/07/14/00/river-6853339_960_720.jpg"
        alt="베니스"
        width={960}
        height={720}
      />

      {/* layout ="fill" 본인 이미지 크기에 맞춰 채움*/}
      {/* layout="responsive" 부모 크기에 맞춰서 채움*/}
    </>
  );
}

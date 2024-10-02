import { useRouter } from "next/router";

export default function Foo() {
  const router = useRouter();
  const { blog, foo = [], id, name, pid } = router.query;
  console.log({ blog, foo, id, name, pid });

  if (!router.isReady) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* <h1>blog: {blog} </h1> */}
      <h1>foo[0]: {foo[0] || "값이 없습니다"} </h1>
      <h1>foo[1]: {foo[1] || "값이 없습니다"} </h1>
      <h1>foo[2]: {foo[2] || "값이 없습니다"} </h1>
      <h1>id: {id || "값이 없습니다"} </h1>
      <h1>name: {name || "값이 없습니다"} </h1>
      <h1>pid: {pid || "값이 없습니다"} </h1>
    </div>
  );
}

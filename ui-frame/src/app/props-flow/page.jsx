import ComponentA from "@/components/ComponentsA";

export default function PropsFlow() {
  const data = { id: 1, name: "woo", message: "hello world" };
  return (
    <>
      <h1>Props Flow</h1>
      <ComponentA foo={data} />
    </>
  );
}

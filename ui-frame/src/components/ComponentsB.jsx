import ComponentC from "./ComponentsC";

export default function ComponentB({ data }) {
  return (
    <>
      <h1>ComponentB</h1>
      <ComponentC props={data} />
      <p>ComponentB-{data.id}</p>
    </>
  );
}

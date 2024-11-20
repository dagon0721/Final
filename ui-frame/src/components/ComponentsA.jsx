import ComponentB from "./ComponentsB";
import ComponentC from "./ComponentsC";

export default function ComponentA({ foo }) {
  return (
    <>
      <h1>ComponentA</h1>
      <ComponentB data={foo} />
      <p>ComponentA-{foo.name}</p>
    </>
  );
}

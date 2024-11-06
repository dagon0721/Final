import scss from "@/styles/foo.module.scss";

export default function SassEx() {
  return (
    <>
      <div className={scss.bar}>
        <h1>SassEx Page</h1>
        <h2 className={scss.foo}>Button</h2>
      </div>
    </>
  );
}

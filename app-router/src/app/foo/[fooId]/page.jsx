export default function fooId(props) {
  return (
    <div>
      <h1>App Router</h1>
      <h1>
        foo {props.params.fooId} / {props.searchParams.contry}
      </h1>
    </div>
  );
}

export default function Page(props) {
  console.log(props);
  return (
    <>
      <h1>fooo: {props.params.fooo}</h1>
      {/* <h1>fooo[1]: {props.params.fooo[1]}</h1> */}
      <h1>id: {props.searchParams.id}</h1>
      <h1>name: {props.searchParams.name}</h1>
    </>
  );
}

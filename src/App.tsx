export default function App(props) {
  return (
    <div>
      <h1>Hello, World!</h1>
      <input
        defaultValue={props.value}
        onChange={(e) => {
          props.update(e.target.value);
        }}
      ></input>
    </div>
  );
}

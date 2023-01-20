export default function App(props) {
  let val = "";

  try {
    val = atob(props.value);
  } catch (e) {}

  return (
    <div>
      <p>Das ist eine React Komponente:</p>
      <textarea
        defaultValue={val}
        onChange={(e) => {
          props.update(btoa(e.target.value));
        }}
      ></textarea>
    </div>
  );
}

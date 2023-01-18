export default function App(props) {
  return (
    <div>
      <p>Das ist eine React Komponente:</p>
      <textarea
        defaultValue={atob(props.value)}
        onChange={(e) => {
          props.update(btoa(e.target.value));
        }}
      ></textarea>
    </div>
  );
}

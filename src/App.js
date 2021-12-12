import { useEffect, useState } from "react";
import "./styles.css";

const StopWatch = ({ start }) => {
  const [value, setValue] = useState(start);

  useEffect(() => {
    const id = setInterval(() => {
      setValue(value + 1);
      clearInterval(id);
      console.log(Date.now(), value);
    }, 1000);

    return () => {
      console.log("Cleaning");

      console.log(id);
    };
  }, [value]);

  return (
    <>
      <h1>Stopwatch</h1>
      <h2>{value}</h2>
    </>
  );
};

export default function App() {
  const [hide, setHide] = useState(false);
  return (
    <div className="App">
      {hide && <StopWatch start={0} />}
      <button onClick={() => setHide(!hide)}>Toggle StopWatch</button>
    </div>
  );
}

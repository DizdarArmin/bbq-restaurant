import { useEffect, useState } from "react";
export default function Loading() {
  const [counter, setCounter] = useState(0);
  const loading = "Loading...";
  const [display, setDisplay] = useState("");

  // setTimeout...
  useEffect(() => {
    let toDisplay = display + loading[counter];
    setTimeout(function () {
      if (counter === 10) {
        setCounter(0);
        setDisplay("");
        toDisplay = "";
      } else {
        setCounter(counter + 1);
        setDisplay(toDisplay);
      }
    }, 150);
  }, [display]);
  return (
    <div className="container-fluid">
      <div className="container loading">
        <div className="content">
          <h1>{display}</h1>
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [counter, setCounter] = useState(1);
  const location = ["area!", "town!", "country!"];
  const [display, setDisplay] = useState(location[0]);

  // again setTimeout -1
  useEffect(() => {
    setTimeout(function () {
      setDisplay(location[counter]);
      setCounter(counter + 1);
      if (counter === 2) {
        setCounter(0);
      }
    }, 1000);
  }, [counter]);

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="homepage">
          <h1>Welcome to Roastello</h1>

          <div className="subtitle">
            <h2>Best meat in</h2>
            <h2>{display}</h2>
          </div>
          <br />
          <Link to="/menu">
            <div className="button">
              <div>
                <div>Browse</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

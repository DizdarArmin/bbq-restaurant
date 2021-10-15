import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="homepage">
          <h1>Welcome</h1>
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

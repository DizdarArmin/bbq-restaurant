import { Link } from "react-router-dom";

export default function CategoryCard({ item }) {
  const { name, image, description } = item;
  return (
    <div className="row category-card">
      <div className="col-12 col-md-6 image">
        <img className="img img-fluid" alt="category" src={image} />
      </div>
      <div className="col-12 col-md-6">
        <div className="card-content row">
          <h3 className="card-title  font-weight-bold">{name}</h3>
          <p className="description font-italic">{description}</p>

          <Link to={`/menu/${name.toLowerCase()}`}>
            <button className="col-md  btn category-button">See more</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

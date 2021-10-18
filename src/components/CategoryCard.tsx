import { Link } from "react-router-dom";

export default function CategoryCard({ item }) {
  const { name, image, description } = item;

  let source = new Image();
  source.src = "https://via.placeholder.com/150/000000/FFFFFF/";
  if (image) {
    source.src = image;
  }
  return (
    <section className="category-card">
      <img alt="category" src={source.src} />
      <div className="card-content">
        <h2>{name}</h2>
        <p>{description}</p>
        <div>
          <Link to={`/${name.toLowerCase()}`}>
            <div>See more</div>
          </Link>
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
export default function ProductCard({ item }) {
  const { category, name, price, description, imageURL } = item;
  const nameURL = name.replace(/\s+/g, "-").toLowerCase();

  return (
    <section className="product-card">
      <img alt="product" src={imageURL} />
      <div className="content">
        <h2>
          {name} - {price} SEK
        </h2>
        <br />
        <p>{description}</p>
        <br />
        <div>
          <Link to={`/menu/${category.toLowerCase()}/${nameURL}`}>
            <div>See more</div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function ProductDetails({ item }) {
  const { name, price, description, ingredients, imageURL } = item;
  const arrayOfIngredients = ingredients.split(",");

  const Ingredients = arrayOfIngredients.map((item, i) => (
    <div className="ingredient" key={i}>
      ➤ {item.trim()}
    </div>
  ));

  return (
    <section className="product-details">
      <img alt="product" className="hero" src={imageURL} />
      <div className="content">
        <h2>
          {name} - {price} SEK
        </h2>
        <br />
        <p> {description}</p>
        <br />
        <h3>Ingredients:</h3>
        <br />
        <div className="ingredients">{Ingredients}</div>
      </div>
    </section>
  );
}

import { FormEvent, useEffect, useState } from "react";

import { createDocument } from "../scripts/fireStore";
import { ValidateProduct } from "../scripts/validate";
import ButtonSubmit from "./shared/ButtonSubmit";
import FormProduct from "./shared/FormProduct";
//prettier-ignore
export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [imageURL, setImageURL] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    let button = ValidateProduct(name,price,category,imageURL,ingredients,description);
    setButtonDisabled(button);
  }, [name, category, imageURL, price, ingredients, description]);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    createDocument("products", {name: name,price: price,category: category,
      imageURL: imageURL,ingredients: ingredients,description: description,
    });
  }

  return (
    <section>
      <h3>Add product</h3>
      <form onSubmit={(event) => onSubmit(event)} className="row">
        <FormProduct
          name={name} setName={setName} price={price} setPrice={setPrice}
          imageURL={imageURL} setImageURL={setImageURL}
          category={category} setCategory={setCategory}
          description={description} setDescription={setDescription} 
          ingredients={ingredients} setIngredients={setIngredients}>
            <div className="col-12 col-md-6 offset-md-6 actions">
              <ButtonSubmit buttonDisabled={buttonDisabled} /> 
            </div>
        </FormProduct>
      </form>
    </section>
  );
}

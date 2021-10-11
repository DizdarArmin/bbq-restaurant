import { useState, useEffect } from "react";

import { ValidateProduct } from "../scripts/validate";
import iProduct from "../types/iProduct";
import FormProduct from "./shared/FormProduct";
import ButtonCheck from "./shared/ButtonCheck";
import ButtonDelete from "./shared/ButtonDelete";
import { remove } from "../scripts/crud";
import { updateDocument } from "../scripts/fireStore";
import Dropdown from "./shared/Dropdown";

interface iProps {
  item: iProduct;
}
//prettier-ignore
export default function Product({ item }: iProps) {
  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(item.price);
  const [category, setCategory] = useState(item.category);
  const [ingredients, setIngredients] = useState(item.ingredients);
  const [imageURL, setImageURL] = useState(item.imageURL);
  const [description, setDescription] = useState(item.description);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    let button = ValidateProduct(name,price,category,imageURL,ingredients,description);
    setButtonDisabled(button);
  }, [name, category, imageURL, price, ingredients, description]);

  function update() {
    updateDocument("products", item.id, {name,price,category,imageURL,ingredients,description});
  }
  return (
    //prettier-ignore
    <Dropdown name={item.name} category={item.category}>  
      <FormProduct
          name={name} setName={setName} price={price} setPrice={setPrice}
          imageURL={imageURL} setImageURL={setImageURL}
          category={category} setCategory={setCategory}
          description={description} setDescription={setDescription} 
          ingredients={ingredients} setIngredients={setIngredients}>

        <div className="col-12 col-md-6 actions">
          <ButtonCheck  handler={() => update()} 
                      lock={buttonDisabled}/>
        </div>

        <div className="col-12 col-md-6 actions">
          <ButtonDelete handler={() => remove(name, item.id, "products")} />
        </div>
      </FormProduct>
    </Dropdown>
  );
}

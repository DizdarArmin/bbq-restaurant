import HTML from "../../data/HtmlAttributesProduct.json";
import EditInput from "../shared/EditInput";
import Select from "../shared/Select";
import Text from "../shared/Text";
//prettier-ignore
export default function FormProduct({name,setName,price,setPrice,category,setCategory,
                                     ingredients,setIngredients,imageURL,setImageURL,
                                     description,setDescription,children}) 
  {
  return (
    <>
      <div className="form-product-top">
        <EditInput HTML={HTML.name} state={name} set={setName} />
        <EditInput HTML={HTML.price} state={price} set={setPrice} />
        <Select HTML={HTML.select} state={category} set={setCategory} />
      </div>
        <EditInput HTML={HTML.image} state={imageURL} set={setImageURL} />
      <div className="form-product-bottom">
            <Text HTML={HTML.ingredients} state={ingredients} set={setIngredients}/>
            <Text HTML={HTML.description} state={description} set={setDescription}/>
      </div>
          {children}
    </>
  );
}

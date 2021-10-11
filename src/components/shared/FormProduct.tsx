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
      <div className="col-12 col-md-4">
        <EditInput HTML={HTML.name} state={name} set={setName} />
      </div>

      <div className="col-12 col-md-4">
        <EditInput HTML={HTML.price} state={price} set={setPrice} />
      </div>

      <div className="col-12 col-md-4">
        <Select HTML={HTML.select} state={category} set={setCategory} />
      </div>

      <div className="col-12 col-md-12">
        <EditInput HTML={HTML.image} state={imageURL} set={setImageURL} />
      </div>
    
      <div className="col-12 col-md-6">
            <Text HTML={HTML.ingredients} state={ingredients} set={setIngredients}/>
      </div>

      <div className="col-12 col-md-6">
            <Text HTML={HTML.description} state={description} set={setDescription}/>
      </div>
          {children}
    </>
  );
}

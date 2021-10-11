import EditInput from "./EditInput";
import Text from "./Text";
import HTML from "../../data/HtmlAttributesCategory.json";
//prettier-ignore
export default function FormCategory({name,setName,image,setImage, description,setDescription, children}) {

  return (
    <>
      <div className="col-12">
        <EditInput HTML={HTML.name} state={name} set={setName} />
      </div>

      <div className="col-12">
        <EditInput HTML={HTML.image} state={image} set={setImage} />
      </div>

      <div className="col-12">
        <Text HTML={HTML.description} state={description} set={setDescription}/>
      </div>
      {children}
    </>
  );
}

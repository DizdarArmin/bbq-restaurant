import EditInput from "./EditInput";
import Text from "./Text";
import HTML from "../../data/HtmlAttributesCategory.json";
//prettier-ignore
export default function FormCategory({name,setName,image,setImage, description,setDescription, children}) {

  return (
    <>
      <div>
        <EditInput HTML={HTML.name} state={name} set={setName} />
      </div>

      <div>
        <EditInput HTML={HTML.image} state={image} set={setImage} />
      </div>

      <div>
        <Text HTML={HTML.description} state={description} set={setDescription}/>
      </div>
      {children}
    </>
  );
}

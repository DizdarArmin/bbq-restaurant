import { useEffect, useState } from "react";

import { updateDocument } from "../../scripts/fireStore";
import { ValidateCategory } from "../../scripts/validate";
import { remove } from "../../scripts/remove";
import iCategory from "../../types/iCategory";
import Dropdown from "./../shared/Dropdown";
import ButtonCheck from "../shared/ButtonCheck";
import ButtonDelete from "../shared/ButtonDelete";
import FormCategory from "../shared/FormCategory";
interface iProps {
  item: iCategory;
}
//prettier-ignore
export default function Category({ item }: iProps) {
  const [name, setName] = useState(item.name);
  const [image, setImage] = useState(item.image);
  const [description, setDescription] = useState(item.description);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  
  useEffect(() => {
    const button = ValidateCategory(name, image, description);
    setButtonDisabled(button);
  }, [name, image, description]);


  function update() {
    updateDocument("categories", item.id, {name,image,description});
    setTimeout(function () {
      document.location.reload();
    }, 1000);
  }

  return (
    <div className="category">
      <Dropdown name={item.name} category>
      <FormCategory name={name} setName={setName} image={image} setImage={setImage} 
                          description={description} setDescription={setDescription}>
        <div className="buttons">
             <ButtonCheck handler={() =>update()} lock={buttonDisabled}/>
              <ButtonDelete handler={() => remove(name, item.id, "categories")} />
        </div>
        </FormCategory>
      </Dropdown>


      
    </div>
  );
}

import { useEffect, useState } from "react";

import { updateDocument } from "../scripts/fireStore";
import { ValidateCategory } from "../scripts/validate";
import { remove } from "../scripts/crud";
import iCategory from "../types/iCategory";
import ButtonCheck from "./shared/ButtonCheck";
import ButtonDelete from "./shared/ButtonDelete";
import FormCategory from "./shared/FormCategory";
interface iProps {
  item: iCategory;
}
//prettier-ignore
export default function Category({ item }: iProps) {
  const [name, setName] = useState(item.name);
  const [image, setImage] = useState(item.image);
  const [description, setDescription] = useState(item.description);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [dropdown, setDropDown] = useState(false);

  useEffect(() => {
    const button = ValidateCategory(name, image, description);
    setButtonDisabled(button);
  }, [name, image, description]);


  function update() {
    updateDocument("categories", item.id, {name,image,description});
  }

  return (
    <div className="category row">
        <div className="extend" onClick={() => setDropDown(!dropdown)}>
          {item.name}
          {dropdown && <i className="fas fa-2x fa-caret-up" />}
          {!dropdown && <i className="fas fa-2x fa-caret-down" />}
        </div>

        {dropdown && (
        <FormCategory name={name} setName={setName} image={image} setImage={setImage} 
                          description={description} setDescription={setDescription}>
            <div className="col-12 col-md-6 actions">
              <ButtonCheck handler={() =>update()} lock={buttonDisabled}/>
            </div>

            <div className="col-12 col-md-6 actions">
              <ButtonDelete handler={() => remove(name, item.id, "categories")} />
            </div>
        </FormCategory>
      )}
    </div>
  );
}

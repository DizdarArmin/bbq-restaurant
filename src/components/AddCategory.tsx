import { FormEvent, useEffect, useState } from "react";

import { createDocument } from "../scripts/fireStore";
import { ValidateCategory } from "../scripts/validate";
import FormCategory from "./shared/FormCategory";
import ButtonSubmit from "./shared/ButtonSubmit";

//prettier-ignore
export default function AddCategory() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    let button = ValidateCategory(name, image, description);
    setButtonDisabled(button);
  }, [name, description, image]);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    createDocument("categories", {name: name,image: image,description: description});
    setTimeout(function () {
      document.location.reload();
    }, 1000);
  }

  return (
    <section>
      <h3>Add category</h3>
      <form onSubmit={(event) => onSubmit(event)}>
      <FormCategory name={name} setName={setName} image={image} setImage={setImage} 
                    description={description} setDescription={setDescription}>
            <div className="col-12 col-md-6 offset-md-6 actions">
              <ButtonSubmit buttonDisabled={buttonDisabled} />
            </div>
        </FormCategory>

      </form>
    </section>
  );
}

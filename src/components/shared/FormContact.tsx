import { useState, useEffect } from "react";

import { ValidateContact } from "scripts/validate";
import { updateDocument } from "scripts/fireStore";
import useDocument from "hooks/useDocument";
import HTML from "../../data//HtmlAttributesContact.json"; // this has a relative path vs. the other aboslute paths
import EditInput from "./EditInput";

export default function FormContact() {
  const { data } = useDocument("contact", "contact");

  const [email, setEmail] = useState(data.email);
  const [address, setAddress] = useState(data.address);
  const [number, setNumber] = useState(data.number);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    const validate = ValidateContact(email, address, number);
    setButtonDisabled(validate);
  }, [email, address, number]);

  // This useEffect should not exist -1
  // this can cause sync issues if you forget to add it.
  // passing a onChange handler would be better
  useEffect(() => {
    setEmail(data.email);
    setAddress(data.address);
    setNumber(data.number);
  }, [data]);

  function update(event) {
    event.preventDefault();
    updateDocument("contact", "contact", { email, address, number });

    // -1
    setTimeout(function () {
      document.location.reload();
    }, 1000);
  }

  return (
    <form onSubmit={(event) => update(event)}>
      <EditInput HTML={HTML.email} state={email} set={setEmail} />
      <EditInput HTML={HTML.address} state={address} set={setAddress} />
      <EditInput HTML={HTML.number} state={number} set={setNumber} />

      <div className="submit-button">
        <button disabled={buttonDisabled} type="submit">
          Update
        </button>
      </div>
    </form>
  );
}

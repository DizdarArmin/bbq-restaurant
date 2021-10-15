import { removeDocument } from "./fireStore";

export function remove(name: string, id: string, collection: string) {
  const check = prompt("Type in category name to delete: " + name);
  if (check === name) {
    removeDocument(collection, id);
  } else if (check === null) {
    return;
  } else alert("Wrong name, try again...");
}

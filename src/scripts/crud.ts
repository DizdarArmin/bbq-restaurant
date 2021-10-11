import { removeDocument } from "./fireStore";

export function remove(name: string, id: string, collection: string) {
  const check = prompt("Type in category name to delete: " + name);
  if (check === name) {
    removeDocument(collection, id);
  } else alert("Wrong name, try again...");
}

/* eslint-disable */
export function ValidateProduct(
  name: string,
  price: number,
  category: string,
  imageURL: string,
  ingredients: string,
  description: string
) {
  if (name.length < 3) {
    return true;
  } else if (price <= 0) {
    return true;
  } else if (!category) {
    return true;
  } else if (imageURL.length < 10) {
    return true;
  } else if (ingredients.length < 10) {
    return true;
  } else if (description.length < 100) {
    return true;
  } else return false;
}

export function ValidateCategory(
  name: string,
  imageURL: string,
  description: string
) {
  if (name.length < 3) {
    return true;
  } else if (imageURL.length < 10) {
    return true;
  } else if (description.length < 100) {
    return true;
  } else return false;
}

export function ValidateContact(
  email: string,
  address: string,
  number: string
) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const validEmail = regex.test(email);
  if (!validEmail) {
    return true;
  } else if (address.length < 8) {
    return true;
  } else if (number.length < 9) {
    return true;
  } else return false;
}

// here the image is imageURL as it should, but you should have gone back to iCategory and refactor it as well
// consistency (recruiters do notice this stuff)
export default interface iProduct {
  id: string;
  name: string;
  price: number;
  imageURL: string;
  description: string;
  category: string;
  ingredients: string;
}

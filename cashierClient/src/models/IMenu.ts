import { IIngredient } from "./IIngredient";

export interface IMenu {
  name: string;
  ingredients: IIngredient[];
  category: string;
  price: number;
}

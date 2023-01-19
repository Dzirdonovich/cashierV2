import { IIngredient } from "./IIngredient";
export interface Order {
  name: string;
  ingredients: IIngredient[];
  category: string;
  price: number;
  size: number;
  count: number;
}

export interface ICurrentOrder {
  Orders: Order[];

  Current: {
    name: string;
    ingredients: IIngredient[];
    category: string;
    price: number;
  };
}

import { Key } from "react";

export type TProduct = {
  _id: null | undefined | Key;
  image1: string;
  image2: string;
  title: string;
  brand: string;
  available_quantity: number;
  price: number;
  rating: number;
  description: string;
  add_to_cart_button: string;
  isDeleted: string;
};

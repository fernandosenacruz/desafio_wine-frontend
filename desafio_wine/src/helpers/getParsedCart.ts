import { IProduct } from "../interfaces/IProduct";

const getParsedCart = (): IProduct[] | [] => JSON.parse(localStorage.getItem('cart') || '[]');

export default getParsedCart;

import React from "react"
import { IProduct } from "../components/Product"

type ContextType = {
  products: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<never[]>>;
  product: IProduct;
  setProduct: React.Dispatch<React.SetStateAction<never[]>>;
};

export const ProductsContext = React.createContext<ContextType>({
  products: [],
  setProducts: () => void 0,
  product: {},
  setProduct: () => void 0,
});

type Props = {
  children: React.ReactNode;
};

const ProductsProvider: React.FC<Props> = ({ children }) => {
  const [products, setProducts] = React.useState([]);
  const [product, setProduct] = React.useState({});

  return (
    <ProductsContext.Provider value={{ products, setProducts, product, setProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;

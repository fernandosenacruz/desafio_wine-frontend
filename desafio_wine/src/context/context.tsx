import React from 'react';
import { IProduct } from '../components/Product';

type ContextType = {
  products: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<never[]>>;
  product: IProduct;
  setProduct: React.Dispatch<React.SetStateAction<never[]>>;
  storage: number;
  setStorage: React.Dispatch<React.SetStateAction<never[]>>;
};

export const ProductsContext = React.createContext<ContextType>({
  products: [],
  setProducts: () => void 0,
  product: {},
  setProduct: () => void 0,
  storage: 0,
  setStorage: () => void 0,
});

type Props = {
  children: React.ReactNode;
};

const ProductsProvider: React.FC<Props> = ({ children }) => {
  const [products, setProducts] = React.useState([]);
  const [product, setProduct] = React.useState({});
  const [storage, setStorage] = React.useState(0);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        product,
        setProduct,
        storage,
        setStorage,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;

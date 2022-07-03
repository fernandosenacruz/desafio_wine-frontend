import React from 'react';
import { IProduct, IProducts } from '../interfaces/IProduct';

type ContextType = {
  products: IProducts;
  setProducts: React.Dispatch<React.SetStateAction<IProducts>>;
  product: IProduct;
  setProduct: React.Dispatch<React.SetStateAction<IProduct>>;
  storage: number;
  setStorage: React.Dispatch<React.SetStateAction<number>>;
};

export const DEFAULT_VALUE = {
  products: {
    page: 1,
    totalPages: 1,
    itemsPerPage: 62,
    totalItems: 62,
    items: [
      {
        avaliations: 292,
        classification: 'Seco',
        country: 'Portugal',
        discount: 45,
        flag: 'https://img.wine.com.br/fenix/image/flags/rounded/portugal.svg',
        id: 0,
        image:
          'https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/19694-01.png',
        name: 'Bacalhôa Quinta da Garrida Colheita Selecionada 2015',
        price: 175.9,
        priceMember: 96.9,
        priceNonMember: 114,
        rating: 4,
        region: 'Dão',
        size: '750 ml',
        sommelierComment:
          'Esse tinto traz em seu assemblage a Touriga Nacional, uma das uvas tintas portuguesas mais conhecidas no mundo do vinho. Nativa do Dão, região produtora desse vinho, essa variedade atinge a sua expressão máxima nesse terroir. O termo Colheita Selecionada estampado no rótulo, é uma referência a qualidade da safra 2015.',
        type: 'Tinto',
      },
    ],
  },
  product: {
    avaliations: 292,
    classification: 'Seco',
    country: 'Portugal',
    discount: 45,
    flag: 'https://img.wine.com.br/fenix/image/flags/rounded/portugal.svg',
    id: 0,
    image:
      'https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/19694-01.png',
    name: 'Bacalhôa Quinta da Garrida Colheita Selecionada 2015',
    price: 175.9,
    priceMember: 96.9,
    priceNonMember: 114,
    rating: 4,
    region: 'Dão',
    size: '750 ml',
    sommelierComment:
      'Esse tinto traz em seu assemblage a Touriga Nacional, uma das uvas tintas portuguesas mais conhecidas no mundo do vinho. Nativa do Dão, região produtora desse vinho, essa variedade atinge a sua expressão máxima nesse terroir. O termo Colheita Selecionada estampado no rótulo, é uma referência a qualidade da safra 2015.',
    type: 'Tinto',
  },
};

export const ProductsContext = React.createContext<ContextType>({
  products: DEFAULT_VALUE.products,
  setProducts: () => void 0,
  product: DEFAULT_VALUE.product,
  setProduct: () => void 0,
  storage: 0,
  setStorage: () => void 0,
});

type Props = {
  children: React.ReactNode;
};

const ProductsProvider: React.FC<Props> = ({ children }) => {
  const [products, setProducts] = React.useState(DEFAULT_VALUE.products);
  const [product, setProduct] = React.useState(DEFAULT_VALUE.product);
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

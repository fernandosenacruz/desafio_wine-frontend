import Image from 'next/image';
import { useContext } from 'react';
import { ProductsContext } from '../context/context';

export interface IProduct {
  avaliations: number;
  classification: string;
  country: string;
  discount: number;
  flag: string;
  id: number;
  image: string;
  name: string;
  price: number;
  priceMember: number;
  priceNonMember: number;
  rating: number;
  region: string;
  size: string;
  sommelierComment: string;
  type: string;
}

export interface IProductProps {
  product: IProduct;
}

const Product = () => {
  const { product, setProduct } = useContext(ProductsContext);
const { products, setProducts } = useContext(ProductsContext);

  const handleClick = ({ id }) => {
    const wine = products.items.find((product) => product.id === +id);

		const localProducts = JSON.parse(localStorage.getItem('cart'));

    localProducts
			? localStorage.setItem('cart', JSON.stringify([...localProducts, wine]))
			: localStorage.setItem('cart', JSON.stringify([wine]));
  };

  return (
    <div className="">
      <h3>{product.name}</h3>
      <div>
        <Image
          src={product.flag}
          alt="bandeira do país de origem do vinho"
          width="16px"
          height="16px"
        />
        <span>{product.country}</span>
        <span>{product.type}</span>
        <span>{product.classification}</span>
        <span>{product.size}</span>
      </div>
      <div>
        <Image
          src={product.image}
          alt="imagem da garrafa de vinho"
          width="381px"
          height="579px"
        />
      </div>
      <div>
        <h3>Descrição</h3>
        <p>{product.sommelierComment}</p>
      </div>
      <div>
        <span>{product.discount}% OFF</span>
        <span style={{ textDecoration: 'line-through' }}>
          R$ {product.price}
        </span>
        <span>R$ {product.priceMember}</span>
        <span>PREÇO NÃO SÓCIO R$ {product.priceNonMember}</span>
      </div>
      <div className="product__price-button-container">
        <button
          id={product.id}
          onClick={({ target }) => {
            handleClick(target);
          }}
        >
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default Product;

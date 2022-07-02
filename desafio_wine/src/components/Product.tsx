import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
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
  const { product, products, storage, setStorage } = useContext(ProductsContext);
  const [wineCounter, setWineCounter] = useState(0);

  const handleInc = ({ id }) => {
    const wine = products.items.find((product) => product.id === +id);

    const cart = JSON.parse(localStorage.getItem('cart'));

    if (cart) {
      localStorage.setItem('cart', JSON.stringify([...cart, wine]));

      setStorage(cart.length);
    } else {
      localStorage.setItem('cart', JSON.stringify([wine]));
    }
  };

  const handleDec = ({ id }) => {
    const cart = JSON.parse(localStorage.getItem('cart'));

    let item = [];

    if (cart) {
      item = cart.map((product) => product.id).indexOf(+id);

      if (item !== -1) {
        cart.splice(item, 1);

        localStorage.setItem('cart', JSON.stringify(cart));

        setStorage(cart.length);
      }
    }
  };

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart'));

    if (cart) {
      const qnt = cart.filter((wine) => wine.id === product.id);

      setWineCounter(qnt.length);
    }
  }, [storage, product]);

  return (
    <div className="">
      <div>
        <Image
          src={product.image}
          alt="imagem da garrafa de vinho"
          width="381px"
          height="579px"
        />
      </div>
      <div>
        <div>
          <h6>Vinhos</h6>
          <Image
            src="/arrow.svg"
            alt="seta maior que"
            width="10px"
            height="5.59px"
          />
          <h6>{product.country}</h6>
          <Image
            src="/arrow.svg"
            alt="seta maior que"
            width="10px"
            height="5.59px"
          />
          <h6>{product.region}</h6>
        </div>
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
          <span>R$ {product.priceMember}</span>
          <span>NÃO SÓCIO R$ {product.priceNonMember}/UN.</span>
        </div>
        <div>
          <h4>Comentário do Sommelier</h4>
          <p>{product.sommelierComment}</p>
        </div>
        <div>
          <button
            id={product.id}
            onClick={({ target }) => {
              handleDec(target);
            }}
          >
            -
          </button>
          <span>{wineCounter}</span>
          <button
            id={product.id}
            onClick={({ target }) => {
              handleInc(target);
            }}
          >
            +
          </button>
          <button
            id={product.id}
            onClick={({ target }) => {
              handleInc(target);
            }}
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

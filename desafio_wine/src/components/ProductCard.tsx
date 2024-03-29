import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect } from 'react';
import { DEFAULT_VALUE, ProductsContext } from '../context/context';
import { IProduct, IProductProps } from '../interfaces/IProduct';
import styles from '../../styles/Home.module.css';
import getParsedCart from '../helpers/getParsedCart';

const ProductCard = (props: IProductProps) => {
  const { setProduct, products } = useContext(ProductsContext);

  const handleClick = (id: number) => {
    const wine = products.items.find((product) => product.id === id);

    const cart = getParsedCart();

    cart
      ? localStorage.setItem('cart', JSON.stringify([...cart, wine]))
      : localStorage.setItem('cart', JSON.stringify([wine]));
  };

  const setSelectedProduct = (id: number) => {
    const wine = products.items.find((product) => product.id === id) || DEFAULT_VALUE.product;

    setProduct(wine);
  };

  return (
    <div className={styles.card}>
      <Link href={`/wine/${props.product.id}`}>
        <a
          onClick={() => setSelectedProduct(props.product.id)}
          style={{ textDecoration: 'none' }}
        >
          <div>
            <Image
              src={props.product.image}
              alt="imagem da garrafa de vinho"
              width="198.57px"
              height="178.13px"
            />
            <h5 className={styles.card_h5}>{props.product.name}</h5>
          </div>
          <div className={styles.card_discount}>
            <span className={styles.through_price}>
              R$ {props.product.price}
            </span>
            <span className={styles.discount}>
              {props.product.discount}% OFF
            </span>
          </div>
          <div className={styles.member}>
            <h6 className={styles.card_h6}>SÓCIO WINE</h6>
            <span className={styles.membre_price}>
              R$ {props.product.priceMember}
            </span>
          </div>
          <div className={styles.non_member}>
            <span className={styles.non_member_price}>
              NÃO SÓCIO R$ {props.product.priceNonMember}
            </span>
          </div>
        </a>
      </Link>
      <div className={styles.card_btn}>
        <button
          className={styles.btn_add}
          onClick={() => {
            handleClick(+props.product.id);
          }}
        >
          ADICIONAR
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

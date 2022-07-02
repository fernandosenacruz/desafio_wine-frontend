import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../context/context';
import styles from '../../styles/Details.module.css';

const Product = () => {
  const { product, products, storage, setStorage } =
    useContext(ProductsContext);
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
    <div className={styles.card__details}>
      <div className={styles.details__img}>
        <Image
          src={product.image}
          alt="imagem da garrafa de vinho"
          width="381px"
          height="579px"
        />
      </div>
      <div className={styles.details__info}>
        <div className={styles.country__info}>
          <h6 className={styles.info_h6}>Vinhos</h6>
          <Image
            src="/arrow.svg"
            alt="seta maior que"
            width="10px"
            height="5.59px"
          />
          <h6 className={styles.info_h6}>{product.country}</h6>
          <Image
            src="/arrow.svg"
            alt="seta maior que"
            width="10px"
            height="5.59px"
          />
          <h6 className={styles.info_h6_}>{product.region}</h6>
        </div>
        <h3 className={styles.details__name}>{product.name}</h3>
        <div>
          <Image
            src={product.flag}
            alt="bandeira do país de origem do vinho"
            width="16px"
            height="16px"
          />
          <span className={styles.more__info}>{product.country}</span>
          <span className={styles.more__info}>{product.type}</span>
          <span className={styles.more__info}>{product.classification}</span>
          <span className={styles.more__info}>{product.size}</span>
        </div>
        <div className={styles.details__price}>
          <span className={styles.price__member}>R$ {product.priceMember}</span>
          <span className={styles.price__non_member}>
            NÃO SÓCIO R$ {product.priceNonMember}/UN.
          </span>
        </div>
        <div>
          <h5>Comentário do Sommelier</h5>
          <p className={styles.details__p}>{product.sommelierComment}</p>
        </div>
        <div className={styles.details__btn}>
          <button
            className={styles.btn_}
            id={product.id}
            onClick={({ target }) => {
              handleDec(target);
            }}
          >
            -
          </button>
          <span className={styles.span}>{wineCounter}</span>
          <button
            className={styles.btn_}
            id={product.id}
            onClick={({ target }) => {
              handleInc(target);
            }}
          >
            +
          </button>
          <button
            className={styles.btn}
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

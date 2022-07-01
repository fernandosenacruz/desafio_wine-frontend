import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect } from 'react';
import { ProductsContext } from '../context/context';
import { IProductProps } from './Product';

const ProductCard = (props: IProductProps) => {
  const { product, setProduct } = useContext(ProductsContext);
  const { products, setProducts } = useContext(ProductsContext);

  const handleClick = ({ id }) => {
    const wine = products.items.find((product) => product.id === +id);

		const localProducts = JSON.parse(localStorage.getItem('cart'));

    localProducts
			? localStorage.setItem('cart', JSON.stringify([...localProducts, wine]))
			: localStorage.setItem('cart', JSON.stringify([wine]));
  };

	const ximira = (id) => {
		const wine = products.items.find((product) => product.id === +id);

		setProduct(wine)
	}

  useEffect(() => {
		localStorage.getItem('cart')
	}, []);

  return (
    <div>
			<Link href={`/wine/${props.product.id}`}>
				<a onClick={() => ximira(props.product.id)}>
					<div>
						<Image
							src={props.product.image}
							alt="imagem da garrafa de vinho"
							width="381px"
							height="579px"
						/>
						<h6>{props.product.name}</h6>
					</div>
					<div></div>
					<div>
						<span style={{ textDecoration: 'line-through' }}>
							R$ {props.product.price}
						</span>
						<span>{props.product.discount}% OFF</span>
					</div>
					<div>
						<span>SÓCIO WINE R$ {props.product.priceMember}</span>
						<span>NÃO SÓCIO R$ {props.product.priceNonMember}</span>
					</div>
				</a>
			</Link>
      <div>
        <button
          id={props.product.id}
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

export default ProductCard;

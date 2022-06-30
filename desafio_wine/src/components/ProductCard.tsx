import Image from "next/image";
import { IProductProps } from "./Product";

const ProductCard = (props: IProductProps) => {
    return (
        <div>
            <div>
                <Image 
                    src={props.product.image}
                    alt="imagem da garrafa de vinho"
                    width="381px"
                    height="579px"
                />
              <h6>{props.product.name}</h6>
            </div>
            <div>
                
            </div>
            <div>
                <span
                style={{textDecoration: "line-through"}}
                >
                    R$ {props.product.price}
                </span>
                <span>{props.product.discount}% OFF</span>
            </div>
            <div>
                <span>SÓCIO WINE R$ {props.product.priceMember}</span>
                <span>NÃO SÓCIO R$ {props.product.priceNonMember}</span>
            </div>
            <div>
                <button
                    data-item-id={props.product.id}
                    data-item-name={props.product.name}
                    data-item-price={props.product.price}
                    data-item-image={props.product.image}>
                    Adicionar
                </button>
            </div>
        </div>
    )
}

export default ProductCard

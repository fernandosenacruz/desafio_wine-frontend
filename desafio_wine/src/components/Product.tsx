import Image from "next/image"

export interface IProduct {
    avaliations: number
    classification: string
    country: string
    discount: number
    flag: string
    id: number
    image: string
    name: string
    price: number
    priceMember: number
    priceNonMember: number
    rating: number
    region: string
    size: string
    sommelierComment: string
    type: string
}

interface IProductProps {
    product: IProduct
}

const Product = (props: IProductProps) => {
    return (
        <div className=''>
            <h3 
                // className={styles.product__title}
            >{props.product.name}</h3>
            <div>
                <img
                    src={props.product.flag}
                    alt="country flag"
                    style={{ width: '10px', height: '10px'}}
                />
                <span>{props.product.country}</span>
                <span>{props.product.type}</span>
                <span>{props.product.classification}</span>
                <span>{props.product.size}</span>
            </div>
            <div 
                // className={styles.product__image}
            >
                <img src={props.product.image} alt={props.product.image} />
            </div>
            <div>
                <h3>Descrição</h3>
                <p 
                    // className={styles.product__description}
                >{props.product.sommelierComment}</p>
            </div>
            <div>
                <span>{props.product.discount}% OFF</span>
                <span>R$ {props.product.price}</span>
                <span>R$ {props.product.priceMember}</span>
                <span>PREÇO NÃO SÓCIO R$ {props.product.priceNonMember}</span>
            </div>
            <div className="product__price-button-container">
                <button
                    // className={`snipcart-add-item ${styles.product__button}`}
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

export default Product

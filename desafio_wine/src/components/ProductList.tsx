import {IProduct} from "./Product"
import ProductCard from "./ProductCard"

interface IProductListProps {
    products: IProduct[]
}

const ProductList = (props: IProductListProps) => {
    return (
        <div className="product-list">
            {props.products.map((product, index) => <ProductCard product={product} key={index}/>)}
        </div>
    )
}

export default ProductList

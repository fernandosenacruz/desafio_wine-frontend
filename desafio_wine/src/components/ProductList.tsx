import { useEffect, useState } from "react";
import { Http } from "../http/api";
import Product, {IProduct} from "./Product";

interface IProductListProps {
    products: IProduct[]
}

const ProductList = (props: IProductListProps) => {
    return (
        <div className="product-list">
            {props.products.map((product, index) => <Product product={product} key={index}/>)}
        </div>
    )
}

export default ProductList

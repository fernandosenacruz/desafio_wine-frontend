import { useEffect, useState } from "react";
import { Http } from "../http/api";
import Product, {IProduct} from "./Product";

interface IProductListProps {
    products: IProduct[]
}

const ProductList = (props: IProductListProps) => {
    const [products, setProducts] = useState({})

    const getProducts = async () => {
        try {
            const response = await Http.get(
                'products?page=1&limit=10'
            )
            console.log(response.data)
            setProducts(response.data)
        } catch (error) {
           console.log(error) 
        }
    }

    useEffect(() => {
        getProducts()
    },[])

    return (
        <div className="product-list">
            {props.products.map((product, index) => <Product product={product} key={index}/>)}
        </div>
    )
}

export default ProductList

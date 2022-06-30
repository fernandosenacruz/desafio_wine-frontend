import { useState } from "react"
import {IProduct} from "./Product"
import ProductCard from "./ProductCard"

interface IProductListProps {
    products: IProduct[]
}

const ProductList = (props: IProductListProps) => {
    const [filter, setFilter] = useState("");
    
    console.log(filter)
    return (
        <>
            <nav>
                <h4>Refine sua busca</h4>
                <h6>Por preço</h6>
                <div>
                    <label htmlFor="40" onClick={() => setFilter("40")}>
                        <input
                            id="40"
                            type="radio"
                            name="40"
                            value={filter}
                            checked={filter === "40"}
                        /> Até R$ 40
                    </label>
                    <label htmlFor="60" onClick={() => setFilter("60")}>
                        <input
                            id="60"
                            type="radio"
                            name="60"
                            value={filter}
                            checked={filter === "60"}
                        /> R$ 40 A R$ 60
                    </label>
                    <label htmlFor="100" onClick={() => setFilter("100")}>
                        <input
                            id="100"
                            type="radio"
                            name="100"
                            value={filter}
                            checked={filter === "100"}
                        /> R$ 100 A R$ 200
                    </label>
                    <label htmlFor="200" onClick={() => setFilter("200")}>
                        <input
                            id="200"
                            type="radio"
                            name="200"
                            value={filter}
                            checked={filter === "200"}
                        /> R$ 200 A R$ 500
                    </label><label htmlFor="500" onClick={() => setFilter("500")}>
                        <input
                            id="500"
                            type="radio"
                            name="500"
                            value={filter}
                            checked={filter === "500"}
                        /> Acima de R$ 500
                    </label>
                </div>
            </nav>
            <div>
                <span>{props.products.length} produtos encontrados</span>
                <div className="product-list">
                    {props.products.map((product, index) => <ProductCard product={product} key={index}/>)}
                </div>
            </div>
        </>
    )
}

export default ProductList

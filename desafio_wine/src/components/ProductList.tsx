import { useEffect, useState } from "react"
import { Http } from "../http/api"
import {IProduct} from "./Product"
import ProductCard from "./ProductCard"

interface IProductListProps {
    products: IProduct[]
}

const ProductList = ({products}: IProductListProps) => {
    const [filter, setFilter] = useState(0);
    const [filtered, setFiltered] = useState([]);

    const getFilteredProducts = async (price: Number) => {
        try {
            const { data } = await Http.get(
            'products'
            )
            
            let filteredProducts = [];

            if (price === 40) {
                filteredProducts = data.items
                    .filter((product: IProduct) => product.priceNonMember <= price);
            } else if (price === 60) {
                filteredProducts = data.items
                    .filter((product: IProduct) =>
                        product.priceNonMember > 40
                        && product.priceNonMember <= 60);
            } else if (price === 100) {
                filteredProducts = data.items
                    .filter((product: IProduct) =>
                        product.priceNonMember > 100
                        && product.priceNonMember <= 200);
            } else if (price === 200) {
                filteredProducts = data.items
                    .filter((product: IProduct) =>
                        product.priceNonMember > 200
                        && product.priceNonMember <= 500);
            } else if (price === 500) {
                filteredProducts = data.items
                    .filter((product: IProduct) => product.priceNonMember > price);
            } else {
                console.log("no filter");
            }

            setFiltered(filteredProducts);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getFilteredProducts(filter);
    },[filter]);

    return (
        <>
            <nav>
                <h4>Refine sua busca</h4>
                <h6>Por preço</h6>
                <div>
                    <label htmlFor="40" onClick={() => setFilter(40)}>
                        <input
                            id="40"
                            type="radio"
                            name="40"
                            value={filter}
                            checked={filter === 40}
                        /> Até R$ 40
                    </label>
                    <label htmlFor="60" onClick={() => setFilter(60)}>
                        <input
                            id="60"
                            type="radio"
                            name="60"
                            value={filter}
                            checked={filter === 60}
                        /> R$ 40 A R$ 60
                    </label>
                    <label htmlFor="100" onClick={() => setFilter(100)}>
                        <input
                            id="100"
                            type="radio"
                            name="100"
                            value={filter}
                            checked={filter === 100}
                        /> R$ 100 A R$ 200
                    </label>
                    <label htmlFor="200" onClick={() => setFilter(200)}>
                        <input
                            id="200"
                            type="radio"
                            name="200"
                            value={filter}
                            checked={filter === 200}
                        /> R$ 200 A R$ 500
                    </label><label htmlFor="500" onClick={() => setFilter(500)}>
                        <input
                            id="500"
                            type="radio"
                            name="500"
                            value={filter}
                            checked={filter === 500}
                        /> Acima de R$ 500
                    </label>
                </div>
            </nav>
            <div>
                <span>
                    { filter === 0 
                        ? products.totalItems
                        : filtered.length
                    } produtos encontrados</span>
                <div className="product-list">
                    { filter === 0
                        ? products.items.map((product, index) =>
                            <ProductCard product={product} key={index}/>)
                        : filtered.map((product, index) =>
                            <ProductCard product={product} key={index}/>)
                    }
                </div>
                <div>
                    {}
                </div>
            </div>
        </>
    )
}

export default ProductList

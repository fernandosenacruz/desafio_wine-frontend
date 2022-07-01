import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../context/context';
import { Http } from '../http/api';
import { IProduct } from './Product';
import ProductCard from './ProductCard';

interface IProductListProps {
  products: IProduct[];
}

const ProductList = () => {
  const [filter, setFilter] = useState<
    { minPrice: number; maxPrice: number } | undefined
  >();
  const { products, setProducts } = useContext(ProductsContext);

  const getProducts = async () => {
    try {
      const { data } = await Http.get(
        `products?page=1&limit=9${
          filter ? `&filter=${filter.minPrice}-${filter.maxPrice}` : ''
        }
        `
      );

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [filter]);

  return (
    <>
      <nav>
        <h4>Refine sua busca</h4>
        <h6>Por preço</h6>
        <div>
          <label
            htmlFor="40"
            onClick={() => setFilter({ minPrice: 0, maxPrice: 40 })}
          >
            <input
              id="40"
              type="radio"
              name="40"
              checked={filter?.maxPrice === 40}
            />{' '}
            Até R$ 40
          </label>
          <label
            htmlFor="60"
            onClick={() => setFilter({ minPrice: 40, maxPrice: 60 })}
          >
            <input
              id="60"
              type="radio"
              name="60"
              checked={filter?.maxPrice === 60}
            />{' '}
            R$ 40 A R$ 60
          </label>
          <label
            htmlFor="100"
            onClick={() => setFilter({ minPrice: 100, maxPrice: 200 })}
          >
            <input
              id="100"
              type="radio"
              name="100"
              checked={filter?.maxPrice === 200}
            />{' '}
            R$ 100 A R$ 200
          </label>
          <label
            htmlFor="200"
            onClick={() => setFilter({ minPrice: 200, maxPrice: 500 })}
          >
            <input
              id="200"
              type="radio"
              name="200"
              checked={filter?.maxPrice === 500}
            />{' '}
            R$ 200 A R$ 500
          </label>
          <label
            htmlFor="500"
            onClick={() => setFilter({ minPrice: 500, maxPrice: 10000 })}
          >
            <input
              id="500"
              type="radio"
              name="500"
              checked={filter?.maxPrice === 10000}
            />{' '}
            Acima de R$ 500
          </label>
        </div>
      </nav>
      <div>
        <span>{products?.totalItems} produtos encontrados</span>
        <div className="product-list">
          {products?.items?.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
        <div>{}</div>
      </div>
    </>
  );
};

export default ProductList;

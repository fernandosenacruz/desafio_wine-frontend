import { useRouter } from "next/router";
import Product from "../../../components/Product";

const Wine = () => {
  const { query: { id } } = useRouter();

  return (
    <Product />
  )
}

export default Wine;

import { useRouter } from "next/router";
import Product from "../../../components/Product";

const Wine = () => {
  const { query: { id } } = useRouter();
  console.log(id)
  return (
    <h1>WINE</h1>
  )
}

export default Wine;

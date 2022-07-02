import Link from "next/link";
import Product from "../../../components/Product";

const Wine = () => {
  return (
    <>
      <Link href="/">
        <a>
          <img 
            src="/voltar.svg"
            alt="ícone de voltar"
            width="53px"
            height="24px"  
          />
        </a>
      </Link>
      <Product />
    </>
  )
}

export default Wine;

import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import ProductList from '../components/ProductList'
import { IProduct } from '../components/Product'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Desafio Frontend Wine</title>
      </Head>

      <main className="main">
        <ProductList products={products}/>
      </main>
      
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            products
        }
    }
}

export const products: IProduct[] = [
    {
      avaliations: 4,
      rating: 4,
      classification: "Seco",
      country: "Chile",
      discount: 31,
      flag: "https://img.wine.com.br/fenix/image/flags/rounded/chile.svg",
      id: 3,
      image: "https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/19252-01.png",
      name: "Canepa Novísimo Cabernet Sauvignon 2017",
      price: 241.9,
      priceMember: 166.55,
      priceNonMember: 195.94,
      region: "Valle Central",
      sommelierComment: "Jovem e com um estilo que agrada com facilidade, esse versátil rótulo pode ser degustado sozinho ou harmonizado com receitas do dia a dia. A Viña Canepa, fundada no Chile por imigrantes italianos, iniciou a produção da linha Novísimo nos anos 80.",
      type: "Tinto",
      size: "750 ml",
    },
    {
      avaliations: 292,
      classification: "Seco",
      country: "Portugal",
      discount: 45,
      flag: "https://img.wine.com.br/fenix/image/flags/rounded/portugal.svg",
      id: 0,
      image: "https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/19694-01.png",
      name: "Bacalhôa Quinta da Garrida Colheita Selecionada 2015",
      price: 175.9,
      priceMember: 96.9,
      priceNonMember: 114,
      rating: 4,
      region: "Dão",
      size: "750 ml",
      sommelierComment: "Esse tinto traz em seu assemblage a Touriga Nacional, uma das uvas tintas portuguesas mais conhecidas no mundo do vinho. Nativa do Dão, região produtora desse vinho, essa variedade atinge a sua expressão máxima nesse terroir. O termo Colheita Selecionada estampado no rótulo, é uma referência a qualidade da safra 2015.",
      type: "Tinto",
    }
]

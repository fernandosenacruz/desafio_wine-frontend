import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import ProductList from '../components/ProductList'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Desafio Frontend Wine</title>
      </Head>

      <main className="main">
        <ProductList/>
      </main>
      
    </div>
  )
}

export default Home

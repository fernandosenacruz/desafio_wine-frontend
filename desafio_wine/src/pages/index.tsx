import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import ProductList from '../components/ProductList'

const Home: NextPage = (props) => {
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

// export const getServerSideProps: GetStaticProps = async ({ query }) => {
//   console.log(query)
//   try {
//     const { data } = await Http.get(
//       'products?page=1&limit=10'
//     )
//     return {
//         props: {
//             products: data
//         }
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }

export default Home

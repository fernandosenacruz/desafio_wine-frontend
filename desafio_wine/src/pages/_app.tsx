import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import ProductsProvider from '../context/context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProductsProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProductsProvider>
  )
}

export default MyApp

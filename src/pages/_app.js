import '@/styles/globals.css'
import Layout from '../../components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      {/* so basically we are wrapping the app.js page with the layout we want to have in each pages as the 
      app.js is responsible for all the pages to be rendered in the browser under the hood
      all the pages in the browser will have same layout it is the advantage of using next. */}
      <Component {...pageProps} />
    </Layout>
  )
}

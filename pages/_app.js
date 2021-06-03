import { ThemeProvider } from 'theme-ui'
import theme from '../theme';

import Layout from '../components/layout';
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (

    <Layout>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Layout>


  )
}

export default MyApp

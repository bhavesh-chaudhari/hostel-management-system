import styles from "../styles/globals.scss"
import PageLayout from '../layouts/PageLayout'



function MyApp({ Component, pageProps }) {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
}

export default MyApp

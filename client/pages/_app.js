import styles from "../styles/globals.scss"
import PageLayout from '../layouts/PageLayout'
import SideBarPageLayout from "../layouts/SideBarPageLayout";
import { useRouter } from "next/router";


const navbarPaths = ["/", "/login", "/signup", "/gallery"];

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  
  return (
    <>
      {navbarPaths.includes(router.pathname) ? (
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      ) : (
        <SideBarPageLayout>
          <Component {...pageProps} />
        </SideBarPageLayout>
      )}
    </>
  );
}

export default MyApp

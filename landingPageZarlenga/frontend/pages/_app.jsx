import Layout from "../components/Layout";
import "../styles/form.css";
import "../styles/globalStyles.css"
export function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;

import Layout from "../components/Layout";
import "../styles/form.css";
import "../styles/globalStyles.css";
import PropTypes from "prop-types";
export function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;

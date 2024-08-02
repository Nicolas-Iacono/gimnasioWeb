import React from "react";
import Header from "./Header";
import WhatsAppContact from "./WhatsAppContact";
import PropTypes from "prop-types";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <WhatsAppContact />
    </>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;

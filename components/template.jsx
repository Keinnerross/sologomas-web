import styles from "../styles/template.module.css";

import Nav from "./nav";
import Footer from "./footer";
const Template = ({ children }) => {
  return (
    <>
      <Nav />

      <div className={styles.templateContainer}>{children}</div>
      <Footer />
    </>
  );
};

export default Template;

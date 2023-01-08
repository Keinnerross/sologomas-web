import Nav from "./nav";
import Footer from "./footer";
const Template = ({ children }) => {
  return (
    <>
      
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Template;

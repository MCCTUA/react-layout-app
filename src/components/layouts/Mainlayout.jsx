import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const Mainlayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Mainlayout;

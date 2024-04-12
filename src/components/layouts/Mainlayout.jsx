import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const Mainlayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
};

export default Mainlayout;

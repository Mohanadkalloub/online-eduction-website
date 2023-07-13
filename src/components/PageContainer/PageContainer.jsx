import Footer from "../Footer/Footer";
import Header from "../Header/Header";

// import { Header, Footer } from "../../components";
const PageContainer = ({ children }) => {
  return (
    <div className="container">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default PageContainer;

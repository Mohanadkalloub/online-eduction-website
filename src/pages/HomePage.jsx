import PageContainer from "../components/PageContainer/PageContainer";
import HomePageImage from "../assets/images/home-img.svg";
import { NavLink } from "react-router-dom";
const HomePage = () => {
  return (
    <PageContainer>
      <section className="home">
        <div className="content">
          <h3>e-learning is a better way of learning</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus eius
            laborum nulla dolore temporibus perferendis beatae sit recusandae
            corrupti inventore!
          </p>
          <NavLink href="#" className="btn">
            get started
          </NavLink>
        </div>
        <div className="image">
          <img src={HomePageImage} alt="" />
        </div>
      </section>
    </PageContainer>
  );
};
export default HomePage;

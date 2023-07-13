import { Fragment } from "react";
import PageContainer from "../components/PageContainer/PageContainer";
import ContactImage from "../assets/images/contact-img.svg";
const ContactPage = () => {
  return (
    <PageContainer>
      <Fragment>
        <section className="contact">
          <div className="images">
            <img src={ContactImage} alt="" />
          </div>
          <form action="">
            <div className="input-box">
              <input type="text" placeholder="name" />
              <input type="email" placeholder="email" />
            </div>
            <input type="text" placeholder="subject" className="box" />
            <textarea
              placeholder="message"
              name=""
              id=""
              cols="30"
              rows="10"></textarea>
            <input type="submit" className="btn" value="send" />
          </form>
        </section>
      </Fragment>
    </PageContainer>
  );
};
export default ContactPage;

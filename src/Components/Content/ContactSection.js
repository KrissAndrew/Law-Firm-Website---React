import classes from "./ContactSection.module.css";
import { Parallax, Background } from "react-parallax";

import ContactForm from "./ContactForm";

import bg1 from "../../assets//artisticBuildingImage.png";

const FormSection = () => {
  return (
    <Parallax strength={500}>
      <Background className={classes.Back}>
        <img src={bg1} alt="city" />
      </Background>
      <div className={classes.FormSection} id="contact">
        <div className={classes.Heading}>
          <div className={classes.HeadText}>Contact Kriss & Andrew</div>
        </div>
        <div className={classes.Contact}>
          <div className={classes.ContactText}>
            <b>Our Address</b>
            <br />
            500 Queen St.Brisbane, QLD 1234
            <br />
            <b>Email: </b>K&ALaw@gmail.com
            <br />
            <b>Tel: </b>0-123-456-789
          </div>
          <ContactForm />
        </div>
      </div>
    </Parallax>
  );
};

export default FormSection;

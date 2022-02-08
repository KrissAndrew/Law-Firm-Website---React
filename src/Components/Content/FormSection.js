import classes from "./FormSection.module.css";
import { Parallax, Background } from "react-parallax";

const bg1 =
  "https://images.unsplash.com/photo-1461695008884-244cb4543d74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2831&q=80";

const FormSection = () => {
  return (
    <Parallax strength={500}>
      <Background className={classes.Back}>
        <img src={bg1} alt="city" />
      </Background>
      <div className={classes.FormSection}>
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
        </div>
        <div className={classes.FormSection}></div>
      </div>
    </Parallax>
  );
};

export default FormSection;

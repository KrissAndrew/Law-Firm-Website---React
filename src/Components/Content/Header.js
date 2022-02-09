import classes from "./Header.module.css";
import { Parallax } from "react-parallax";

import bg1 from "../../assets//brisbaneCity.png";

const Header = () => {
  return (
    <Parallax
      strength={500}
      bgImage={bg1}
      bgImageStyle={{
        marginTop: "4.25rem",
        maxHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <header className={classes.HeaderContainer}>
        <div className={classes.Header}>
          <div className={classes.HeadText}>
            <div className={classes.Heading}>
              Boutique
              <br />
              <span className={classes.HeadingLower}>Law Firm</span>
            </div>
            <p>
              Specializing in Commercial Law & Litigation, Insolvency & Fraud
            </p>
          </div>
        </div>
      </header>
    </Parallax>
  );
};

export default Header;

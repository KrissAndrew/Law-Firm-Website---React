import classes from "./Header.module.css";
import { Parallax, Background } from "react-parallax";

const bg1 =
  "https://images.unsplash.com/photo-1566734904496-9309bb1798ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80";

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

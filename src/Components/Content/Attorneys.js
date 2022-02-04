import classes from "./Attorneys.module.css";

const partnerImg1 =
  "https://static.wixstatic.com/media/5bfb6f_5577b01919214f47ad5236247965ec04.jpg/v1/fill/w_386,h_440,al_c,q_80,usm_0.66_1.00_0.01/5bfb6f_5577b01919214f47ad5236247965ec04.webp";
const partnerImg2 =
  "https://static.wixstatic.com/media/5bfb6f_60ff20475dbc447f92c81fdcc6a6a7c1.jpg/v1/fill/w_386,h_440,al_c,q_80,usm_0.66_1.00_0.01/5bfb6f_60ff20475dbc447f92c81fdcc6a6a7c1.webp";
const partnerImg3 =
  "https://static.wixstatic.com/media/5bfb6f_1cafad56984b4997bd73792b008c6fc3.jpg/v1/fill/w_386,h_440,al_c,q_80,usm_0.66_1.00_0.01/5bfb6f_1cafad56984b4997bd73792b008c6fc3.webp";

const Attorneys = () => {
  return (
    <section className={classes.Attorneys}>
      <div className={classes.Heading}>Our Attorneys</div>
      <div className={classes.AttorneyInfo}>
        <div className={classes.Attorney}>
          <img src={partnerImg1} alt="Headshot" />
          <div className={classes.Info}>
            <div className={classes.Name}>Kriss Andrew</div>
            <div className={classes.Position}>Partner</div>
            <div className={classes.Contact}>
              Tel: 123-456-7890 info@mysite.com
            </div>
          </div>
        </div>

        <div className={classes.Attorney}>
          <img src={partnerImg2} alt="Headshot" />
          <div className={classes.Info}>
            <div className={classes.Name}>Christina Andreas</div>
            <div className={classes.Position}>Partner</div>
            <div className={classes.Contact}>
              Tel: 123-456-7890 info@mysite.com
            </div>
          </div>
        </div>

        <div className={classes.Attorney}>
          <img src={partnerImg3} alt="Headshot" />
          <div className={classes.Info}>
            <div className={classes.Name}>Christopher Anderson</div>
            <div className={classes.Position}>Partner</div>
            <div className={classes.Contact}>
              Tel: 123-456-7890 info@mysite.com
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Attorneys;

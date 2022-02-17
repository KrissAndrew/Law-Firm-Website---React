import { useState, useRef, useEffect } from "react";

import classes from "./ContactSection.module.css";
import { Parallax, Background } from "react-parallax";

import ContactForm from "./ContactForm";

import bg1 from "../../assets//artisticBuildingImage.png";

const FormSection = () => {
  const [mapIsShowing, setMapIsShowing] = useState(false);

  const showMapHandler = () => {
    setMapIsShowing(true);
  };

  const hideMapHandler = () => {
    setMapIsShowing(false);
  };

  const mapRef = useRef();

  // center and zoom have no value upon initial rendering so useEffect creates a new map item with valid values when they change (upon a location being clicked)

  useEffect(() => {
    if (mapIsShowing) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: -27.4640342, lng: 153.0290105 },
        zoom: 16,
      });

      // create a marker for the map
      new window.google.maps.Marker({
        position: { lat: -27.4640342, lng: 153.0290105 },
        map: map,
      });
    }
  }, [mapIsShowing]);

  return (
    <Parallax strength={500}>
      <Background className={classes.Back}>
        <img src={bg1} alt="city" />
      </Background>

      {!mapIsShowing && (
        <div className={classes.contactSection} id="contact">
          <div className={classes.heading}>
            <div className={classes.headText}>Contact Kriss & Andrew</div>
          </div>
          <div className={classes.contactInfo}>
            <div className={classes.contactText}>
              <b>Our Address</b>
              <br />
              500 Queen St.Brisbane, QLD 1234
              <br />
              <b>Email: </b>K&ALaw@gmail.com
              <br />
              <b>Tel: </b>0-123-456-789
            </div>
            <div onClick={showMapHandler} className={classes.location}>
              Click Here to View Location
            </div>
            <ContactForm />
          </div>
        </div>
      )}
      {mapIsShowing && (
        <div className={classes.contactSectionMap} id="contact">
          <div className={classes.mapContainer}>
            <div onClick={hideMapHandler} className={classes.location}>
              Return to contact
            </div>
            <div className={classes.map} ref={mapRef}></div>
          </div>
        </div>
      )}
    </Parallax>
  );
};

export default FormSection;

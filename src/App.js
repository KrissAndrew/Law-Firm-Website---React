import NavBar from "./Components/NavBar";
import Header from "./Components/Content/Header";
import { Parallax } from "react-parallax";
import PracticeArea from "./Components/Content/PracticeAreas";
import Vision from "./Components/Content/Vision";
import Attorneys from "./Components/Content/Attorneys";

import meetingImg from "./assets//meetingimg.png";
import ContactSection from "./Components/Content/ContactSection";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <PracticeArea />
      <Vision />
      <Parallax
        bgImage={meetingImg}
        bgImageStyle={{
          maxHeight: "100vh",
          minWidth: "100vw",
        }}
        bgImageAlt="Business people doing business things"
        strength={500}
      >
        <div style={{ height: "80vh" }}></div>
      </Parallax>
      <Attorneys />
      <ContactSection />
    </>
  );
}

export default App;

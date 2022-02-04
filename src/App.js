import NavBar from "./Components/NavBar";
import Header from "./Components/Content/Header";
import { Parallax } from "react-parallax";
import PracticeArea from "./Components/Content/PracticeAreas";
import Vision from "./Components/Content/Vision";
import Attorneys from "./Components/Content/Attorneys";

import meetingImg from ".//meetingimg.jpg";
import FormSection from "./Components/Content/FormSection";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <PracticeArea />
      <Vision />
      <Parallax
        blur={1}
        bgImage={meetingImg}
        bgImageAlt="Business people doing business things"
        strength={500}
      >
        <div style={{ height: "80vh" }}></div>
      </Parallax>
      <Attorneys />
      <FormSection />
    </div>
  );
}

export default App;

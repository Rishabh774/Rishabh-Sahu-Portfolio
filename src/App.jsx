
import Contact from "./component/Contact"
import Navbar from "./component/Navbar";
import About from "./component/About";
import Skills from "./component/Skills";

import Work from "./component/Work";
import Education from "./component/Education";
import Footer from "./component/Footer";
import BlurBlob from "./component/BlurBlob";

const App = () => {
  return (
    <>
     

      <div className="relative min-h-screen bg-[#050414] overflow-hidden">
        {/* Background Effects */}
        <BlurBlob
          position={{ top: "35%", left: "20%" }}
          size={{ width: "30%", height: "40%" }}
        />

        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Main Content */}
        <div className="relative z-10 pt-20">
          <Navbar />
          <About />
          <Skills />
         
          <Work />
          <Education />
          <Contact/>
          <Footer />
        </div>
      </div>
    </>
  );
};
export default App;
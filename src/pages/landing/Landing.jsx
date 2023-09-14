import React from "react";
import Section1 from "../../components/landingComponents/section1/Section1";
import Section2 from "../../components/landingComponents/section2/Section2.jsx";
import Section3 from "../../components/landingComponents/section3/Section3";
import Section4 from "../../components/landingComponents/section4/Section4";

import Section6 from "../../components/landingComponents/section6/Section6";
import Section7 from "../../components/landingComponents/section7/Section7";
import Footer from "../../components/landingComponents/footer/Footer";

const Landing = () => {
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section6 />
      <Section7 />
      <Footer />
    </div>
  );
};

export default Landing;

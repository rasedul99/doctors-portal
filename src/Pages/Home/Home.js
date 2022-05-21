import React from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import Footer from "./Footer";
import Info from "./Info";
import MakeAppoinment from "./MakeAppoinment";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="px-12">
      <Banner />
      <Info />
      <Services />
      <MakeAppoinment />
      <Testimonials />
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;

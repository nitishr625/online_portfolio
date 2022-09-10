import "./App.css";

import React from "react";
import About from "./Components/About/About";
import Contact from "./Components/Contacts/Contact";
import Experience from "./Components/Experience/Experience";
import Testimonals from "./Components/Testimonials/Testimonials";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Projects from "./Components/Projects/Projects";
import Services from "./Components/Services/Services";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Projects />
      {/* <Testimonals /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;

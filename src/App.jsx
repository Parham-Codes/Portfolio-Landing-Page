import { useState } from "react";
import Header from "./components/header/header";
import About from "./components/about/about";
import Services from "./components/services/services";
import Blog from "./components/blog/blog";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Header
        title="Website"
        p1="Home"
        p2="About"
        p3="Services"
        p4="Blog"
        name="Parham"
        last="Taghikhani"
      />

      <About src="./asset/img/about.jpg" alt="Parham" />

      <Services />

      <Blog />

      <Footer website="Parham Taghikhani" />
    </>
  );
}

export default App;

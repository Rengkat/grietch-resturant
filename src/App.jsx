import { useRef } from "react";
import AboutUs from "./Components/aboutUs";
import Chef from "./Components/chef";
import Contact from "./Components/contact";
import Footer from "./Components/footer";
import Hero from "./Components/hero";
import InstagramGallary from "./Components/instagramGallary";
import Laurels from "./Components/laurels";
import Menu from "./Components/menu";
import NavBar from "./Components/navBar";
import Video from "./Components/video";

function App() {
  const aboutUs = useRef(null);
  const menu = useRef(null);
  const award = useRef(null);
  const chef = useRef(null);
  const scrollSection = (scrolElel) => {
    window.scrollTo({
      top: scrolElel.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="App">
      <NavBar aboutUs={aboutUs} scrollSection={scrollSection} menu={menu} />
      <Hero />
      <AboutUs aboutUs={aboutUs} scrollSection={scrollSection} />
      <Menu menu={menu} scrollSection={scrollSection} />
      <Chef scrollSection={scrollSection} chef={chef} />
      <Video />
      <Laurels award={award} scrollSection={scrollSection} />
      <InstagramGallary />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

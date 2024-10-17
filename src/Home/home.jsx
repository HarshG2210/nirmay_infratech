import Navbar from "../components/Navbar/Navbar";
import Slider from "../components/Slider/slider";
import About from "../components/About/About";
import AllProjects from "../components/All Projects/allProjects";
import ContactUs from "../components/Contact Us/ContactUs";
import Footer from "../components/Footer/Footer";
import { Box } from "@chakra-ui/react";

function Home() {
  return (
    <Box>
      {/* Navbar */}
      <Navbar />

      {/* Slider */}
      <Slider />

      {/* About section */}
      <About />

      {/* All Projects */}
      <AllProjects />

      {/* Contact Us */}
      <ContactUs />

      {/* Footer */}
      <Footer />
    </Box>
  );
}

export default Home;

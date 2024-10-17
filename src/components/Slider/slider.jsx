import { Box, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import img1 from "../../assets/img1.webp";
import img2 from "../../assets/img2.webp";
import img3 from "../../assets/img3.webp";
import "slick-carousel/slick/slick.css"; // Import Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import Slick theme CSS
import { useMediaQueryContext } from "../../context/MediaQueryContext";

function ImageSlider() {
  const { isMobile } = useMediaQueryContext(); // Use both mobile and tablet queries

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <Box width="100%">
      {/* Full width for the slider */}
      <Slider {...settings}>
        <Box>
          <Image
            src={img1}
            alt="Property 1"
            width="100%"
            height={isMobile ? "500px" : "600px"}
            objectFit="fill"
          />
        </Box>
        <Box>
          <Image
            src={img2}
            alt="Property 2"
            width="100%"
            height={isMobile ? "500px" : "600px"}
            objectFit="fill"
          />
        </Box>
        <Box>
          <Image
            src={img3}
            alt="Property 3"
            width="100%"
            height={isMobile ? "500px" : "600px"}
            objectFit="fill"
          />
        </Box>
      </Slider>
    </Box>
  );
}

export default ImageSlider;

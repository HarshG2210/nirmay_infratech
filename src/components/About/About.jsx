import { Box, Heading, Text, Grid, GridItem, Image } from "@chakra-ui/react";
import aboutUs from "../../assets/aboutus.webp"; // Replace with your actual image import
import { useMediaQueryContext } from "../../context/MediaQueryContext";

function About() {
  const { isMobile } = useMediaQueryContext();

  return (
    <Box
      minH="100vh"
      bg="gray.900" // Dark background
      color="white" // White text
      p={isMobile ? 3 : 8}
      mt={10}
    >
      {/* Main Content: About Section */}
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }} // Stack on mobile, side by side on desktop
        gap={0}
      >
        {/* Left: Description */}
        <Box p={{ base: 4, md: 8 }} display="flex" alignItems="center">
          <Box>
            <Heading mb={4} fontSize="3xl" color="white">
              About Us
            </Heading>
            <Heading mb={4} fontSize="xl" color="gray.300">
              Nirmay Infratech
            </Heading>
            <Text fontSize="md" lineHeight="tall">
              Nirmay Infratech is a 5 years 3 months old Proprietorship Firm
              incorporated on 21-Jun-2019, having its registered office located
              at Saibaba Apartment, Flat No. 201 Second Floor, Near Mahatme Eye
              Hospital, Wardha Road Chhatrapati Square, Nagpur, Maharashtra. The
              major activity of Nirmay Infratech is Manufacturing,
              Sub-classified into Construction of buildings and is primarily
              engaged in the construction of buildings carried out on own
              account basis or on a fee or contract basis. Nirmay Infratech is
              classified as a Micro enterprise in the financial year 2023-24 and
              is located in Nagpur, Maharashtra.
            </Text>
          </Box>
        </Box>

        {/* Right: Image */}
        <Box>
          <Image
            src={aboutUs} // Replace with your image path
            alt="Nirmay Infratech"
            objectFit="fill"
            w="100%" // Full width
            h={isMobile ? "50vh" : "100vh"} // Full height
          />
        </Box>
      </Grid>

      {/* Grid Layout for Stats Section */}
      <Box bg="#CBD5E0" color="blue.900" py={10} mt={10}>
        <Grid
          templateColumns={{ base: "1fr 1fr", md: "repeat(4, 1fr)" }} // Responsive layout for stats
          gap={6}
          textAlign="center"
          alignItems="center"
        >
          {/* Year Established */}
          <GridItem>
            <Heading fontSize="4xl">0</Heading>
            <Text fontSize="lg">Year Established</Text>
          </GridItem>

          {/* Projects Completed */}
          <GridItem>
            <Heading fontSize="4xl">0</Heading>
            <Text fontSize="lg">Projects Completed</Text>
          </GridItem>

          {/* Contractors Appointed */}
          <GridItem>
            <Heading fontSize="4xl">0</Heading>
            <Text fontSize="lg">Contractors Appointed</Text>
          </GridItem>

          {/* Awards Won */}
          <GridItem>
            <Heading fontSize="4xl">0</Heading>
            <Text fontSize="lg">Awards Won</Text>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}

export default About;

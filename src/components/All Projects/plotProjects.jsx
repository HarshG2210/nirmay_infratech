import { Box, Grid, Heading, Image } from "@chakra-ui/react";
import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.jpg";
import project3 from "../../assets/project3.jpg";
import project4 from "../../assets/project4.jpg";
import project5 from "../../assets/project5.jpg";

function PlotProjects() {
  return (
    <Box bg="gray.900" p={8} color="white" minH="100vh">
      <Heading textAlign="center" mb={8} fontSize="3xl">
        Plot Projects
      </Heading>

      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 2fr" }} // Stacks on mobile, grid on larger screens
        gap={8}
      >
        {/* Left Column: Image Grid and Social Icons */}
        <Box>
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            <Image
              src={project1}
              alt="Project 1"
              borderRadius="md"
              objectFit="cover"
            />
            <Image
              src={project2}
              alt="Project 2"
              borderRadius="md"
              objectFit="cover"
            />
            <Image
              src={project3}
              alt="Project 3"
              borderRadius="md"
              objectFit="cover"
            />
            <Image
              src={project4}
              alt="Project 4"
              borderRadius="md"
              objectFit="cover"
            />
          </Grid>
        </Box>

        {/* Right Column: Large Image */}
        <Box>
          <Image
            src={project5}
            alt="Main Project"
            borderRadius="md"
            objectFit="cover"
            height="100%"
            width="100%"
          />
          {/* <Button
            mt={1}
            bg="gray.700"
            color="white"
            size="lg"
            _hover={{ bg: "gray.600" }}
            display="block"
            mx="auto"
          >
            VIEW ALL
          </Button> */}
        </Box>
      </Grid>
    </Box>
  );
}

export default PlotProjects;

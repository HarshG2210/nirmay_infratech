import {
  Box,
  Grid,
  Heading,
  Text,
  Icon,
  VStack,
  Link as ChakraLink,
  HStack,
} from "@chakra-ui/react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <Box as="footer" bg="gray.100" p={8} color="gray.600">
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }}
        gap={8}
        textAlign={{ base: "center", md: "left" }}
      >
        {/* Column 1: Uptown */}
        <VStack align={{ base: "center", md: "flex-start" }} spacing={4}>
          <Heading size="md" color="black">
            Nirmay Infratech
          </Heading>
          <Text>
            A Life to enjoy an eternity filled with joy.
          </Text>
          <HStack spacing={4}>
            <Icon as={FaTwitter} boxSize={5} color="gray.900" />
            <Icon as={FaFacebook} boxSize={5} color="gray.900" />
            <Icon as={FaInstagram} boxSize={5} color="gray.900" />
          </HStack>
        </VStack>

        {/* Column 2: Community */}
        <VStack align={{ base: "center", md: "flex-start" }} spacing={4}>
          <Heading size="md" color="black">
            Community
          </Heading>
          <ChakraLink color="gray.900" href="#">
            Search Properties
          </ChakraLink>
          <ChakraLink color="gray.900" href="#">
            For Agents
          </ChakraLink>
          <ChakraLink color="gray.900" href="#">
            Reviews
          </ChakraLink>
          <ChakraLink color="gray.900" href="#">
            FAQs
          </ChakraLink>
        </VStack>

        {/* Column 3: About Us */}
        <VStack align={{ base: "center", md: "flex-start" }} spacing={4}>
          <Heading size="md" color="black">
            About Us
          </Heading>
          <ChakraLink color="gray.900" href="#">
            Our Story
          </ChakraLink>
          <ChakraLink color="gray.900" href="#">
            Meet the Team
          </ChakraLink>
          <ChakraLink color="gray.900" href="#">
            Careers
          </ChakraLink>
        </VStack>

        {/* Column 4: Company */}
        <VStack align={{ base: "center", md: "flex-start" }} spacing={4}>
          <Heading size="md" color="black">
            Company
          </Heading>
          <ChakraLink color="gray.900" href="#">
            About Us
          </ChakraLink>
          <ChakraLink color="gray.900" href="#">
            Press
          </ChakraLink>
          <ChakraLink color="gray.900" href="#">
            Contact
          </ChakraLink>
          <ChakraLink color="gray.900" href="#">
            Careers
          </ChakraLink>
        </VStack>

        {/* Column 5: Contact Info */}
        <VStack align={{ base: "center", md: "flex-start" }} spacing={4}>
          <Heading size="md" color="black">
            Have a Questions?
          </Heading>
          <HStack spacing={3}>
            <Icon as={FaMapMarkerAlt} color="gray.900" />
            <Text>
              203 Fake St. Mountain View, San Francisco, California, USA
            </Text>
          </HStack>
          <HStack spacing={3}>
            <Icon as={FaPhone} color="gray.900" />
            <Text>+2 392 3929 210</Text>
          </HStack>
          <HStack spacing={3}>
            <Icon as={FaEnvelope} color="gray.900" />
            <Text>info@yourdomain.com</Text>
          </HStack>
        </VStack>
      </Grid>

      {/* Footer bottom text */}
      <Box textAlign="center" mt={8}>
        <Text fontSize="sm" color="gray.500">
          Copyright ©2024 All rights reserved | This website is made with
          <span style={{ color: "pink" }}> ❤️ </span> by 
          <ChakraLink href="https://colorlib.com" isExternal color="gray.900">
            {" "}AartiMultiServices Pvt. Ltd.
          </ChakraLink>
        </Text>
      </Box>
    </Box>
  );
}

export default Footer;

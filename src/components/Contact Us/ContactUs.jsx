import {
  Box,
  Heading,
  Text,
  Input,
  Button,
  Grid,
  Icon,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { FaHome, FaEnvelope, FaPhone } from "react-icons/fa";

function ContactUs() {
  return (
    <Box
      bg="gray.900"
      color="white"
      p={{ base: 4, md: 8 }}
      minH="100vh"
      mt={10}
    >
      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 1fr 1fr" }} // Stack on mobile, three columns on larger screens
        gap={8}
        maxW="1200px"
        mx="auto" // Center grid on the page
      >
        {/* Left Column: Contact Details */}
        <VStack align="flex-start" spacing={6} w="100%">
          <Heading size="lg" mb={4}>
            Contact Us
          </Heading>
          <HStack spacing={4} align="flex-start">
            <Icon as={FaHome} boxSize={6} />
            <Box>
              <Text>500 Terry Francine Street</Text>
              <Text>San Francisco, CA 94158</Text>
            </Box>
          </HStack>
          <HStack spacing={4} align="center">
            <Icon as={FaEnvelope} boxSize={6} />
            <Text>info@mysite.com</Text>
          </HStack>
          <HStack spacing={4} align="center">
            <Icon as={FaPhone} boxSize={6} />
            <Text>123-456-7890</Text>
          </HStack>
          <Text fontSize="sm" mt={8}>
            © 2035 by Newel Residential Remodeling. Powered and secured by Wix
          </Text>
        </VStack>

        {/* Middle Column: Contact Form */}
        <VStack
          as="form"
          spacing={4}
          align="stretch"
          w="100%"
          bg="gray.800"
          p={{ base: 4, md: 6 }}
          borderRadius="md"
        >
          <Heading size="md" textAlign="center" mb={4}>
            Send Us a Message
          </Heading>
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            <Input
              placeholder="First name"
              bg="gray.700"
              borderColor="gray.600"
            />
            <Input
              placeholder="Last name"
              bg="gray.700"
              borderColor="gray.600"
            />
          </Grid>
          <Input placeholder="Email" bg="gray.700" borderColor="gray.600" />
          <Input placeholder="Phone" bg="gray.700" borderColor="gray.600" />
          <Input placeholder="Address" bg="gray.700" borderColor="gray.600" />
          <Button
            mt={4}
            bg="teal.600"
            color="white"
            _hover={{ bg: "teal.500" }}
            type="submit"
          >
            Submit
          </Button>
        </VStack>

        {/* Right Column: Sidebar and Call Button */}
        <VStack align="flex-start" spacing={6} w="100%">
          <Text>Home</Text>
          <Text>Services</Text>
          <Text>Projects</Text>
          <Text>Contact</Text>
          <Button
            bg="teal.600"
            color="white"
            _hover={{ bg: "teal.500" }}
            size="lg"
            mt={8}
            w="full"
          >
            CALL NOW
          </Button>
        </VStack>
      </Grid>
    </Box>
  );
}

export default ContactUs;

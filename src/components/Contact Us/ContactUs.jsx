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
      color="gray.300"
      p={{ base: 4, md: 8 }}
      minH={{ base: "100vh", lg: "80vh" }} // Decreased height for desktop (lg and up)
      display="flex" // Enable flexbox for centering
      alignItems="center" // Vertical centering
      justifyContent="center" // Horizontal centering
      mt={10}
    >
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }} // Two columns on larger screens
        gap={8}
        maxW="1200px"
        w="100%" // Full width within maxW
        mx="auto" // Center grid on the page
      >
        {/* Left Column: Contact Details */}
        <VStack align="flex-start" spacing={6} w="100%">
          <Heading size="lg" color="gray.300" mb={4}>
            Contact Us
          </Heading>
          <HStack spacing={4} align="flex-start">
            <Icon as={FaHome} boxSize={6} color="gray.500" />
            <Box>
              <Text>500 Terry Francine Street</Text>
              <Text>San Francisco, CA 94158</Text>
            </Box>
          </HStack>
          <HStack spacing={4} align="center">
            <Icon as={FaEnvelope} boxSize={6} color="gray.500" />
            <Text>info@mysite.com</Text>
          </HStack>
          <HStack spacing={4} align="center">
            <Icon as={FaPhone} boxSize={6} color="gray.500" />
            <Text>123-456-7890</Text>
          </HStack>
          <Text fontSize="sm" mt={8} color="gray.500">
            © 2024 by Nirmay Infratech. Powered and secured by
            AartiMultiServices Pvt. Ltd.
          </Text>
        </VStack>

        {/* Right Column: Contact Form */}
        <VStack
          as="form"
          spacing={4}
          align="stretch"
          w="100%"
          p={{ base: 4, md: 6 }}
          borderRadius="md"
          border="1px solid"
          borderColor="gray.700"
        >
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4}>
            <Input
              placeholder="First name"
              bg="transparent"
              borderColor="gray.600"
              _hover={{ borderColor: "gray.500" }}
            />
            <Input
              placeholder="Last name"
              bg="transparent"
              borderColor="gray.600"
              _hover={{ borderColor: "gray.500" }}
            />
          </Grid>
          <Input
            placeholder="Email *"
            bg="transparent"
            borderColor="gray.600"
            _hover={{ borderColor: "gray.500" }}
          />
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4}>
            <Input
              placeholder="Phone"
              bg="transparent"
              borderColor="gray.600"
              _hover={{ borderColor: "gray.500" }}
            />
            <Input
              placeholder="Address"
              bg="transparent"
              borderColor="gray.600"
              _hover={{ borderColor: "gray.500" }}
            />
          </Grid>
          <Button
            mt={4}
            bg="gray.700"
            color="gray.300"
            _hover={{ bg: "gray.600" }}
            border="1px solid"
            borderColor="gray.600"
            type="submit"
          >
            Submit
          </Button>
        </VStack>
      </Grid>
    </Box>
  );
}

export default ContactUs;

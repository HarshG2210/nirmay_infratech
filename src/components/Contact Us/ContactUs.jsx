import { useState } from "react";
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
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { FaHome, FaEnvelope, FaPhone } from "react-icons/fa";
import emailjs from "emailjs-com"; // Import emailjs

function ContactUs() {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    message: "", // Add message field
  });

  // State to handle form submission status
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false); // State to manage loading

  const toast = useToast(); // Initialize toast

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email) {
      setError("Email is required.");
      toast({
        title: "Error.",
        description: "Email is required.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setLoading(true); // Set loading to true

    // Send form data using EmailJS
    emailjs
      .send(
        "service_x1uwfb6", // Replace with your service ID
        "template_5fkxsgd", // Replace with your template ID
        formData, // Send form data
        "JSS3G88wIUTVe_OhH" // Replace with your user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast({
            title: "Message sent.",
            description: "Your message has been sent successfully!",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          setSuccess("Your message has been sent!");
          setError("");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            message: "", // Reset message field
          }); // Reset form
        },
        (err) => {
          console.log("FAILED...", err);
          toast({
            title: "Error.",
            description: "Failed to send your message. Please try again later.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
          setError("Failed to send your message. Please try again later.");
          setSuccess("");
        }
      )
      .finally(() => {
        setLoading(false); // Reset loading state
      });
  };

  return (
    <Box
      bg="gray.900"
      color="gray.300"
      p={{ base: 4, md: 8 }}
      minH={{ base: "100vh", lg: "80vh" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      mt={10}
    >
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={8}
        maxW="1200px"
        w="100%"
        mx="auto"
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
            © 2035 by Newel Residential Remodeling. Powered and secured by Wix
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
          onSubmit={handleSubmit} // Handle form submission
        >
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4}>
            <Input
              placeholder="First name"
              name="firstName"
              bg="transparent"
              borderColor="gray.600"
              _hover={{ borderColor: "gray.500" }}
              onChange={handleChange}
              value={formData.firstName}
            />
            <Input
              placeholder="Last name"
              name="lastName"
              bg="transparent"
              borderColor="gray.600"
              _hover={{ borderColor: "gray.500" }}
              onChange={handleChange}
              value={formData.lastName}
            />
          </Grid>
          <Input
            placeholder="Email *"
            name="email"
            bg="transparent"
            borderColor="gray.600"
            _hover={{ borderColor: "gray.500" }}
            onChange={handleChange}
            value={formData.email}
          />
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4}>
            <Input
              placeholder="Phone"
              name="phone"
              bg="transparent"
              borderColor="gray.600"
              _hover={{ borderColor: "gray.500" }}
              onChange={handleChange}
              value={formData.phone}
            />
            <Input
              placeholder="Address"
              name="address"
              bg="transparent"
              borderColor="gray.600"
              _hover={{ borderColor: "gray.500" }}
              onChange={handleChange}
              value={formData.address}
            />
          </Grid>
          <Textarea
            placeholder="Message"
            name="message"
            bg="transparent"
            borderColor="gray.600"
            _hover={{ borderColor: "gray.500" }}
            onChange={handleChange}
            value={formData.message}
          />
          <Button
            mt={4}
            bg="gray.700"
            color="gray.300"
            _hover={{ bg: "gray.600" }}
            border="1px solid"
            borderColor="gray.600"
            type="submit"
            isLoading={loading} // Show spinner when loading
            loadingText="Submitting" // Text while loading
          >
            Submit
          </Button>
          {error && <Text color="red.500">{error}</Text>}
          {success && <Text color="green.500">{success}</Text>}
        </VStack>
      </Grid>
    </Box>
  );
}

export default ContactUs;

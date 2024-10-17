// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";

function Navbar() {
  return (
    <Box as="nav" p={4} bg="teal.500">
      <Button as={Link} to="/" colorScheme="teal" m={2}>
        Home
      </Button>
      <Button as={Link} to="/about" colorScheme="blue" m={2}>
        About
      </Button>
      <Button as={Link} to="/contact" colorScheme="green" m={2}>
        Contact Us
      </Button>
    </Box>
  );
}

export default Navbar;

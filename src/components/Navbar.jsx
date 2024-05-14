import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => (
  <Box bg="blue.500" p={4}>
    <Flex align="center">
      <Text fontSize="xl" color="white" fontWeight="bold">Investigation Hub</Text>
      <Spacer />
      <Link as={RouterLink} to="/" color="white" mx={2}>Home</Link>
      <Link as={RouterLink} to="/about" color="white" mx={2}>About</Link>
      <Link as={RouterLink} to="/contact" color="white" mx={2}>Contact</Link>
      <Link as={RouterLink} to="/upload" color="white" mx={2}>Upload</Link>
    </Flex>
  </Box>
);

export default Navbar;
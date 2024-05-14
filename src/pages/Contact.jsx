import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Contact = () => (
  <Box p={4}>
    <VStack spacing={4} align="start">
      <Heading as="h1" size="xl">Contact Us</Heading>
      <Text fontSize="lg">
        For any inquiries or support, please contact us at:
      </Text>
      <Text fontSize="md">
        Email: support@investigationhub.com
      </Text>
      <Text fontSize="md">
        Phone: +1 (555) 123-4567
      </Text>
    </VStack>
  </Box>
);

export default Contact;
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const About = () => (
  <Box p={4}>
    <VStack spacing={4} align="start">
      <Heading as="h1" size="xl">About Investigation Hub</Heading>
      <Text fontSize="lg">
        Investigation Hub is a comprehensive web app designed to streamline the investigation workflow by leveraging AI capabilities to organize, analyze, and correlate data from various file types.
      </Text>
      <Heading as="h2" size="lg">Key Features</Heading>
      <Text fontSize="md">
        <ul>
          <li>File Upload and Organization</li>
          <li>Advanced Document Analysis</li>
          <li>Data Correlation and Visualization</li>
          <li>Investigation Workflow Management</li>
          <li>Search and Filtering</li>
          <li>Security and Access Control</li>
          <li>Reporting and Export</li>
        </ul>
      </Text>
    </VStack>
  </Box>
);

export default About;
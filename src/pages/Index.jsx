import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Investigation Hub</Heading>
        <Text fontSize="lg">Streamline your investigation workflow with AI-powered tools.</Text>
      </VStack>
    </Container>
  );
};

export default Index;
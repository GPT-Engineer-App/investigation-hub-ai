import { useState } from "react";
import { Box, Button, Input, VStack, Text, useToast, Divider, Heading } from "@chakra-ui/react";

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [analysisResults, setAnalysisResults] = useState([]);
  const toast = useToast();

  const handleFileChange = (event) => {
    setFiles([...event.target.files]);
  };

  const handleUpload = () => {
    if (files.length === 0) {
      toast({
        title: "No files selected.",
        description: "Please select files to upload.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    // Simulate AI-powered file sorting and categorization
    const categorizedFiles = files.map((file) => ({
      name: file.name,
      type: file.type.split("/")[0], // categorize by file type (e.g., image, video, application)
    }));

    console.log("Categorized Files:", categorizedFiles);

    // Simulate AI-powered analysis
    const results = categorizedFiles.map((file) => {
      if (file.type === "image" || file.type === "video") {
        return {
          name: file.name,
          insights: "Detected objects and scenes in the media.",
          suggestions: "Consider these objects/scenes for further investigation."
        };
      } else if (file.type === "application") {
        return {
          name: file.name,
          insights: "Extracted key information and entities from the document.",
          suggestions: "Review the extracted information for relevance."
        };
      } else {
        return {
          name: file.name,
          insights: "No specific analysis available.",
          suggestions: "No suggestions available."
        };
      }
    });

    setAnalysisResults(results);

    toast({
      title: "Files uploaded.",
      description: "Your files have been uploaded and analyzed.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    // Reset file input
    setFiles([]);
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="start">
        <Text fontSize="xl" fontWeight="bold">Upload Files</Text>
        <Input type="file" multiple onChange={handleFileChange} />
        <Button colorScheme="blue" onClick={handleUpload}>Upload</Button>
      </VStack>
      <Divider my={4} />
      {analysisResults.length > 0 && (
        <Box>
          <Heading as="h2" size="lg" mb={4}>Analysis Results</Heading>
          {analysisResults.map((result, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="md" mb={4}>
              <Text fontSize="md" fontWeight="bold">{result.name}</Text>
              <Text fontSize="sm"><strong>Insights:</strong> {result.insights}</Text>
              <Text fontSize="sm"><strong>Suggestions:</strong> {result.suggestions}</Text>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default FileUpload;
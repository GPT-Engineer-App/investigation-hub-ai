import { useState } from "react";
import { Box, Button, Input, VStack, Text, useToast } from "@chakra-ui/react";

const FileUpload = () => {
  const [files, setFiles] = useState([]);
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

    toast({
      title: "Files uploaded.",
      description: "Your files have been uploaded and categorized.",
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
    </Box>
  );
};

export default FileUpload;
import { useState } from "react";
import { Box, Button, Input, VStack, Text, useToast, Divider, Heading } from "@chakra-ui/react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [analysisResults, setAnalysisResults] = useState([]);
  const [correlatedData, setCorrelatedData] = useState([]);
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

    // Simulate data correlation
    const correlated = [
      { name: 'File 1', uv: 4000, pv: 2400, amt: 2400 },
      { name: 'File 2', uv: 3000, pv: 1398, amt: 2210 },
      { name: 'File 3', uv: 2000, pv: 9800, amt: 2290 },
      { name: 'File 4', uv: 2780, pv: 3908, amt: 2000 },
      { name: 'File 5', uv: 1890, pv: 4800, amt: 2181 },
      { name: 'File 6', uv: 2390, pv: 3800, amt: 2500 },
      { name: 'File 7', uv: 3490, pv: 4300, amt: 2100 },
    ];

    setCorrelatedData(correlated);

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
      {correlatedData.length > 0 && (
        <Box mt={8}>
          <Heading as="h2" size="lg" mb={4}>Correlated Data Visualization</Heading>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              width={500}
              height={300}
              data={correlatedData}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      )}
    </Box>
  );
};

export default FileUpload;
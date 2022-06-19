import { Box } from "@chakra-ui/react";

import IndexRoutes from "Routes";
import Navbar from "components/navbar";

function App() {
  return (
    <>
      <Navbar />

      <Box px={{ base: 10, md: "10%" }} py={10}>
        <IndexRoutes />
      </Box>
    </>
  );
}

export default App;

import React from "react";
import Navbar from "../Components/Navbar";
import { Text, Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Box
        style={{
        //   border: "2px solid gray",
        borderRadius:"20px",
          width: "60%",
          margin: "auto",
          marginTop: "50px",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        }}
      >
        <Text
          style={{
            fontSize: "40px",
            padding: "30px",
            textAlign: "center",
          }}
        >
          Welcome to Our App
        </Text>
      </Box>
    </div>
  );
};

export default Home;

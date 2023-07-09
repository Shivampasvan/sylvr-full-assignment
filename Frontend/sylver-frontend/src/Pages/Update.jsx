import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import DetailsNavbar from "../Components/UpdateNavbar";

const Update = () => {
  let token = JSON.parse(localStorage.getItem("token"));
  // console.log(token);
  let user = JSON.parse(localStorage.getItem("user"));
  // console.log(user);

  const toast = useToast();
  const [firstname, setFirstname] = useState(user[0].firstname);
  const [lastname, setLastname] = useState(user[0].lastname);
  const [email, setEmail] = useState(user[0].email);
  

  const handleClick = () => {
    if (firstname !== "" && lastname !== "" && email !== "") {
      const userData = {
        firstname,
        lastname,
        email,
      };

      axios
        .patch(
          `https://cute-gray-gecko-coat.cyclic.app/users/update/${user[0]._id}`,
          userData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          toast({
            title: "Credentials Updated Successfully !!",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          // console.log(res);
        })
        .catch((err) => {
          toast({
            title: "Error in Updation !!",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
          // console.log(err);
        });
    } else {
      //   alert("Testing");
      toast({
        title: "All credentials required !!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <DetailsNavbar />
      <Flex
        fontFamily={"Open Sans, sans-serif, Arial, Helvetica"}
        minH={"70vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={4} px={6} width={"35%"}>
          <Stack align={"center"}>
            <Heading color={"#0066ff"} fontSize={"4xl"} textAlign={"center"}>
              Update account details
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={
              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
            }
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <Box style={{ width: "100%" }}>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Update First Name</FormLabel>
                    <Input
                      value={firstname}
                      type="text"
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <HStack>
                <Box style={{ width: "100%" }}>
                  <FormControl id="lastName" isRequired>
                    <FormLabel>Update Last Name</FormLabel>
                    <Input
                      value={lastname}
                      type="text"
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Update Email address</FormLabel>
                <Input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>

              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  m={"auto"}
                  my={"3"}
                  width={"50"}
                  bg={"#0066ff"}
                  color={"white"}
                  _hover={{
                    bg: "blue.300",
                  }}
                  onClick={handleClick}
                >
                  Update Details
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default Update;

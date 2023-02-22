import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
const iState = {
  name: "",
  contact: "",
  place: "",
  image: "",
  email: "",
  password: "",
};
export default function Signup() {
  const [data, setData] = React.useState(iState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleClick = () => {
    setData(iState);
    console.log(data);
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Create your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  type="name"
                />
              </FormControl>
              <FormControl id="contact">
                <FormLabel>Contact</FormLabel>
                <Input
                  name="contact"
                  value={data.contact}
                  onChange={handleChange}
                  type="number"
                />
              </FormControl>
            </HStack>
            <HStack>
              <FormControl id="place">
                <FormLabel>Place</FormLabel>
                <Input
                  name="place"
                  value={data.place}
                  onChange={handleChange}
                  type="text"
                />
              </FormControl>
              <FormControl id="image">
                <FormLabel>Image Url</FormLabel>
                <Input
                  name="image"
                  value={data.image}
                  onChange={handleChange}
                  type="url"
                />
              </FormControl>
            </HStack>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                name="email"
                value={data.email}
                onChange={handleChange}
                type="email"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                value={data.password}
                onChange={handleChange}
                type="password"
              />
            </FormControl>
            <Stack spacing={1}>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleClick}
              >
                Sign in
              </Button>
              <Flex justifyContent="space-around">
                <Text>Already have account ? </Text>
                <Link href="/login">
                  <Text fontSize="15px" fontWeight="600" color="black.900">
                    Login
                  </Text>
                </Link>
              </Flex>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

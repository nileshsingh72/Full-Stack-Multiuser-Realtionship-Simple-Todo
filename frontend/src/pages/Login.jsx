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
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../redux/auth.action";
const iState = {
  email: "",
  password: "",
};
export default function Signup() {
  const [data, setData] = React.useState(iState);
  const isAuth = useSelector((state) => state.auth.isAuth);
  console.log(isAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleClick = () => {
    setData(iState);
    dispatch(loginAction(data)).then((res) => {
      if (res) {
        navigate("/");
        console.log(res);
      } else {
        console.log(res, "errorwala");
      }
    });
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
          <Heading fontSize={"4xl"}>Login your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
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
                Login
              </Button>
              <Flex justifyContent="space-around">
                <Text>DontAlready have account ? </Text>
                <Link href="/register">
                  <Text fontSize="15px" fontWeight="600" color="black.900">
                    Sign-up
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

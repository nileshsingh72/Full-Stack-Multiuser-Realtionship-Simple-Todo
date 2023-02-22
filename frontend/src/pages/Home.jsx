import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../component/Navbar";
import { Flex, Button, Input, Text } from "@chakra-ui/react";
import { logoutAction } from "../redux/auth.action";
const iState = {
  task: "",
  status: false,
};

function Home(props) {
  const [data, setData] = useState(iState);
  const [main, setMain] = useState([]);
  const dispatch = useDispatch();
  const id = useSelector((state) => state.auth.id);
  console.log(id);
  const getTodos = async () => {
    let url = `http://localhost:9000/todo/get/${id}`;
    await axios.get(url).then((res) => {
      setMain(res.data.data);
    });
  };

  const handleTodo = async () => {
    let url = `http://localhost:9000/todo/create/${id}`;
    await axios
      .post(url, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
  };
  const handleDelete = (id) => {};
  const handleEdit = (id) => {};
  const Logout = () => {
    alert("kjh");
    dispatch(logoutAction());
  };
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      <Navbar handleLogout={Logout} />

      <Flex w="70%" m="auto" mt="80px" gap="20px">
        <Input
          type="text"
          placeholder="Add todos here"
          onChange={(e) => setData({ ...data, task: e.target.value })}
        />
        <Button onClick={handleTodo}>Add TODOS</Button>
      </Flex>

      <Flex flexDirection="column">
        {main?.map((el) => {
          return (
            <Flex key={el._id}>
              <Text>{el.task}</Text>
              <Button onClick={() => handleEdit(el._id)}>Edit</Button>
              <Button onClick={() => handleDelete(el._id)}>Delete</Button>
            </Flex>
          );
        })}
      </Flex>
    </div>
  );
}

export default Home;

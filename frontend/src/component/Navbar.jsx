import React from "react";
import { Button } from "@chakra-ui/react";
function Navbar({ name, handleLogout }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>Welcome to {name}</div>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}

export default Navbar;

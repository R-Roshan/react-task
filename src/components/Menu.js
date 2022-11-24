import React from "react";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

function Menu() {
  return (
    <>
      <h2>Top stories for Now</h2>
      <Stack direction="horizontal" gap={5}>
        <Button variant="outline-primary" active>
          All
        </Button>{" "}
        <Button variant="outline-primary">Android</Button>{" "}
        <Button variant="outline-primary">Cricket</Button>{" "}
        <Button variant="outline-primary">iphone</Button>{" "}
        <Button variant="outline-primary">Google</Button>{" "}
      </Stack>
    </>
  );
}

export default Menu;

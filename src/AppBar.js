import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function AppBar() {
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">Zintlr News</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default AppBar;

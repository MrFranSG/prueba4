import Link from "next/link";
import { Button, Container, Modal, Nav, Navbar } from "react-bootstrap";
import { FaSteam } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";


export default function Home() {
  return (
    <>
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand as={Link} href="/index" ><FaSteam />Steam</Navbar.Brand>
      <Nav className="Registro">
        <Nav.Link as={Link} href="/Registro"><FaUserPlus />Registro</Nav.Link>
        <Nav.Link as={Link} href="/Mostrar"><FaUser />Usuarios</Nav.Link>
        <Nav.Link as={Link} href="/"><IoMdLogIn />Login</Nav.Link>
      </Nav>






      </Container>

      





    </Navbar>
    </>

    
  );
}



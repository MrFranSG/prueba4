import Link from "next/link";
import { Button, Container, Modal, Nav, Navbar } from "react-bootstrap";
import { FaSteam } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { useState } from 'react';

export default function Home() {
  return (
    <>
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand as={Link} href="https://store.steampowered.com/?l=spanish" ><FaSteam />Steam</Navbar.Brand>
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

function Example() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

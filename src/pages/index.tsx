import Link from "next/link";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaSteam, FaUser, FaUserPlus } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import styles from '../styles/Home.module.css';
import Image from 'next/image'; // Importar para usar imágenes locales

export default function Home() {
  return (
    <>
      <Navbar variant="dark" className={styles.navbar}>
        <Container>
          <Navbar.Brand as={Link} href="/" className={styles.navbarBrand}>
            <FaSteam /> Steam
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={Link} href="/Registro" className={styles.navLink}>
              <FaUserPlus /> Registro
            </Nav.Link>
            <Nav.Link as={Link} href="/Mostrar" className={styles.navLink}>
              <FaUser /> Usuarios
            </Nav.Link>
            <Nav.Link as={Link} href="/Login" className={styles.navLink}>
              <IoMdLogIn /> Login
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className={styles.mainContent}>
        <div className={styles.buttonsContainer}>
          <Link href="/Registro" passHref>
            <Button variant="primary" className={styles.mainButton}>
              <FaUserPlus /> Regístrate
            </Button>
          </Link>
          <Link href="/Login" passHref>
            <Button variant="secondary" className={styles.mainButton}>
              <IoMdLogIn /> Inicia Sesión
            </Button>
          </Link>
        </div>
        <div className={styles.imageContainer}>
          <Image src="https://s.13.cl/sites/default/files/styles/manualcrop_850x475/public/esports/articulo/field-imagen/2021-01/portadacsgo.jpg.jpeg?itok=4Quhp4AL" alt="CS:GO" width={300} height={175} />
          <Image src="https://www.viaxesports.com/wp-content/uploads/2020/05/r6s-1536x864.jpg" alt="Rainbow Six Siege" width={300} height={169} />
          <Image src="https://sm.ign.com/t/ign_es/screenshot/default/monster-hunter-world-iceborne-20190908102727_crw9.960.jpg" alt="Monster Hunter World" width={300} height={169} />
        </div>
      </Container>
    </>
  );
}

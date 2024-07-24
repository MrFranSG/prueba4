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
      <Container className={styles.imageContainer}>
        <a href="https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/game2.jpg"
            alt="CS:GO"
            width={850}
            height={475}
            className={styles.image}
          />
        </a>
        <p>Counter-Strike: Global Offensive fue un videojuego de disparos en primera persona desarrollado por Valve Corporation y Hidden Path Entertainment. Es el cuarto juego de la saga Counter-Strike. Fue lanzado al mercado en agosto de 2012 para las plataformas de Microsoft Windows, macOS y Xbox 360 y PlayStation 3</p>
        <a href="https://store.steampowered.com/app/359550/Tom_Clancys_Rainbow_Six_Siege/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/game1.jpg"
            alt="Rainbow Six Siege"
            width={1536}
            height={864}
            className={styles.image}
          />
        </a>
        <p>Tom Clancy's Rainbow Six: Siege es un videojuego de disparos táctico en línea desarrollado por Ubisoft Montreal y distribuidor por Ubisoft. Salió a la venta en todo el mundo para Microsoft Windows, PlayStation 4 y Xbox One el 1 de diciembre de 2015 y para PlayStation 5 y Xbox Series X|S el 1 de diciembre de 2020.</p>
        <a href="https://store.steampowered.com/app/582010/Monster_Hunter_World/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/game3.jpg"
            alt="Monster Hunter World"
            width={960}
            height={540}
            className={styles.image}
          />
        </a>
        <p>Monster Hunter: World es un videojuego perteneciente al género de rol y acción, desarrollado y publicado por la empresa Capcom, siendo el sexto título principal de la franquicia de videojuegos Monster Hunter. El juego fue anunciado en la conferencia de Sony en la E3 2017.​</p>
      </Container>
    </>
  );
}
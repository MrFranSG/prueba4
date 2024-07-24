import { login } from '@/Firebase/Promesas';
import { Usuario } from '@/Interfaces/IUsuario';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { FaSteam, FaUser, FaUserPlus } from 'react-icons/fa';
import { IoMdLogIn } from 'react-icons/io';
import styles from '../styles/Login.module.css'; // Asegúrate de que la ruta sea correcta

const initialState: Usuario = {
  AnioNacimiento: "",
  Apellido: "",
  Comentario: "",
  Confirmar: "",
  Contraseña: "",
  Correo: "",
  Genero: "",
  Nombre: "",
};

export const Login = () => {
  const [correo, setCorreo] = useState(initialState.Correo);
  const [contraseña, setContraseña] = useState(initialState.Contraseña);
  const [errorCorreo, setErrorCorreo] = useState("");
  const [errorContraseña, setErrorContraseña] = useState("");
  const [errorLogin, setErrorLogin] = useState("");
  const router = useRouter();

  const validarContraseña = (valor: string) => {
    const trimmedValor = valor.trim();
    if (trimmedValor === "") {
      setErrorContraseña("La contraseña no puede estar vacía.");
    } else {
      setContraseña(trimmedValor);
      setErrorContraseña("");
    }
  };

  const validarCorreo = (valor: string) => {
    const valorLower = valor.toLowerCase().trim();
    if (valorLower === "") {
      setErrorCorreo("El correo no puede estar vacío.");
    } else {
      setCorreo(valorLower);
      setErrorCorreo("");
    }
  };

  const handleLogin = async () => {
    setErrorLogin("");
    if (correo === "admin" && contraseña === "admin") {
      router.push('/Mostrar');
      return;
    }
    
    try {
      await login(correo, contraseña);
      router.push('/');
    } catch (error) {
      if (error instanceof Error) {
        setErrorLogin(error.message);
      }
    }
  };

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} href="/" ><FaSteam />Steam</Navbar.Brand>
          <Nav className="Registro">
            <Nav.Link as={Link} href="/Registro"><FaUserPlus />Registro</Nav.Link>
            <Nav.Link as={Link} href="/Mostrar"><FaUser />Usuarios</Nav.Link>
            <Nav.Link as={Link} href="/"><IoMdLogIn />Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className={styles.formContainer}>
        <Form className={styles.form}>
          <Form.Group>
            <Form.Label>Correo:</Form.Label>
            <Form.Control
              type='email'
              placeholder='Ingrese Correo'
              value={correo}
              onChange={(e) => validarCorreo(e.currentTarget.value)}
              className={styles.formControl}
            />
            <p className={styles.errorText}>{errorCorreo}</p>
          </Form.Group>
          <Form.Group>
            <Form.Label>Contraseña:</Form.Label>
            <Form.Control
              type='password'
              placeholder='Ingrese contraseña'
              value={contraseña}
              onChange={(e) => validarContraseña(e.currentTarget.value)}
              className={styles.formControl}
            />
            <p className={styles.errorText}>{errorContraseña}</p>
          </Form.Group>
          <p className={styles.errorText}>{errorLogin}</p>
          <Button variant="primary" type="button" onClick={handleLogin} className={styles.submitButton}>
            Login <IoMdLogIn />
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Login;
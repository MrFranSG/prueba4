import { registrarUsuario } from "@/Firebase/Promesas";
import Form from 'react-bootstrap/Form';
import { Usuario } from "@/Interfaces/IUsuario";
import React, { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import { IoMdLogIn } from "react-icons/io";
import { FaSteam, FaUser, FaUserPlus } from "react-icons/fa";
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css';

const initialState: Usuario = {
    AnioNacimiento: "",
    Apellido: "",
    Comentario: "",
    Confirmar: "",
    Contraseña: "",
    Correo: "",
    Genero: "",
    Nombre: "",
}

export const Registro = () => {
    const [AnioNacimiento, setAnioNacimiento] = useState(initialState.AnioNacimiento);
    const [Apellido, setApellido] = useState(initialState.Apellido);
    const [Comentario, setComentario] = useState(initialState.Comentario);
    const [Confirmar, setConfirmar] = useState(initialState.Confirmar);
    const [Contraseña, setContraseña] = useState(initialState.Contraseña);
    const [Correo, setCorreo] = useState(initialState.Correo);
    const [Genero, setGenero] = useState(initialState.Genero);
    const [Nombre, setNombre] = useState(initialState.Nombre);

    const [ErrorAnioNacimiento, setErrorAnioNacimiento] = useState("");
    const [ErrorApellido, setErrorApellido] = useState("");
    const [ErrorComentario, setErrorComentario] = useState("");
    const [ErrorConfirmar, setErrorConfirmar] = useState("");
    const [ErrorContraseña, setErrorContraseña] = useState("");
    const [ErrorCorreo, setErrorCorreo] = useState("");
    const [ErrorGenero, setErrorGenero] = useState("");
    const [ErrorNombre, setErrorNombre] = useState("");

    const router = useRouter();

    const ValidarAnio = (valor: string) => {
        if (valor.trim() === "") {
            setErrorAnioNacimiento("Debe ingresar una fecha");
        } else {
            setErrorAnioNacimiento("");
        }
        setAnioNacimiento(valor);
    }

    const ValidarApellido = (valor: string) => {
        if (valor.trim() === "") {
            setErrorApellido("Los campos no pueden estar vacíos");
        } else {
            setErrorApellido("");
        }
        setApellido(valor);
    };

    const ValidarComentario = (valor: string) => {
        if (valor.trim() === "") {
            setErrorComentario("Debe ingresar un comentario");
        } else {
            setErrorComentario("");
        }
        setComentario(valor);
    }

    const ValidarConfirmar = (valor: string) => {
        if (valor.trim() !== Contraseña) {
            setErrorConfirmar("Las contraseñas deben coincidir");
        } else {
            setErrorConfirmar("");
        }
        setConfirmar(valor);
    }

    const ValidarContraseña = (valor: string) => {
        if (valor.trim() === "") {
            setErrorContraseña("La contraseña no puede estar vacía.");
        } else {
            const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
            if (!regex.test(valor)) {
                setErrorContraseña("La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número.");
            } else {
                setErrorContraseña("");
            }
        }
        setContraseña(valor);
    };

    const ValidarCorreo = (valor: string) => {
        if (valor.trim() === "") {
            setErrorCorreo("El correo no puede estar vacío");
        } else {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regex.test(valor.toLowerCase())) {
                setErrorCorreo("Ingrese un correo correcto");
            } else {
                setErrorCorreo("");
            }
        }
        setCorreo(valor.toLowerCase());
    };

    const ValidarGenero = (valor: string) => {
        if (valor.trim() === "") {
            setErrorGenero("Debe ingresar su género");
        } else {
            setErrorGenero("");
        }
        setGenero(valor);
    }

    const ValidarNombre = (valor: string) => {
        if (valor.trim() === "") {
            setErrorNombre("Los campos no pueden estar vacíos");
        } else {
            setErrorNombre("");
        }
        setNombre(valor);
    };

    const ValidarFormulario = () => {
        ValidarNombre(Nombre);
        ValidarApellido(Apellido);
        ValidarAnio(AnioNacimiento);
        ValidarCorreo(Correo);
        ValidarContraseña(Contraseña);
        ValidarConfirmar(Confirmar);
        ValidarGenero(Genero);
        ValidarComentario(Comentario);

        return !(
            ErrorNombre ||
            ErrorApellido ||
            ErrorAnioNacimiento ||
            ErrorCorreo ||
            ErrorContraseña ||
            ErrorConfirmar ||
            ErrorGenero ||
            ErrorComentario
        );
    };

    const Registrar = () => {
        if (ValidarFormulario()) {
            const usuario: Usuario = {
                AnioNacimiento,
                Apellido,
                Comentario,
                Confirmar,
                Contraseña,
                Correo,
                Genero,
                Nombre
            };

            registrarUsuario(usuario)
                .then(() => {
                    alert("Se registró con éxito el usuario " + Nombre + " " + Apellido);
                    router.push('/Login');
                })
                .catch((e) => {
                    console.log(e);
                    alert(e.message || "Vuelva a intentarlo");
                });
        } else {
            alert("Asegúrese de haber ingresado todos los datos correctamente.");
        }
    };

    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} href="/"><FaSteam />Steam</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} href="/Registro"><FaUserPlus />Registro</Nav.Link>
                        <Nav.Link as={Link} href="/Mostrar"><FaUser />Usuarios</Nav.Link>
                        <Nav.Link as={Link} href="/Login"><IoMdLogIn />Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Container className={styles.formContainer}>
                <h2>Registro de Usuario</h2>
                <Form>
                    <Form.Group>
                        <Form.Label className={styles.formLabel}>Nombre:</Form.Label>
                        <Form.Control 
                            type='text' 
                            placeholder='Ingrese el Nombre' 
                            name='Nombre' 
                            className={styles.formControl} 
                            onChange={(e) => ValidarNombre(e.currentTarget.value)} 
                        />
                        {ErrorNombre && <Form.Text className="text-danger">{ErrorNombre}</Form.Text>}
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className={styles.formLabel}>Apellido:</Form.Label>
                        <Form.Control 
                            type='text' 
                            placeholder='Ingrese el Apellido' 
                            name='Apellido' 
                            className={styles.formControl} 
                            onChange={(e) => ValidarApellido(e.currentTarget.value)} 
                        />
                        {ErrorApellido && <Form.Text className="text-danger">{ErrorApellido}</Form.Text>}
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className={styles.formLabel}>Año de nacimiento:</Form.Label>
                        <Form.Control 
                            type='date' 
                            placeholder='Ingrese el Año de nacimiento' 
                            name='AnioNacimiento' 
                            className={styles.formControl} 
                            onChange={(e) => ValidarAnio(e.currentTarget.value)} 
                        />
                        {ErrorAnioNacimiento && <Form.Text className="text-danger">{ErrorAnioNacimiento}</Form.Text>}
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className={styles.formLabel}>Correo:</Form.Label>
                        <Form.Control 
                            type='email' 
                            placeholder='Ingrese su correo' 
                            name='Correo' 
                            className={styles.formControl} 
                            onChange={(e) => ValidarCorreo(e.currentTarget.value)} 
                        />
                        {ErrorCorreo && <Form.Text className="text-danger">{ErrorCorreo}</Form.Text>}
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className={styles.formLabel}>Contraseña:</Form.Label>
                        <Form.Control 
                            type='password' 
                            placeholder='Ingrese una contraseña' 
                            name='Contraseña' 
                            className={styles.formControl} 
                            onChange={(e) => ValidarContraseña(e.currentTarget.value)} 
                        />
                        {ErrorContraseña && <Form.Text className="text-danger">{ErrorContraseña}</Form.Text>}
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className={styles.formLabel}>Confirmar contraseña:</Form.Label>
                        <Form.Control 
                            type='password' 
                            placeholder='Confirme su contraseña' 
                            name='Confirmar' 
                            className={styles.formControl} 
                            onChange={(e) => ValidarConfirmar(e.currentTarget.value)} 
                        />
                        {ErrorConfirmar && <Form.Text className="text-danger">{ErrorConfirmar}</Form.Text>}
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className={styles.formLabel}>Género:</Form.Label><br />
                        <Form.Check 
                            inline 
                            type="radio" 
                            label="Hombre" 
                            name="Genero" 
                            value="Hombre" 
                            className={styles.formControl} 
                            onChange={(e) => ValidarGenero(e.currentTarget.value)} 
                        />
                        <Form.Check 
                            inline 
                            type="radio" 
                            label="Mujer" 
                            name="Genero" 
                            value="Mujer" 
                            className={styles.formControl} 
                            onChange={(e) => ValidarGenero(e.currentTarget.value)} 
                        />
                        {ErrorGenero && <Form.Text className="text-danger">{ErrorGenero}</Form.Text>}
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className={styles.formLabel}>Comentario:</Form.Label>
                        <Form.Control 
                            as='textarea' 
                            rows={3} 
                            placeholder="Pon un comentario" 
                            name="Comentario" 
                            className={styles.formControl} 
                            onChange={(e) => ValidarComentario(e.currentTarget.value)} 
                        />
                        {ErrorComentario && <Form.Text className="text-danger">{ErrorComentario}</Form.Text>}
                    </Form.Group>

                    <Button 
                        type="button" 
                        variant='primary' 
                        className={styles.btnSteam} 
                        onClick={Registrar}
                    >
                        Registrar
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default Registro;
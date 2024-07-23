import { registrarUsuario } from "@/Firebase/Promesas";
import Form from 'react-bootstrap/Form'
import { Usuario } from "@/Interfaces/IUsuario";
import React, { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import { IoMdLogIn } from "react-icons/io";
import { FaSteam, FaUser, FaUserPlus } from "react-icons/fa";
import { useRouter } from "next/router";


const initialState:Usuario = {
    AnioNacimiento:"",
    Apellido:"",
    Comentario:"",
    Confirmar:"",
    Contraseña:"",
    Correo:"",
    Genero:"",
    Nombre:"",
}

export const Registro = () => {

    const[AnioNacimiento,setAnioNacimiento] = useState(initialState.AnioNacimiento)
    const[Apellido, setApellido] = useState(initialState.Apellido)
    const[Comentario,setComentario] = useState(initialState.Comentario)
    const[Confirmar,setConfirmar] = useState(initialState.Confirmar)
    const[Contraseña,setContraseña] = useState(initialState.Contraseña)
    const[Correo,setCorreo] = useState(initialState.Correo)
    const[Genero,setGenero] = useState(initialState.Genero)
    const[Nombre,setNombre] = useState(initialState.Nombre)

    const[ErrorAnioNacimiento,setErrorAnioNacimiento] = useState("")
    const[ErrorApellido, setErrorApellido] = useState("")
    const[ErrorComentario,setErrorComentario] = useState("")
    const[ErrorConfirmar,setErrorConfirmar] = useState("")
    const[ErrorContraseña,setErrorContraseña] = useState("")
    const[ErrorCorreo,setErrorCorreo] = useState("")
    const[ErrorGenero,setErrorGenero] = useState("")
    const[ErrorNombre,setErrorNombre] = useState("")


    const router = useRouter(); 


    const ValidarAnio = (valor: string) =>{
        const valorLower = valor.toLowerCase()
        if (valorLower.trim()=== "") {
            setErrorAnioNacimiento("Debe ingresar una fecha")
        }
        setAnioNacimiento(valor)

    }

    const ValidarApellido = (valor: string) => {
        if (valor.length > 0) {
            setErrorApellido("");
        } else {
            setErrorApellido("Los campos no pueden estar vacíos");
        }
        setApellido(valor);
    };

    const ValidarComentario = (valor: string) =>{
        const valorLower = valor.toLowerCase()
        if (valorLower.trim()=== "") {
            setErrorComentario("Debe ingresar un comentario")
        }
        setComentario(valor)

    }

    const ValidarConfirmar = (valor: string)=> {
        const valorLower = valor.toLowerCase()
        if (valorLower.trim()!== Contraseña) {
            setErrorConfirmar("Las contraseñas deben coincidir")
        }
        setConfirmar(valor)
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
        const valorLower = valor.toLowerCase();
        if (valorLower.trim() === "") {
            setErrorCorreo("El correo no puede estar vacío");
        } else {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regex.test(valorLower)) {
                setErrorCorreo("Ingrese un correo correcto");
            } else {
                setErrorCorreo("");
            }
        }
        setCorreo(valorLower);
    };

    const ValidarGenero = (valor: string) =>{
        const valorLower = valor.toLowerCase()
        if (valorLower.trim()=== "") {
            setErrorGenero("Debe ingresar su genero")
        }
        setGenero(valor)

    }

    const ValidarNombre = (valor: string) => {
        if (valor.length > 0) {
            setErrorNombre("");
        } else {
            setErrorNombre("Los campos no pueden estar vacíos");
        }
        setNombre(valor);
    };



    const Registrar = () => {
        if (ErrorAnioNacimiento || ErrorApellido || ErrorComentario || ErrorConfirmar || ErrorContraseña || ErrorCorreo || ErrorGenero || ErrorNombre) {
            alert("Asegurese de haber ingresado todos los datos.");
            return;
        }


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

                alert("Se registro con exito el usuario " + Nombre + " " + Apellido);
                router.push('/Login');
            })
            .catch((e) => {
                console.log(e);
                alert(e.message || "Vuelva a intentarlo");
            });
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




        <Form>
            <Form.Group>
                <Form.Label>Nombre: </Form.Label>
                <Form.Control type='text' placeholder='Ingrese el Nombre ' name='Nombre' onChange={(e)=>ValidarNombre(e.currentTarget.value)}></Form.Control>
                <Form.Text></Form.Text>
            </Form.Group>
            
            <Form.Group>
                <Form.Label>Apellido: </Form.Label>
                <Form.Control type='text' placeholder='Ingrese el Apellido ' name='Apellido' onChange={(e)=>ValidarApellido(e.currentTarget.value)}></Form.Control>
                <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Año de nacimiento: </Form.Label>
                <Form.Control type='date' placeholder='Ingrese el Año de nacimiento ' name='AnioNacimiento' onChange={(e)=>ValidarAnio(e.currentTarget.value)}></Form.Control>
                <Form.Text></Form.Text>
            </Form.Group>


            <Form.Group>
                <Form.Label>Correo: </Form.Label>
                <Form.Control type='email' placeholder='Ingrese su correo ' name='Correo' onChange={(e)=>ValidarCorreo(e.currentTarget.value)}></Form.Control>
                <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Contraseña: </Form.Label>
                <Form.Control type='password' placeholder='Ingrese una contraseña ' name='Contraseña' onChange={(e)=>ValidarContraseña(e.currentTarget.value)}></Form.Control>
                <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Confirmar contraseña: </Form.Label>
                <Form.Control type='password' placeholder='Confirme su contraseña ' name='Confirmar' onChange={(e)=>ValidarConfirmar(e.currentTarget.value)}></Form.Control>
                <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Genero</Form.Label ><br></br>
                <Form.Check
                    inline type="radio"
                    label="Hombre"
                    name="Genero"
                    onChange={(e)=>ValidarGenero(e.currentTarget.value)}
                />
                <Form.Check
                    inline type="radio"
                    label="Mujer"
                    name="Genero"
                    onChange={(e)=>ValidarGenero(e.currentTarget.value)}
                />
                <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Comentario</Form.Label>
                <Form.Control as='textarea' rows={3} placeholder="Pon un comentario" name="Comentario" onChange={(e)=>ValidarComentario(e.currentTarget.value)}  />
            </Form.Group>

            <Button type="button" variant='primary' onClick={Registrar}>Registrar</Button>

        </Form>
        </>
    )







}

export default Registro


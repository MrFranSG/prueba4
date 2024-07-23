import { obtenerUsuarios, eliminarUsuario } from '@/Firebase/Promesas'
import { Usuario } from '@/Interfaces/IUsuario'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Container, Modal, Nav, Navbar, Table } from 'react-bootstrap'
import { FaEdit, FaSteam, FaUser, FaUserPlus } from "react-icons/fa";
import { IoMdLogIn } from 'react-icons/io'
import { MdDelete } from "react-icons/md";



export const Mostrar = () => {
    const [usuarios,setUsuarios] = useState<Usuario[]>([])
    useEffect(()=>{
        obtenerUsuarios().then((usuarios)=>{
            setUsuarios(usuarios)
        }).catch((e)=>{
            console.log(e)
            alert("Algo salio mal")
        })
    },[])





    const handleEliminar = async () => {
        const [show, setShow] = useState(false);
        const [selectedUsuario, setSelectedUsuario] = useState<Usuario | null>(null);

        const handleClose = () => setShow(false);
        const handleShow = (usuario: Usuario) => {
            setSelectedUsuario(usuario);
            setShow(true);
  };



        if (selectedUsuario) {
          try {
            await eliminarUsuario(selectedUsuario);
            setUsuarios(usuarios.filter(p => p.key !== selectedUsuario.key));
            handleClose();
          } catch (error) {
            console.error("Error al eliminar persona:", error);
            alert("No se pudo eliminar la persona");
          }
        }
      };


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




        <Table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Año de nacimiento</th>
                    <th>Correo</th>
                    <th>Contraseña</th>
                    <th>Genero</th>
                    <th>Comentario</th>
                </tr>
            </thead>
            <tbody>
                {
                    usuarios.map((p)=>{
                        return(
                            <tr>
                                <td>{p.Nombre}</td>
                                <td>{p.Apellido}</td>
                                <td>{p.AnioNacimiento}</td>
                                <td>{p.Correo}</td>
                                <td>{p.Contraseña}</td>
                                <td>{p.Genero}</td>
                                <td>{p.Comentario}</td>

                                <td><Link href={{ pathname: 'Actualizar', query: { key: p.key } }}>
                                    <Button variant='warning'>Actualizar <FaEdit /></Button>
                                    </Link>
                                </td>   
                                 
                                <td><Button variant='danger' onClick={() => handleShow(p)}><MdDelete />Eliminar</Button></td>

                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
        
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Eliminación de registro de datos</Modal.Title>
          </Modal.Header>
          <Modal.Body>¿Está seguro de que quiere eliminar este registro?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={handleEliminar}>
              Eliminar
            </Button>
          </Modal.Footer>
        </Modal>
    
    </>
  )
}
export default Mostrar
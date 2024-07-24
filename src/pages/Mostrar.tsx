import { obtenerUsuarios, eliminarUsuario } from '@/Firebase/Promesas';
import { Usuario } from '@/Interfaces/IUsuario';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button, Container, Modal, Nav, Navbar, Table } from 'react-bootstrap';
import { FaEdit, FaSteam, FaUser, FaUserPlus } from "react-icons/fa";
import { IoMdLogIn } from 'react-icons/io';
import { MdDelete } from "react-icons/md";
import styles from '../styles/Home.module.css';

export const Mostrar = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [show, setShow] = useState(false);
    const [selectedUsuario, setSelectedUsuario] = useState<Usuario | null>(null);

    useEffect(() => {
        obtenerUsuarios().then((usuarios) => {
            setUsuarios(usuarios);
        }).catch((e) => {
            console.log(e);
            alert("Algo salió mal");
        });
    }, []);

    const handleClose = () => setShow(false);
    const handleShow = (usuario: Usuario) => {
        setSelectedUsuario(usuario);
        setShow(true);
    };

    const handleEliminar = async () => {
        if (selectedUsuario) {
            try {
                await eliminarUsuario(selectedUsuario);
                setUsuarios(usuarios.filter(p => p.key !== selectedUsuario.key));
                handleClose();
            } catch (error) {
                console.error("Error al eliminar el usuario:", error);
                alert("No se pudo completar la accion");
            }
        }
    };

    return (
        <>
            <Navbar variant="dark" className={styles.navbar}>
                <Container>
                    <Navbar.Brand as={Link} href="/"><FaSteam /> Steam</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} href="/Registro" className={styles.navLink}><FaUserPlus /> Registro</Nav.Link>
                        <Nav.Link as={Link} href="/Mostrar" className={styles.navLink}><FaUser /> Usuarios</Nav.Link>
                        <Nav.Link as={Link} href="/Login" className={styles.navLink}><IoMdLogIn /> Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Container>
                <Table className={styles.table}>
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
                        {usuarios.map((p) => (
                            <tr key={p.key}>
                                <td>{p.Nombre}</td>
                                <td>{p.Apellido}</td>
                                <td>{p.AnioNacimiento}</td>
                                <td>{p.Correo}</td>
                                <td>{p.Contraseña}</td>
                                <td>{p.Genero}</td>
                                <td>{p.Comentario}</td>
                                <td>
                                    <Link href={{ pathname: 'Actualizar', query: { key: p.key } }}>
                                        <Button variant='warning' className={styles.btnSteam}>Actualizar <FaEdit /></Button>
                                    </Link>
                                </td>
                                <td>
                                    <Button variant='danger' className={styles.btnSteam} onClick={() => handleShow(p)}>
                                        <MdDelete /> Eliminar
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>

            <Modal show={show} onHide={handleClose} animation={false} className={styles.modal}>
                <Modal.Header closeButton className={styles.modalHeader}>
                    <Modal.Title>Eliminación de registro de datos</Modal.Title>
                </Modal.Header>
                <Modal.Body className={styles.modalBody}>
                    ¿Está seguro de que quiere eliminar este registro?
                </Modal.Body>
                <Modal.Footer className={styles.modalFooter}>
                    <Button variant="secondary" className={styles.btnSteam} onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" className={styles.btnSteam} onClick={handleEliminar}>
                        Eliminar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Mostrar;

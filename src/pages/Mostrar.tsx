import { obtenerUsuarios } from '@/Firebase/Promesas'
import { Usuario } from '@/Interfaces/IUsuario'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { FaEdit } from "react-icons/fa";
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






  return (
    <>
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
                                <td>{p.AnioNacimiento}</td>
                                <td>{p.Apellido}</td>
                                <td>{p.Comentario}</td>
                                <td>{p.Contraseña}</td>
                                <td>{p.Correo}</td>
                                <td>{p.Genero}</td>
                                <td>{p.Nombre}</td>
                                <td>
                                    <Link href={{pathname:'Actualizar', query:{key:p.key}}}>
                                    <Button variant='danger'><FaEdit /></Button> 
                                    </Link>
                                    <Button variant='warning'><MdDelete /></Button>
                                    
                                </td>

                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    
    </>
  )
}
export default Mostrar
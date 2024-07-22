import { registrarUsuario } from "@/Firebase/Promesas";
import Form from 'react-bootstrap/Form'
import { Usuario } from "@/Interfaces/IUsuario";
import React, { useState } from "react";
import { Button } from "react-bootstrap";


const intialState:Usuario = {
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
    const [usuario, setUsuario] = useState<Usuario>(intialState)
    const handleUsuario = (name:string,value:string) => {
        setUsuario({...usuario,[name]:value})
    }

    const Registrar = () => {
        registrarUsuario(usuario).then(()=>{
            alert("Usuario registrado con exito")
        }).catch((e)=>{
            console.log(e);
            alert("Hubo un error")
        })
    }

    return (
        <>
        <Form>
            <Form.Group>
                <Form.Label>Nombre: </Form.Label>
                <Form.Control type='text' placeholder='Ingrese el Nombre ' name='Nombre' onChange={(e)=>{handleUsuario(e.currentTarget.name,e.currentTarget.value)}}></Form.Control>
                <Form.Text></Form.Text>
            </Form.Group>
            
            <Form.Group>
                <Form.Label>Apellido: </Form.Label>
                <Form.Control type='text' placeholder='Ingrese el Apellido ' name='Apellido' onChange={(e)=>{handleUsuario(e.currentTarget.name,e.currentTarget.value)}}></Form.Control>
                <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Año de nacimiento: </Form.Label>
                <Form.Control type='date' placeholder='Ingrese el Año de nacimiento ' name='AnioNacimiento' onChange={(e)=>{handleUsuario(e.currentTarget.name,e.currentTarget.value)}}></Form.Control>
                <Form.Text></Form.Text>
            </Form.Group>


            <Form.Group>
                <Form.Label>Correo: </Form.Label>
                <Form.Control type='email' placeholder='Ingrese su correo ' name='Correo' onChange={(e)=>{handleUsuario(e.currentTarget.name,e.currentTarget.value)}}></Form.Control>
                <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Contraseña: </Form.Label>
                <Form.Control type='password' placeholder='Ingrese una contraseña ' name='Contraseña' onChange={(e)=>{handleUsuario(e.currentTarget.name,e.currentTarget.value)}}></Form.Control>
                <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Confirmar contraseña: </Form.Label>
                <Form.Control type='password' placeholder='Confirme su contraseña ' name='Confirmar' onChange={(e)=>{handleUsuario(e.currentTarget.name,e.currentTarget.value)}}></Form.Control>
                <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Genero</Form.Label ><br></br>
                <Form.Check
                    inline type="radio"
                    label="Hombre"
                    name="Genero"
                    onChange={(e)=>{handleUsuario(e.currentTarget.name,e.currentTarget.value)}}
                />
                <Form.Check
                    inline type="radio"
                    label="Mujer"
                    name="Genero"
                    onChange={(e)=>{handleUsuario(e.currentTarget.name,e.currentTarget.value)}}
                />
                <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Comentario</Form.Label>
                <Form.Control as='textarea' rows={3} placeholder="Pon un comentario" name="Comentario" onChange={(e)=>{handleUsuario(e.currentTarget.name,e.currentTarget.value)}}  />
            </Form.Group>

            <Button type="button" variant='primary' onClick={Registrar}>Registrar</Button>

        </Form>
        </>
    )







}

export default Registro


import { actualizarUsuario, obtenerUsuario } from '@/Firebase/Promesas'
import { Usuario } from '@/Interfaces/IUsuario'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'




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

export const Actualizar = () => {
    const router = useRouter()
    const [usuario, setUsuario] = useState<Usuario>(initialState)

    const handleUsuario = (name:string,value:string)=>{
        setUsuario({...usuario,[name]:value})
    }

    useEffect(()=>{
        const key = router.query.key;
        if(key!=undefined && typeof(key)=="string"){
            obtenerUsuario(key).then((p)=>{
                if(p!=undefined){
                    setUsuario(p)
                }
                else{

                }
            })
        }else{

        }
    },[])

    const Modificar = ()=>{
        actualizarUsuario(usuario).then(()=>{
            alert("La actualizacion fue exitosa")
        })
    }

    return (
        <>
        <Form>
            <Form.Group>
                <Form.Label>Nombre: </Form.Label>
                <Form.Control type='text' placeholder='Ingrese el Nombre ' value={usuario.Nombre} name='Nombre' onChange={(e)=>{handleUsuario(e.currentTarget.name,e.currentTarget.value)}}></Form.Control>
                <Form.Text></Form.Text>
            </Form.Group>
            
            <Form.Group>
                <Form.Label>Apellido: </Form.Label>
                <Form.Control type='text' placeholder='Ingrese el Apellido ' value={usuario.Apellido} name='Apellido' onChange={(e)=>{handleUsuario(e.currentTarget.name,e.currentTarget.value)}}></Form.Control>
                <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Año de nacimiento: </Form.Label>
                <Form.Control type='date' placeholder='Ingrese el Año de nacimiento ' value={usuario.AnioNacimiento} name='AnioNacimiento' onChange={(e)=>{handleUsuario(e.currentTarget.name,e.currentTarget.value)}}></Form.Control>
                <Form.Text></Form.Text>
            </Form.Group>


            <Form.Group>
                <Form.Label>Correo: </Form.Label>
                <Form.Control type='email' placeholder='Ingrese su correo ' value={usuario.Correo} name='Correo' onChange={(e)=>{handleUsuario(e.currentTarget.name,e.currentTarget.value)}}></Form.Control>
                <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Contraseña: </Form.Label>
                <Form.Control type='password' placeholder='Ingrese una contraseña ' value={usuario.Contraseña} name='Contraseña' onChange={(e)=>{handleUsuario(e.currentTarget.name,e.currentTarget.value)}}></Form.Control>
                <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Confirmar contraseña: </Form.Label>
                <Form.Control type='password' placeholder='Confirme su contraseña ' value={usuario.Confirmar} name='Confirmar' onChange={(e)=>{handleUsuario(e.currentTarget.name,e.currentTarget.value)}}></Form.Control>
                <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Genero</Form.Label ><br></br>
                <Form.Check
                    inline type="radio"
                    label="Hombre"
                    value={usuario.Genero}
                    name="Genero"
                    onChange={(e)=>{handleUsuario(e.currentTarget.name,e.currentTarget.value)}}
                />
                <Form.Check
                    inline type="radio"
                    label="Mujer"
                    value={usuario.Genero}
                    name="Genero"
                    onChange={(e)=>{handleUsuario(e.currentTarget.name,e.currentTarget.value)}}
                />
                <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Comentario</Form.Label>
                <Form.Control as='textarea' rows={3} placeholder="Pon un comentario" name="Comentario" onChange={(e)=>{handleUsuario(e.currentTarget.name,e.currentTarget.value)}}  />
            </Form.Group>

            <Button type="button" variant='primary' onClick={Modificar}>Actualizar</Button>

        </Form>
        </>
    )







}
export default Actualizar

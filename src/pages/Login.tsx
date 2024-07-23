import { Usuario } from '@/Interfaces/IUsuario';
import { useRouter } from 'next/router';
import React, { useState } from 'react'









export const Login = () => {



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
      
      export const Login = () => {
        const [correo, setCorreo] = useState(initialState.correo);
        const [contraseña, setContraseña] = useState(initialState.contraseña);
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
            router.push('/admin');
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
    <div>Login</div>
  )
}

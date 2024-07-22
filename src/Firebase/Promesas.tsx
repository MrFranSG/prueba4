import { Usuario } from "@/Interfaces/IUsuario";
import { addDoc, collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "./Firebase";



export const registrarUsuario = async(usuario:Usuario)=>{
    const docRef = await addDoc(collection(db,"Usuarios"), usuario);
    
}

export const obtenerUsuarios = async()=>{
    let usuarios:Usuario[] = []
    const querySnapshot = await getDocs(collection(db,"Usuarios"));
    querySnapshot.forEach((doc)=>{
        let usuario:Usuario={
            Apellido:doc.data().Apellido,
            AnioNacimiento:doc.data().AnioNacimiento,
            Comentario:doc.data().Comentario,
            Confirmar:doc.data().Confirmar,
            Contraseña:doc.data().Contraseña,
            Correo:doc.data().Correo,
            Genero:doc.data().Genero,
            Nombre:doc.data().Nombre,
            key:doc.id
        }
        usuarios.push(usuario)
    });
    return usuarios


}

export const obtenerUsuario = async (key:string)=>{
    const docRef = doc(db,"Usuarios",key);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        let usuario:Usuario = {
            Apellido:docSnap.data().Apellido,
            AnioNacimiento:docSnap.data().AnioNacimiento,
            Comentario:docSnap.data().Comentario,
            Confirmar:docSnap.data().Confirmar,
            Contraseña:docSnap.data().Contraseña,
            Correo:docSnap.data().Correo,
            Genero:docSnap.data().Genero,
            Nombre:docSnap.data().Nombre,
            key:docSnap.id
        }
        return usuario

    } else {
        return undefined
    }
}

export const actualizarUsuario = async(p:Usuario)=>{
    const ref = doc(collection(db,"Usuarios",p.key!))
    await updateDoc(ref,{...p})
}






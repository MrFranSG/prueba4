import { Usuario } from "@/Interfaces/IUsuario";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "./Firebase";



export const registrarUsuario = async(usuario:Usuario)=>{
    const docRef = await addDoc(collection(db,"Usuarios"), usuario);
    
}


export const login = async (correo: string, contraseña: string) => {
    const q = query(
        collection(db, "Usuarios"),
        where("correo", "==", correo),
        where("contraseña", "==", contraseña)
    );

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
        return Promise.reject(new Error("Correo o contraseña incorrectos."));
    }

    return { success: true };
};



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
    const ref = doc(db,"Usuarios",p.key!)
    await updateDoc(ref,{...p})
}

export const eliminarUsuario = async(p:Usuario)=>{
    try{
        if (!p.key) {
            throw new Error("Te equivocaste pibe");
          }
        const ref = doc(db,"Usuarios",p.key);
        await deleteDoc(ref);
        console.log("listo");
    } catch(error){
        console.log("error",error);
    }
}

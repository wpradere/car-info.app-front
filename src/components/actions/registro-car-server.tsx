"use server"

import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function carRegistro( formData:FormData){
    const data ={
    marca: formData.get("marca") ,
    modelo:formData.get("modelo") ,
    year:formData.get("year"),
    placa:formData.get("placa"),
    color:formData.get("color")
    }

  const tk = (await cookies()).get("session");
  

try{
  const dataRegister = await axios.post(
    "http://localhost:8002/car/insert",
    data,
    {
      headers: {
        Authorization: `Bearer ${tk?.value}`,
        "Content-Type": "application/json",
      },
    }
  );
  console.log(" - - - - - - ",dataRegister.data)
}catch(error){
  if (axios.isAxiosError(error)) {
    // Esto asegura que 'error' es del tipo AxiosError
    console.error(
      "Error en la solicitud:",
      error.response?.data || error.message
    );
  } else {
    // Manejo para otros tipos de errores que no son de Axios
    console.error("Error desconocido:", error);
  }
}
redirect("/main/crud/list")

}
"use server"

import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function deleteCarserver(formData:FormData)
{

    const placa = formData.get("placa");
    const tk = (await cookies()).get("session");
    const url = `http://localhost:8002/car/deleteCar/${placa}`;


    try{
  const deleteData = await axios.delete(
    url,    
    {
      headers: {
        Authorization: `Bearer ${tk?.value}`,
        "Content-Type": "application/json",
      },
    }
  );
  console.log(" - - - - - - ",deleteData.data)
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
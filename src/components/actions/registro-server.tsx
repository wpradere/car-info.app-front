"use server"
import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";



export default async function registroAxios (currentState: any,
    formData:FormData):Promise<string>{


  const tk = (await cookies()).get("session");
  const data ={
    username: formData.get("username"),
    password: formData.get("password"),
    email:formData.get("email")
  }
  let dataRegister

  try{
       dataRegister = await axios.post(
    "http://localhost:8002/auth/register",
    data
  );
  console.log(" - - - - - - ",dataRegister.data)

  }catch(error){
    if (axios.isAxiosError(error)) {
    console.error(
      "Error en la solicitud:",
      error.response?.data || error.message);
    }else{
        console.error("Error desconocido:", error);
    }
  }
    if (dataRegister?.status ===200){
      redirect("/login");
    }else{
      return "User o Password estan errados ";    
    }
  

}
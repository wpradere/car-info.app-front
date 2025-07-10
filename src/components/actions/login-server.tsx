"use server";
import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function handleChangeServe(currentState: any,
formData: FormData):Promise<string> {

    const data = {
    username: formData.get("user"),
    password: formData.get("password"),
  };
  let response;
  console.log(data.username," ------", data.password);

  try{
    response = await axios.post(
        "http://localhost:8002/auth/login",
        data
    );

    console.log(response);

    if (response.status === 200) {
     const token = response.data.access_token;
    //  const expires = new Date(Date.now() + 15 * 60 * 1000);
    const expires = new Date(Date.now() + 1 * 60 * 60 * 1000);
    (await cookies()).set("session", token, { expires, httpOnly: true, secure: true });   
    }


  }catch(error){
    console.error("Error during login:", error); 
  } 


  if (response?.status ===200){
    redirect("/main/crud/list");
  }else{
    return "User o Password estan errados ";    
  }


}
"use client"
import { useFormState } from "react-dom";
import registroAxios from "../actions/registro-server";


export default function FormRegister() {


    const [state, formAction] = useFormState(registroAxios, null);
    
  return (
    <>
      <div>
        <div className=" flex text-white justify-center items-center py-10 text-4xl">
            <h1>REGISTRO</h1>
        </div>
        
        <div className="flex justify-center   p-3 ">
          <form action={formAction}>
            <div className="flex  flex-col  py-10 justify-center p-16   gap-5 ">
              <label htmlFor="username" className="text-white">
                username
              </label>
              <input
                type="text"
                name="username"
                className="text-black bg-amber-50 rounded px-2"
              />
              <label htmlFor="password" className="text-white ">
                password
              </label>
              <input
                type="text"
                name="password"
                className="text-black bg-amber-50 rounded px-2"
              />
              <label htmlFor="email" className="text-white">
                Correo electronico
              </label>
              <input
                type="text"
                name="email"
                className="text-black bg-amber-50 rounded px-2"
              />
              <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-green-500 p-3 rounded-lg mt-2"
                                            >
                        Registrar
                    </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

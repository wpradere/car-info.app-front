"use client"
import { useFormState } from "react-dom"
import { handleChangeServe } from "../actions/login-server"
import { useActionState } from "react"




export default function FormLogin() {

    const [error,formAction] = useActionState (handleChangeServe,'')
    return (
        <div className="bg-black">
            <div className=" py-25 flex flex-col justify-center items-center">
                <form className="w-1/4" action={formAction}>
                    <h1 className="text-slate-200 font-bold text-4xl mb-4">Login</h1>
                    <label htmlFor="user" className="text-slate-500 mb-2 block text-sm">
                        user:
                    </label>
                    <input
                        name="user"
                        className="p-3 rounded block mb-2 bg-slate-800 text-slate-300 w-full"
                        type="text"
                        placeholder="username"
                    />
                    <label
                        htmlFor="password"
                        className="text-slate-500 mb-2 block text-sm"
                    >
                        Password:
                    </label>
                    <input
                        name="password"
                        type="text"
                        className="p-3 rounded block mb-2 bg-slate-800 text-slate-300 w-full"
                        placeholder="******"
                    />

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-green-500 p-3 rounded-lg mt-2"
                    >
                        Login
                    </button>
                </form>

            </div>
        </div>
    )
}
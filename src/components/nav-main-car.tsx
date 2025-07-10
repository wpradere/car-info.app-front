import Link from "next/link";

export default function NavBarRegister(){
    return(
        <>
            <div className=" flex  py-10  justify-evenly p-2 text-white">
                <Link 
                 href="/main/crud/new"
                 className="{buttonVariants({variant : variant})} bg-amber-100 text-black p-2 rounded-2xl"
                 key="nombre" >
                    Crear carro
                </Link> 
            
            </div>
        </>
    )
}
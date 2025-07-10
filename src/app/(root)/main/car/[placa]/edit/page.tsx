import CarEditServer from "@/components/form/car-edit";
import axios from "axios";
import { cookies } from "next/headers";

export default async function CarEdit({params}: {
    params:{
        placa:string
    }
})
{
    return(
        <div>
        <CarEditServer placa ={params.placa}/>
        </div>
    )
}
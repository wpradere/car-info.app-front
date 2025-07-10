import deleteCarserver from "./delete-car-button";


interface Placa{
    placa:string;
}

export default function CarButtonDelete({placa}:Placa)
{
    return(
        <div >
        <form action={deleteCarserver}>
            <input type="text" name="placa" value={placa} hidden readOnly />
            <button type="submit" 
            className="bg-red-800 text-white p-3 rounded-2xl">Delete</button>
        </form>
        </div>
    )
}
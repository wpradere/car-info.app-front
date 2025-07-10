
import carRegistro from "@/components/actions/registro-car-server";

export default function CarCreate() {      

  return (
    <>
      <div className="  bg-amber-50 text-white w-[25%]  border border-white rounded-lg">
        <div className="text-white text-center text-3xl p-4">
          <h1>Registro de carro </h1>
        </div>
        <form action={carRegistro}>
          <div className="flex  flex-col  py-10 justify-center p-10   ">
            <label htmlFor="marca" className="text-white">
              Marca
            </label>
            <input
              type="text"
              name="marca"
              className="text-white bg-gray-700 rounded px-2"
            />
            <label htmlFor="modelo" className="text-white ">
              Modelo
            </label>
            <input
              type="text"
              name="modelo"
              className="text-white bg-gray-700 rounded px-2"
            />
            <label htmlFor="year" className="text-white">
              Año
            </label>
            <input
              type="text"
              name="year"
              className="text-white bg-gray-700 rounded px-2"
            />
            <label htmlFor="placa" className="text-white">
              Placa
            </label>
            <input
              type="text"
              name="placa"
              className="text-white bg-gray-700 rounded px-2"
            />
            <label htmlFor="color" className="text-white">
              Color
            </label>
            <input
              type="text"
              name="color"
              className="text-white bg-gray-700 rounded px-2"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-green-500 p-3 rounded-lg mt-2 "
            >
              Registrar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

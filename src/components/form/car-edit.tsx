import axios from "axios";
import { cookies } from "next/headers";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import carEditServer from "../actions/car-uodate-server";

async function getData(placa: string) {
  let findCar;
  const tk = (await cookies()).get("session");
  const url = `http://localhost:8002/car/find/${placa}`;

  try {
    findCar = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${tk?.value}`,
        "Content-Type": "application/json",
      },
    });
    console.log(" - - - - - - ", findCar.data);
  } catch (error) {
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
  return findCar?.data;
}

export default async function CarEditServer({ placa }: { placa: string }) {
  const placaData = await getData(placa);

  console.log(" - - - - placa- - - -", placaData);

  return (
    <div className="flex justify-center items-center h-screen ">
      <Card
        key={placaData.placa}
        className="bg-neutral-800   p-1 text-white w-[18%] "
      >
        <CardHeader>
          <CardTitle className="text-xl font-bold p-4">Carro </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 p-5">
          <form action={carEditServer}>
            <div className="flex  flex-wrap bg-slate-950 justify-center items-center gap-4 p-4 w-full">
              <div className="grid gap-2">
                <label
                  htmlFor="marca"
                  className="text-lg font-semibold text-gray-400"
                >
                  Marca
                </label>
                <input
                  type="text"
                  name="marca"
                  defaultValue={placaData?.marca}
                  className="text-xl font-bold text-white"
                />
              </div>
              <div className="grid gap-2">
                <label
                  htmlFor="modelo"
                  className="text-lg font-semibold text-gray-400"
                >
                  Modelo
                </label>
                <input
                  type="text"
                  name="modelo"
                  defaultValue={placaData.modelo}
                  className="text-xl font-bold text-white"
                />
              </div>
              <div className="grid gap-2">
                <label
                  htmlFor="year"
                  className="text-lg font-semibold text-gray-400"
                >
                  Año
                </label>
                <input
                  type="text"
                  name="year"
                  defaultValue={placaData.year}
                  className="text-xl font-bold text-white"
                />
              </div>
              <div className="grid gap-2">
                <label
                  htmlFor="placa"
                  className="text-lg font-semibold text-gray-400"
                >
                  Placa
                </label>
                <input
                  type="text"
                  name="placa"
                  defaultValue={placaData.placa}
                  className="text-xl font-bold text-white"
                />
              </div>
              <div className="grid gap-2">
                <label
                  htmlFor="color"
                  className="text-lg font-semibold text-gray-400"
                >
                  Color
                </label>
                <input
                  type="text"
                  name="color"
                  defaultValue={placaData.color}
                  className="text-xl font-bold text-white"
                />
              </div>
                <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-green-500 p-3 rounded-lg mt-2"
                                            >
                        Registrar
                    </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

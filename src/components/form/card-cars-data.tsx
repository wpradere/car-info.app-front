
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";
import CarButtonDelete from "@/components/actions/car-button-delete";

interface Car {
  marca: string;
  modelo: string;
  year: number;
  placa: string;
  color: string;
}
interface Props {
  dataList: Car[];
}

export default function IndividualCarCard({ dataList }: Props) {
  return (
    <>
      <div className="flex flex-wrap justify-center lg:flex bg-slate-950 gap-4 p-4 w-full ">
        {dataList.map((car) => (
          <Card
            key={car.placa}
            className=" w-[60%] bg-neutral-800 lg:w-[18%] p-3 "
          >
            <CardHeader>
              <CardTitle className="text-xl font-bold p-4">Carro </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4 p-5">
              <div>
                <CardTitle className="text-lg font-semibold text-gray-400">
                  Marca
                </CardTitle>
                <CardDescription className="text-xl font-bold text-white">
                  {car.marca}
                </CardDescription>
              </div>

              <div>
                <CardTitle className="text-lg font-semibold text-gray-400">
                  Modelo
                </CardTitle>
                <CardDescription className="text-xl font-bold text-white">
                  {car.modelo}
                </CardDescription>
              </div>

              <div>
                <CardTitle className="text-lg font-semibold text-gray-400">
                  Año
                </CardTitle>
                <CardDescription className="text-xl font-bold text-white">
                  {car.year}
                </CardDescription>
              </div>

              <div>
                <CardTitle className="text-lg font-semibold text-gray-400">
                  Placa
                </CardTitle>
                <CardDescription className="text-xl font-bold text-white">
                  {car.placa}
                </CardDescription>
              </div>

              <div>
                <CardTitle className="text-lg font-semibold text-gray-400">
                  Color
                </CardTitle>
                <CardDescription className="text-xl font-bold text-white">
                  {car.color}
                </CardDescription>
              </div>
            </CardContent>
            <CardFooter className="flex gap-x-2 justify-end">
              <CarButtonDelete placa={car.placa} />
              <Link href={`/main/car/${car.placa}/edit`}
              className="bg-cyan-900 p-3 rounded-2xl" >Edit</Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}

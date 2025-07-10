import { cookies } from "next/headers";
import * as jose from "jose";
import axios from "axios";
import IndividualCarCard from "@/components/form/card-cars-data";

async function getData() {
  let result;
  let carList;
  const tk = (await cookies()).get("session");

  try {
    carList = await axios.get("http://localhost:8002/car/all", {
      headers: {
        Authorization: `Bearer ${tk?.value}`,
        "Content-Type": "application/json",
      },
    });
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
  return carList?.data;
}

export default async function CarList() {
  const dataList = await getData();


  return (
    <>
      <div >
        <IndividualCarCard dataList={dataList} />
      </div>
    </>
  );
}

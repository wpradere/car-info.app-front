import {topbar} from "@/app/constans"
import Topmainmenu from "./Link-navBar"

export default function Topbar() {
    return (
        <div>
            <div className=" flex top-10 item-center justify-center text-center text-xl px-6  py-6 text-white">
                {topbar.map((item) => (
                    <Topmainmenu key={item.label} {...item} />
                ))}
            </div>
        </div>
    )
}
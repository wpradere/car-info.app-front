import Link from "next/link";
import {ItemTopbarInterface} from "@/interfaces/item-topbar-interface";

export default function Topmainmenu({route, label}:ItemTopbarInterface) {
    return (
        <div>
            <Link href={route} key={label}>
            <p>{label}</p>
            </Link>
        </div>
    );
}
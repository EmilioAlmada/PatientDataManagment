import React from "react"
import { Link } from "react-router"
import type { Patient } from "../types"
import { PatientDetailCard } from "../Components/Screens/Patient/PatientDetailCard"
import { ArrowLeftIcon } from "@heroicons/react/16/solid"

const Patient: React.FC = () => {
    return (
        <div className="p-1 flex flex-col gap-2">
            <Link to="/" className="flex align-top gap-1"><ArrowLeftIcon className="size-4 text-black" /> Back</Link>
            <PatientDetailCard />
        </div >
    )
}

export default Patient



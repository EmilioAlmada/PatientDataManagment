import React from "react"
import { Route, Routes } from "react-router"
import Home from "../Pages/Home"
import Patient from "../Pages/Patient"

const MainRouter: React.FC = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/patient" element={<Patient />} />
        </Routes>
    )
}
export default MainRouter
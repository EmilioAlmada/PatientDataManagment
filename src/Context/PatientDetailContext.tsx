import React, { ReactNode, SetStateAction, useContext, useState } from "react"
import { Patient } from "../types"

interface IPatientDetailContext {
    patientDetail: Patient
    setPatientDetail: React.Dispatch<SetStateAction<Patient>>
}

interface PatientDetailProviderProps {
    children: ReactNode
}

export const PatientDetailContext = React.createContext<IPatientDetailContext | undefined>(undefined)

export const initialPatientState = {
    id: '',
    name: '',
    avatar: '',
    description: '',
    website: '',
    createdAt: '',
}

const PatientDetailProvider: React.FC<PatientDetailProviderProps> = ({ children }) => {
    const [patientDetail, setPatientDetail] = useState<Patient>(initialPatientState)

    const context = {
        patientDetail,
        setPatientDetail
    }

    return <PatientDetailContext.Provider value={context}>{children}</PatientDetailContext.Provider>
}

export const usePatientDetailContext = () => {
    const patientDetailContext = useContext(PatientDetailContext)
    if (patientDetailContext) {
        return patientDetailContext
    }
    throw 'Context is not defined'
}

export default PatientDetailProvider

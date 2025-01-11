import React, { ReactNode, SetStateAction, useContext, useState } from "react"
import type { Patient } from "../types"

interface IPatientListContext {
    patientList: Patient[]
    setPatientList: React.Dispatch<SetStateAction<Patient[]>>
    addPatient: (newPatient: Patient) => void
    removePatient: (patientId: string) => void
    editPatient: (patient: Patient) => void
}

interface PatientListProviderProps {
    children: ReactNode
}

export const PatientListContext = React.createContext<IPatientListContext | undefined>(undefined)


const PatientListProvider: React.FC<PatientListProviderProps> = ({ children }) => {
    const [patientList, setPatientList] = useState<Patient[]>([])

    const addPatient = (patientToAdd: Patient) => {
        const sortedPatients = patientList.sort((a: Patient, b: Patient) => Number(a.id) - Number(b.id))
        const lastId = sortedPatients[0].id
        const newPatient = { ...patientToAdd, id: lastId + 1 }
        setPatientList([...patientList, newPatient])
    }

    const removePatient = (patientId: string) => {
        const newPatientList = patientList.filter((patient) => patientId !== patient.id)
        setPatientList(newPatientList)
    }

    const editPatient = (patient: Patient) => {
        const editedPatientList = patientList.map((p) => {
            if (p.id === patient.id) {
                return patient
            } else {
                return p
            }
        })
        setPatientList(editedPatientList)
    }

    const context = {
        patientList,
        setPatientList,
        addPatient,
        editPatient,
        removePatient,
    }

    return <PatientListContext.Provider value={context}>{children}</PatientListContext.Provider>
}

export const usePatientListContext = () => {
    const patientListContext = useContext(PatientListContext)
    if (patientListContext) {
        return patientListContext
    }
    throw 'Context is not defined'
}

export default PatientListProvider

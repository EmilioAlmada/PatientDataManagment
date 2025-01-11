import React from "react"
import DataGrid, { DataItem } from "../../Common/DataGrid"
import { useNavigate } from "react-router"
import { usePatientDetailContext } from "../../../Context/PatientDetailContext"
import { Patient } from "../../../types"

const PatientDataGrid: React.FC<{ data: any[] }> = ({ data = [] }) => {
    const navigate = useNavigate()
    const { setPatientDetail } = usePatientDetailContext()
    const selectItem = (item: DataItem) => {
        const patient: Patient = {
            id: item.id || '',
            name: item.name || '',
            avatar: item.avatar || '',
            description: item.description || '',
            website: item.website || '',
            createdAt: item.createdAt || '',
        }
        setPatientDetail(patient)
        navigate('/patient')
    }

    const columns = [
        {
            key: "id",
            label: "Id",
            render: (value: any) => <span>{value}</span>,
        },
        {
            key: "name",
            label: "Name",
            render: (value: any) => <span className="font-bold text-blue-500">{value}</span>,
        },
        {
            key: "website",
            label: "Web Site",
            render: (value: any) => <span className="italic">{value}</span>,
        },
        {
            key: "action",
            label: "More",
            render: (value: any, item: DataItem) => <span className="italic"><button key={value} onClick={() => selectItem(item)}>More</button></span >,
        },
    ]

    return (
        <div className="p-4 flex flex-col gap-2">
            <div className="flex justify-end">
                <button className="bg-blue-500 p-2 rounded-md max-w-40" onClick={() => { }}>+ Add Record</button>
            </div>
            <DataGrid data={data} columns={columns} rowStyle={(item) => {
                return !item.name && { backgroundColor: 'red' }
            }} />
        </div>
    )
}

export default PatientDataGrid
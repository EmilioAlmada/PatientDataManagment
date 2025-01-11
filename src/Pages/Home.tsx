import { useEffect, useState } from "react"
import { usePatientListContext } from "../Context/PatientsListContext"
import PatientDataGrid from "../Components/Screens/Patient/PatientsList"

const Home: React.FC = () => {
    const [loading, setLoading] = useState(false)
    const { patientList, setPatientList } = usePatientListContext()
    useEffect(() => {
        const fetchApi = async () => {
            try {
                setLoading(true)
                const res = await fetch("https://63bedcf7f5cfc0949b634fc8.mockapi.io/users")
                const response = await res.json()
                if (response) {
                    setPatientList(response)
                }
            } catch (e) {
                console.error(e)
            } finally {
                setLoading(false)
            }
        }
        if (patientList.length === 0) {
            fetchApi()
        }
    }, [])

    return (
        <div className="flex justify-center flex-col text-center">
            <h1 className="text-2xl font-semibold mb-4">Patients List</h1>
            {loading ? <h1>Loading...</h1> :
                <PatientDataGrid data={patientList} />
            }
        </div >
    )
}
export default Home

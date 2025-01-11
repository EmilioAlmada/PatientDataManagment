import "./App.css"
import ModalWraper from "./Components/Modals/ModalWraper"
import ModalProvider from "./Context/ModalContext"
import PatientDetailProvider from "./Context/PatientDetailContext"
import PatientListProvider from "./Context/PatientsListContext"
import MainRouter from "./Routes"


const App = () => {
    return (
        <ModalProvider>
            <PatientListProvider>
                <PatientDetailProvider>
                    <ModalWraper />
                    <MainRouter />
                </PatientDetailProvider>
            </PatientListProvider>
        </ModalProvider>
    )
}
export default App

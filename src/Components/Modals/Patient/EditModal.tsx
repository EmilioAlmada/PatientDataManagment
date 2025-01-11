import React, { useState } from "react";
import { usePatientDetailContext } from "../../../Context/PatientDetailContext";
import type { Patient } from "../../../types";
import { usePatientListContext } from "../../../Context/PatientsListContext";
import { useModalContext } from "../../../Context/ModalContext";
import Button from "../../Common/Button";
import { FromInput } from "../../Common/FromInput";


export const EditModal: React.FC = () => {
    const { setPatientDetail, patientDetail } = usePatientDetailContext();
    const { closeModal } = useModalContext()
    const [values, setValues] = useState<Patient>(patientDetail);
    const { editPatient } = usePatientListContext();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const field = event.target.name;
        const value = event.target.value;
        setValues({
            ...values,
            [field]: value
        });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setPatientDetail(values);
        editPatient(values);
        closeModal()
        console.log('Records updated successfully');
    };

    return (
        <form className="flex flex-col gap-2 w-full">
            <FromInput label="Id" name="id" disabled key='id' onChange={handleChange} type="text" value={values?.id} />
            <FromInput label="Name" name="name" key='name' onChange={handleChange} type="text" value={values?.name} />
            <FromInput label="Website" name="website" key='website' onChange={handleChange} type="text" value={values?.website} />
            <FromInput label="Description" textArea name="description" key='description' onChange={handleChange} value={values?.description} />
            <Button onClick={handleSubmit} label="Confirm" />
        </form>
    );
};

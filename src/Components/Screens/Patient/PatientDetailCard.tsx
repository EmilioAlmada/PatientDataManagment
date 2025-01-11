import React from "react";
import { useModalContext } from "../../../Context/ModalContext";
import { usePatientDetailContext } from "../../../Context/PatientDetailContext";
import Button from "../../Common/Button";
import { EDIT_MODAL } from "../../Modals";
import DetailItem from "../../Common/DetailItem";


export const PatientDetailCard: React.FC = () => {
    const { patientDetail } = usePatientDetailContext();
    const { openModal } = useModalContext();

    const editPatient = () => {
        openModal(EDIT_MODAL, 'Edit patient information');
    };

    return (
        <div className="max-w-96 border rounded-md p-2">
            <h1 className="font-bold text-2xl">Patient Detail</h1>
            <div className="flex flex-col gap-2">
                <DetailItem label="Id" value={patientDetail.id} />
                <DetailItem label="Name" value={patientDetail.name} />
                <DetailItem label="Website" value={patientDetail.website} />
                <DetailItem label="Description" value={patientDetail.description} />
            </div>
            <Button onClick={() => editPatient()} label="Edit" />
        </div>
    );
};


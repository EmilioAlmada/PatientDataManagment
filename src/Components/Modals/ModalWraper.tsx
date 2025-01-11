import React from 'react';
import { useModalContext } from '../../Context/ModalContext';
import { XMarkIcon } from '@heroicons/react/16/solid';
import { modals } from '.';


type ModalKeyType = keyof typeof modals

const ModalWraper: React.FC = () => {
    const { modalStatus, closeModal } = useModalContext()
    const { open, modal, title } = modalStatus
    if (!open) return undefined;

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
            <div className=" bg-white p-6 rounded-lg shadow-lg  w-96">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <button
                        onClick={closeModal}
                        className="text-gray-500 hover:text-gray-800"
                        aria-label="Close Modal"
                    >
                        <XMarkIcon className="size-6 text-black" />
                    </button>
                </div>
                <div className="mt-4">
                    {modals[modal as ModalKeyType]}
                </div>
            </div>
        </div>
    );
};

export default ModalWraper;
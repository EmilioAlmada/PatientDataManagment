import React, { ReactNode, useContext, useState } from "react"

interface ModalStatus {
    open: boolean
    modal: string
    title: string 
}

interface IModalContext {
    modalStatus: ModalStatus
    openModal: (modal: string, title: string) => void
    closeModal: () => void
}

interface ModalProviderProps {
    children: ReactNode
}

export const ModalContext = React.createContext<IModalContext | undefined>(undefined)


const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
    const [modalStatus, setModalStatus] = useState<ModalStatus>({ open: false, modal: '', title: '' })

    const openModal = (modal: string, title: string = '') => {
        setModalStatus({
            open: true,
            modal: modal,
            title: title,
        })
    }

    const closeModal = () => {
        setModalStatus({
            open: false,
            modal: '',
            title: ''
        })
    }

    const context = {
        modalStatus,
        openModal,
        closeModal
    }

    return <ModalContext.Provider value={context}>{children}</ModalContext.Provider>
}

export const useModalContext = () => {
    const modalContext = useContext(ModalContext)
    if (modalContext) {
        return modalContext
    }
    throw 'Context is not defined'
}

export default ModalProvider

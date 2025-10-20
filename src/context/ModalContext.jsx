import {createContext, useContext, useState} from "react";

const ModalContext = createContext(null);

export function ModalProvider({children}) {

    const [isModalActive, setModalActive] = useState(false)

    const closeModal = () => {
        setModalActive(false)
    }

    return (
        <ModalContext.Provider value={{
            isModalActive,
            setModalActive,
            closeModal
        }}
        >
            {children}
        </ModalContext.Provider>
    );
}

export const useModal = () => useContext(ModalContext);

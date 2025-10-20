import {createContext, useContext, useState} from "react";

const ModalContext = createContext(null);

export function ModalProvider({children}) {

    const [isModalActive, setModalActive] = useState(false)

    return (
        <ModalContext.Provider value={{
            isModalActive,
            setModalActive
        }}
        >
            {children}
        </ModalContext.Provider>
    );
}

export const useModal = () => useContext(ModalContext);

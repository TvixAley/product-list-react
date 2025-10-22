import {createContext, useContext, useEffect, useState} from "react";

const ModalContext = createContext(null);

export function ModalProvider({children}) {

    const [isModalActive, setModalActive] = useState(false)

    const closeModal = () => {
        setModalActive(false)

    }

    useEffect(() => {
        if (isModalActive) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => (document.body.style.overflow = '');
    }, [isModalActive]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') closeModal();
        };
        if (isModalActive) document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isModalActive]);

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

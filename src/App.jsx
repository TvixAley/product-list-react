import './styles/App.css'
import ProductList from "./components/ProductList/ProductList.jsx";
import ProductCart from "./components/ProductCart/ProductCart.jsx";
import CustomModal from "./components/UI/CustomModal/CustomModal.jsx";
import OrderConfirmation from "./components/OrderConfirmation/OrderConfirmation.jsx";
import {useModal} from "./context/ModalContext.jsx";


function App() {

    const {isModalActive, setModalActive, closeModal} = useModal()

    return (
        <main>
            <ProductList/>
            <ProductCart setModalActive={setModalActive}/>
            <CustomModal isActive={isModalActive} onClose={closeModal}>
                <OrderConfirmation/>
            </CustomModal>
        </main>
    )
}

export default App

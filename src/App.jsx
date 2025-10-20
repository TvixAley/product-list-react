import './styles/App.css'
import ProductList from "./components/ProductList/ProductList.jsx";
import ProductCart from "./components/ProductCart/ProductCart.jsx";
import CustomModal from "./components/UI/CustomModal/CustomModal.jsx";
import OrderConfirmation from "./components/OrderConfirmation/OrderConfirmation.jsx";
import {useModal} from "./context/ModalContext.jsx";


function App() {

    const {isModalActive, setModalActive} = useModal()

    return (
        <main>
            <h1 className={'visually-hidden'}>Delicious Desserts</h1>
            <ProductList/>
            <ProductCart setModalActive={setModalActive}/>
            <CustomModal isActive={isModalActive}>
                <OrderConfirmation/>
            </CustomModal>
        </main>
    )
}

export default App

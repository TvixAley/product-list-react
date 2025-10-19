import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import {CartProvider} from "./context/CartContext.jsx";

async function enableMocking() {
    if (import.meta.env.DEV || window.location.hostname.includes('github.io')) {
        const { worker } = await import('./mock-server/browser');

        const isGitHubPages = window.location.hostname.includes('github.io');

        await worker.start({
            serviceWorker: {
                url: isGitHubPages
                    ? '/product-list-react/mockServiceWorker.js'
                    : '/mockServiceWorker.js',
            },
        });
    }
}


enableMocking().then(() => {
    createRoot(document.getElementById('root')).render(
        <StrictMode>
            <CartProvider>
                <App />
            </CartProvider>
        </StrictMode>
    );
});
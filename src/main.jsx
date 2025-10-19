import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'

async function enableMocking() {
    if (import.meta.env.DEV || window.location.hostname.includes('github.io')) {
        const { worker } = await import('./mock-server/browser');
        await worker.start({
            serviceWorker: {
                url: '/mockServiceWorker.js',
            },
        });
    }
}

enableMocking().then(() => {
    createRoot(document.getElementById('root')).render(
        <StrictMode>
            <App />
        </StrictMode>
    );
});
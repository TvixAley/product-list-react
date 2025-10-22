import { http, HttpResponse, delay} from 'msw';
import data from './data.json'

export const handlers = [
    http.get('/api/products', async () => {
        await delay(100)
        return HttpResponse.json(data);
    }),
];

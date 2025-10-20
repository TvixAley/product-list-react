import { http, HttpResponse, delay} from 'msw';
import data from './data.json'

export const handlers = [
    http.get('/api/products', async () => {
        await delay(300)
        return HttpResponse.json(data);
    }),
];

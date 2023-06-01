import axios from 'axios';
const API_BASE_URL = "http://127.0.0.1:3000/api/"

test('API server is running', async () => {
    const response = await axios.get<{ message: string }>(API_BASE_URL + "ping");

    expect(response.status).toBe(200);
    expect(response.data.message).toBe('Pong');
});
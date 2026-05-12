import api from '../lib/api';
export async function login(email, password) {
    return api.post('/login', { email, password });
}

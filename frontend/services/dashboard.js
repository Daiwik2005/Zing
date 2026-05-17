import api from '../lib/api';
export async function getDashboardData(id) {
    return api.get('/dashboard',{
        params: {id}
    });
}

import axios from 'axios';

let baseURL = 'http://localhost:5000';

const instance = axios.create({ baseURL });

class ApplicationService {
    loginUser = async ({ username, password }: { username: string; password: string }) => {
        console.log(username, password);

        try {
            const response = await instance.post('/api/users/login', { username: username, password: password });

            return response;
        } catch (error) {
            console.error('Error during the login-user request: ', error);
            throw error;
        }
    };
    registerUser = async ({ username, password }: { username: string; password: string }) => {
        try {
            const response = await instance.post('/api/users/register', { username, password });
            return response;
        } catch (error) {
            console.error('Error during the register-user request: ', error);
            throw error;
        }
    };
    getCities = async () => {
        try {
            const response = await instance.get('/api/cities/get-cities');
            return response;
        } catch (error) {
            console.error('Error during the register-user request: ', error);
            throw error;
        }
    };
}

const AppService = new ApplicationService();

export default AppService;

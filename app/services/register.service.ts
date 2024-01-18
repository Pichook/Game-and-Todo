import axios from "axios";


const PORT: string | number = process.env.PORT || 8080;

const API_URL:string = `http://localhost:${PORT}/api/user`;

class RegisterService {
    async register(name: string, email: string, password: string) {
        const response = await axios.post(API_URL + `/register`, {
            name,
            email,
            password
        });

        return response.data;
    }
}

export default new RegisterService();
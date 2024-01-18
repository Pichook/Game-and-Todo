import axios from "axios";
import { useRouter } from 'next/navigation'


const PORT: string | number = process.env.PORT || 8080;
const API_URL: string = `http://localhost:${PORT}/api/user`;

class LoginService {
    private router = useRouter();
    async login(email: string, password: string) {
        const response = await axios.post(API_URL + `/login`, {
            email,
            password
        });
        this.router.push("/admin");
        return response.data;
    }
}

export default new LoginService();
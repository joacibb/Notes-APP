import axios from "axios";

const USERS_REST_API_URL = 'http://localhost:8080/api/notes'

class UserService{

    getNotes(){
        axios.get(USERS_REST_API_URL).then(r => r.data);
    }
}

export default new UserService()
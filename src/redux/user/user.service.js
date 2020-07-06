import {authHeader} from "../../helpers/auth-header";
import axios from "axios";

export const userService = {
    login,
    logout
    // getAll
};

async function login(email, password) {
    await axios.post('http://localhost:5010/login/',
        {email, password},
        {withCredentials: true}
    )
        .then(handleResponse)
        .then(user =>{
            console.log(JSON.stringify(user))
            localStorage.setItem('user', JSON.stringify(user))
        })
        .catch(e=>{

        })
}
function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        if(response.status === 200) {
            return data;
        }
    });
}

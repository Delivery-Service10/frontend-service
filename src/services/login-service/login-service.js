import axios from 'axios';

async function loginService(email, password){
    await axios.post('http://localhost:5010/login/',
        {email, password},
        {withCredentials: true}
    )
        .then(response=>{
            handleResponse(response)
        })
        .catch(e=>{
            console.log(e)
            localStorage.removeItem('user')
        })
}

function handleResponse(response) {
    if (response.status !== 200){
        localStorage.removeItem('user')
    }else {
        localStorage.setItem('user', response.data.user)
    }
}
export default loginService;
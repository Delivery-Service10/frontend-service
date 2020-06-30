import React from "react";
import axios from 'axios';
import './login.styles.scss';
import FormInput from "../../form-input/form-input.component";
import CustomButton from "../../custom-button/custom-button.component";


class LoginPage extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            email: '',
            password:''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;
        await axios.post('http://localhost:5010/login/',
            {email, password},
            {withCredentials: true}
        )
            .then(response =>{
                // console.log(response.data['Name'])
                localStorage.setItem('Name', response.data['Name']);

            })
            .catch(e =>{
                console.log(e)
            })
    }
    handleSecond = async event => {
        event.preventDefault();
        await axios.post('http://localhost:5010/test/',
            {},
            {withCredentials: true}
        )
            .then(response =>{
            })
            .catch(e =>{
                console.log(e)
            })
    }
    handleChange = async event =>{
        const {value, name}= event.target;
        await this.setState({[name]:value});
    }
    render() {
        return(
            <div>
                <h2>I already have an account</h2>
                <span>Enter email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email"
                               type="email"
                               value={this.state.email}
                               handleChange={this.handleChange}
                               label="email"
                               required/>
                    <FormInput name="password"
                               type="password"
                               value={this.state.password}
                               handleChange={this.handleChange}
                               label="password"
                               required/>

                <div className="buttons">
                    <CustomButton type="submit">
                        Sign In
                    </CustomButton>

                </div>
                </form>
            </div>
        );
    }

}
export default LoginPage;
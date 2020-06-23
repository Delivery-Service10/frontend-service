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


    handleSubmit = event => {

    }


    handleChange = async event =>{
        const {value, name}= event.target;
        await this.setState({[name]:value});

        // Don't remove, I'm using this as template. Uyiren
        // axios.get('http://127.0.0.1:5000/store/')
        //     .then(function (response) {
        //         // handle success
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         // handle error
        //         console.log(error);
        //     })
        //     .finally(function () {
        //         // always executed
        //     });

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

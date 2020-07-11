import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../../custom-button/custom-button.component";
import loginService from "../../../services/login-service/login-service";
class LoginFormComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            email:'',
            password:'',

        }
    }
    handleSubmit = async event =>{
        event.preventDefault();
        const {email, password}=this.state;
        await loginService(email,password)
    }
    handleChange = async event =>{
        const {value, name}= event.target;
        await this.setState({[name]:value});
    }

    render() {
        return(
            <div>
                <h2>I ALREADY HAVE AN ACCOUNT</h2>
                <span>Enter email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email"
                               type="email"
                               value={this.state.email}
                               handleChange={this.handleChange}
                               label="email"
                               required
                    />
                    <FormInput name="password"
                               type="password"
                               value={this.state.password}
                               handleChange={this.handleChange}
                               label="password"
                               required
                    />
                    <div className="buttons">
                        <CustomButton type="submit">
                            Login
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }


}

export default LoginFormComponent;
import React from "react";
import axios from 'axios';
import './create-account.styles.scss';
import FormInput from "../../form-input/form-input.component";
import CustomButton from "../../custom-button/custom-button.component";

class CreateAccountPage extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            first_name:'',
            last_name:'',
            email: '',
            password:'',
            confirm_password:''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const {first_name, last_name, email, password} = this.state;
        await axios.post('http://127.0.0.1:5010/create-account/', {first_name, last_name,email, password})
            .then(response =>{
                console.log(response)
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
                    <FormInput name="first_name"
                               type="text"
                               value={this.state.first_name}
                               handleChange={this.handleChange}
                               label="First Name"
                               required/>
                    <FormInput name="last_name"
                               type="text"
                               value={this.state.last_name}
                               handleChange={this.handleChange}
                               label="Last Name"
                               required/>
                    <FormInput name="email"
                               type="email"
                               value={this.state.email}
                               handleChange={this.handleChange}
                               label="Email"
                               required/>
                    <FormInput name="password"
                               type="password"
                               value={this.state.password}
                               handleChange={this.handleChange}
                               label="Password"
                               required/>
                    <FormInput name="confirm_password"
                               type="password"
                               value={this.state.confirm_password}
                               handleChange={this.handleChange}
                               label="Confirm Password"
                               required/>

                    <div className="buttons">
                        <CustomButton type="submit">
                            Create Account
                        </CustomButton>

                    </div>
                </form>
            </div>
        );
    }

}
function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
        end = new Date().getTime();
    }
}
export default CreateAccountPage;


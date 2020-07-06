import React from "react";
import axios from 'axios';
import './login.styles.scss';
import FormInput from "../../form-input/form-input.component";
import CustomButton from "../../custom-button/custom-button.component";
// import {setCurrentUser} from "../../../redux/user/user.actions";
import {connect} from 'react-redux';
import {userActions} from '../../../redux/user/user.actions'


class LoginPage extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            email: '',
            password:'',
            submitted: false
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit = async event => {
        event.preventDefault();
        this.setState({submitted: true})
        const {email, password} = this.state;
        const {dispatch} = this.props;
        if (email && password){
            dispatch(userActions.login(email, password))
        }
    }
    handleSecond = async event => {
        event.preventDefault();
        await axios.post('http://localhost:5010/test/',
            {},
            {withCredentials: true}
        )
            .then(response =>{
                // console.log(response)
            })
            .catch(e =>{
            })
    }
    handleChange = async event =>{
        const {value, name}= event.target;
        await this.setState({[name]:value});
    }
    render() {
        const {loggingIn} = this.props;
        const {username, password, submitted} = this.state
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
function mapStateToProps(state){
    const {loggingIn} = state.authentication;
    return{
        loggingIn
    };
}
// const mapDispatchToProps = dispatch => ({
//     // setCurrentUser: user =>dispatch(setCurrentUser(user))
// });
const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export  {connectedLoginPage as LoginPage};

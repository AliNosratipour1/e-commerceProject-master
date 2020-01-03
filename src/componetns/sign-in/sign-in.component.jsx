import React from 'react';
import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          email: '',
          password: ''  
         }
    }
handelSubmit = event =>{
    event.preventDefault();
    this.setState({email: '', password:''})
}

  handelChange = event =>{
      const {value, name} = event.target;
      this.setState({[name]:value})
  }

    render() { 
        return (
            
            <div className="sign-in">
              <h2>I already have an account</h2>
              <span>Sign-in with your email and password</span>
              <form onSubmit={this.handelSubmit}>
                  <FormInput
                    type="email"
                    name="email" 
                    value={this.state.email}
                    label="email"
                    handelChange={this.handelChange}
                    required/>
                  
                  <FormInput
                   type="password"
                   name="password"
                   value={this.state.password}
                   label="password"
                   handelChange={this.handelChange}
                   required/>
                  
                  <CustomButton type="submit" >Sign In</CustomButton>
              </form>
            </div>
          );
    }
}
 
export default SignIn;
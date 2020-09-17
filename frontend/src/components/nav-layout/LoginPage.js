import React, { Component } from 'react'

class Login extends Component {
    state={
        email:'',
        pass:''
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
    
    }

    render() {
        return (
            <div className='container'>
                <div className='login'>
                <h5>Login here !!!</h5>
                <form onSubmit={ this.handleSubmit }>
                   
                   <div className="form-group">
                       <label htmlFor="email">Email</label>
                       <input type="eamil" className="form-control" placeholder="Enter email" onChange={ this.handleChange } id="email" />
                   </div>

                   <div className="form-group">
                       <label htmlFor="pass">Password</label>
                       <input type="password" className="form-control" placeholder="Enter password" onChange={ this.handleChange } id="pass" />
                   </div>

                   <button type="submit" className="btn btn-primary">Login</button>
                </form>
                </div>
            </div>
        )
    }
}

export default Login

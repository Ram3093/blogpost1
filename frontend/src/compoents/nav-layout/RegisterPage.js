import React, { Component } from 'react'




class Register extends Component {
    state={
        fname:"",
        lname:"",
        email:"",
        pass:""
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state)


    }
    render() {
        return (
            <div className='container'>
               <div className='register'>
               <h5>Register here !!!</h5>
                <form onSubmit={ this.handleSubmit }>
                   <div className="form-group">
                     <label htmlFor="fname">First name</label>
                     <input type="text" className="form-control" placeholder="Enter first name" onChange={ this.handleChange } id="fname" />
                   </div>
                   <div className="form-group">
                     <label htmlFor="lname">Last name</label>
                     <input type="text" className="form-control" placeholder="Enter last name" onChange={ this.handleChange } id="lname" />
                   </div>
                   <div className="form-group">
                       <label htmlFor="email">Email</label>
                       <input type="eamil" className="form-control" placeholder="Enter email" onChange={ this.handleChange } id="email" />
                   </div>
                   <div className="form-group">
                       <label htmlFor="pass">Password</label>
                       <input type="password" className="form-control" placeholder="Enter password" onChange={ this.handleChange } id="pass" />
                   </div>
                   <button type="submit" className="btn btn-primary">Register</button>
                </form>
</div>

            </div>
        )
    }
}

export default Register

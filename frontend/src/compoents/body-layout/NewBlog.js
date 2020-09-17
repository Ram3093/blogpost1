import React, { Component } from 'react'



class NewBlog extends Component {
    state={
        title:"",
        snippet:"",
        body:""
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
                <div className="create-blog content">
                <form onSubmit={ this.handleSubmit } >
                   <div className="form-group">
                     <label htmlFor="title">Blog title</label>
                     <input type="text" className="form-control" placeholder="Enter blog title" onChange={ this.handleChange } id="title" />
                   </div>
                   <div className="form-group">
                     <label htmlFor="snippet">Blog snippet</label>
                     <input type="text" className="form-control" placeholder="Enter blog snippet" onChange={ this.handleChange } id="snippet" />
                   </div>
                   <div className="form-group">
                       <label htmlFor="body">Blog body</label>
                       <textarea className="form-control" rows="5" onChange={ this.handleChange } id="body" placeholder="Enter blog body" ></textarea>
                   </div>
                   <button type="submit" className="btn btn-primary">New blog</button>
                </form>
                </div>
 
            </div>
        )
    }
}

export default NewBlog




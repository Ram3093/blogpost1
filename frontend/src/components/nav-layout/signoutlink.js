import React  from 'react'
import { Link } from 'react-router-dom'

const SignOut =()=>{
        return (
            
                <ul className="navbar-nav"  >
                <li className='nav-item'>   <Link className='nav-link  color-black' to='/blogs/signin'>SignIn</Link>  </li>    
                <li className='nav-item' >   <Link className='nav-link color-black'  to='/blogs/login'>Login</Link>  </li>    
                </ul>
           
        )
    
}

export default SignOut

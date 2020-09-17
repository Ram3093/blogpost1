import React  from 'react'
import { Link } from 'react-router-dom'

 const SignInLink=()=>{
        return (
          
                <ul className="navbar-nav justify-content-center">
                     <li className='nav-item' ><Link className='nav-link color-black' to="/blogs">Blogs</Link></li>
                     <li className='nav-item' ><Link className='nav-link color-black' to="/blogs/about">About</Link></li>
                     <li className='nav-item' ><Link className='nav-link color-black' to="/blogs/create">New Blog</Link></li>
               </ul>
          
        )
    
}

export default SignInLink

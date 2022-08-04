import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import './navbar.css';



const NavBar =()=>{

    const navLinkStykes=  ({isActive})=>{
        return{
            fontWeight:isActive?'bold' :'normal',
            textDecoration:isActive?'none':'underline'

        }
    }

    return(

        <div style={{width:"100"}}>

            <ul >
                <li className='list'><NavLink style={navLinkStykes} to="/" exact activeStyle={{color:"red"}}>home</NavLink></li>
                <li className='list2'><NavLink style={navLinkStykes} to="/myresume">CV</NavLink></li>
            </ul>
            

        </div>
           

       
      
    )
    
}
export default NavBar;
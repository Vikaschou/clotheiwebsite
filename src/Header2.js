
import React from 'react'
import "./Header.css"
// import Footer from './Footer'
import {Link} from "react-router-dom"


const Header = () => {


    return (
      

        <>
            <header className="Header__Conta">
            
                <nav>
                  
                   
                    {/* links////// */}
                    <ul  className="nav__bar_links" style={{color:"white"}}>
                        <Link to="/" className="link_deco" ><li>Home</li></Link>
                        <Link to="./Saved" className="link_deco"><li>Saved</li></Link>
                        <Link to className="link_deco"><li>Account</li></Link>
                        <Link to="./About" className="link_deco"><li>About-us</li></Link>
                    </ul>
 {/* end of links////// */}
                </nav>
            </header>
            
        </>
    )
}

export default Header
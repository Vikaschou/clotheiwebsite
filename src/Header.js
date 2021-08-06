
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
                        <Link  className="link_deco"><li>Account</li></Link>
                        <Link to="./About" className="link_deco"><li>About-us</li></Link>
                    </ul>
 {/* end of links////// */}
 {/* scroll buttom */}
 <div className="container__of_Btn">
    <button className="scroll__buttom_SC" onClick={()=>{ window.scrollTo({top:850,behavior:"smooth"})}}>Start Customisation</button>
 </div>
 {/* end of scroll buttom */}
                </nav>
            </header>
            
        </>
    )
}

export default Header

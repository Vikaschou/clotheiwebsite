import React from "react"
import manimage1 from "./images/man-t-shirt.png"
import manimage2 from "./images/man-shirts.jpg"
import manimage4 from "./images/man-pants.jpg"
import manimage5 from "./images/man-jeans.jpg"
import manimage6 from "./images/man-jackets.jpg"
import manimage3 from "./images/man-hoodeis.jpg"
import "./Product.css";
import { Link } from "react-router-dom"
import womenimage1 from "./images/women-t-shirts11.jpg"
import womenimage2 from "./images/women-jeans-11.jpg"
import womenimage3 from "./images/women-hoodeis-11.jpg"
import womenimage4 from "./images/women-pant-11.jpg"
import womenimage5 from "./images/women-jackets-11.jpg"



const Product = () => {
React.useEffect(()=>{
    
    let Btn1 =document.querySelector(".namilian")
    let Btn2 =document.querySelector(".adoird18")
    Btn1.addEventListener("click",function() {
        setHide(true)
        setShow(false)
    })
    Btn2.addEventListener("click",function(){
        setHide(false)
        setShow(true)
    })})
    const[Hide,setHide]=React.useState(true)
    const[Show,setShow]=React.useState(false)
    return (
        


                 <div>
            <div className="Gender__Button">
                <button className="namilian" >Man</button>
                <button className="adoird18" >Women</button>
            </div>

           {Hide? <div className="manimg">
                <span className="goho">
            <div className="Man__images_product" >
<Link to="/PleaseSelectTypeOfTshirt" className="images__linkg2"><img className="images2f" src={manimage1}  alt="manimage" /></Link>
<Link to="/" className="images__linkg2"><img className="images2f" src={manimage3}  alt="manima" /></Link>
<Link to="/Pleaseselectjackettype" className="images__linkg2"><img className="images2f" src={manimage6}  alt="man" /></Link>
<Link to="/Pleaseselectshirttype" className="images__linkg2"><img className="images2f" src={manimage2}  alt="manimag" /></Link>
<Link to="/" className="images__linkg2"><img className="images2f" src={manimage5}  alt="mani" /></Link>
<Link to="/Pleaseselectpanttype" className="images__linkg2"><img className="images2f" src={manimage4}  alt="manim" /></Link>
    </div></span></div>:null}

           
 {Show?<div className="manimg">
                <span className="not86">
            <div className="Man__images_product" >
<Link to="/" className="images__linkg2"><img className="images2f" src={womenimage1}  alt="man" /></Link>
<Link to="/" className="images__linkg2"><img className="images2f" src={womenimage2}  alt="manima" /></Link>
<Link to="/" className="images__linkg2"><img className="images2f" src={womenimage3}  alt="mani" /></Link>
<Link to="/" className="images__linkg2"><img className="images2f" src={womenimage4}  alt="manimag" /></Link>
<Link to="/" className="images__linkg2"><img className="images2f" src={womenimage5}  alt="manim" /></Link>
 </div></span></div>:null}  
        </div>
            
    )
}

export default Product
      

import React from 'react'
import typeimage1 from "./images/round-neck-man-t-shirt-f80.jpg"
import typeimage2 from "./images/13107-polo-man-modi.jpg"
import typeimage3 from "./images/v-necl-man-t-shirt.jpg"
import typeimage4 from "./images/13106-man-tank-modi.jpg"
import typeimage5 from "./images/full-sleeve-t-shirt-h500.jpg"
import "./Pleaseselectcloth.css"
import { Link } from 'react-router-dom'

const PleaseSelectTypeOfTshirt = () => {
    return (
        <div>
            <div className="up__cloths">
<h4>Please select type of t-shirt</h4>
            </div>
            <div className="select__cloths">
            <Link className="typeofcloths__02h"><img src={typeimage1} alt="upper55" /></Link>
            <Link className="typeofcloths__02h"><img src={typeimage2} alt="upper5" /></Link>
            <Link className="typeofcloths__02h"><img src={typeimage3} alt="upper" /></Link>
            <Link className="typeofcloths__02h"><img src={typeimage4} alt="uppe" /></Link>
            <Link className="typeofcloths__02h"><img src={typeimage5} alt="upp" /></Link>
            </div>
        </div>
    )
}

export default PleaseSelectTypeOfTshirt

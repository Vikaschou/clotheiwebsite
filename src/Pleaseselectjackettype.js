import React from 'react'
import typeimage1 from "./images/round-neck-man-t-shirt-f80.jpg"
import typeimage2 from "./images/13107-polo-man-modi.jpg"
import { Link } from 'react-router-dom'
import "./Pleaseselectcloth.css"

function Pleaseselectjackettype() {

    return (
        <div>
            <div className="up__cloths">
<h4>Please select type of jacket</h4>
            </div>
            <div className="select__cloths">
            <Link className="typeofcloths__02h"><img src={typeimage1} alt="upper55" /></Link>
            <Link className="typeofcloths__02h"><img src={typeimage2} alt="upper5" /></Link>
            </div>
        </div>
    )
}

export default Pleaseselectjackettype

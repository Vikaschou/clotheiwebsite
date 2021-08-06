import React from 'react'
import "./MainCon.css"
import banner1 from "./images/banner 4 J.jpg"
import banner2 from "./images/banner 5.jpg"
import banner3 from "./images/banner 3.jpg"
import banner4 from "./images/banner 6 a.jpg"
import banner5  from "./images/banner3 3 3 3 3.jpg.png"


const MainCon = () => {
    return (
        <>
            <section class="auto-slider">
        <div id="slider">
            <figure>
                <img src={banner1} alt="I"/>
                <img src={banner2} alt="Im"/>
                <img src={banner3} alt="Ima"/>
                <img src={banner4} alt="Imag"/>
                <img src={banner5} alt="Im2"/>
            </figure>
            <div class="indicator"></div>
</div>
</section>
        </>
    )
}

export default MainCon

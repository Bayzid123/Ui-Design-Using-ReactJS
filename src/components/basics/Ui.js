import React from 'react'
import "./style.css"

const Ui = () => {
    return (
        <>
        
        <nav>
            <div class="row clearfix">
                <ul class="main-nav animated slideInDown" id="check-class">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Service & Package</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Faq</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <a href="#" class="mobile-icon" onclick="slideshow()"><i class="fa fa-bars"></i></a>
            </div>
        </nav>
        <figure>
            <img src="picc.png" alt="todologo" className="pic"/>                
        </figure>
        <div class="main-content">
            <h1>A picture is worth a thousand words</h1>
            <h3>It clearly and beautifully captures your emotions- the joy, the laughter, the
                tears, you name it. Our pride is in offering the best shoots as we help you tell
            your story in photos</h3>
            <a href="#" class="btn btn-one">View Gallery</a>
        </div>
        </>
    )
}

export default Ui

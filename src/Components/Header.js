import React, { useState, useRef } from "react";
import Image, { Button } from "./Image";
import MediaQuery from 'react-responsive'

function Headers() {

    const navRef = useRef();

    const [isClicked, setIsClicked] = useState(false);

    function handleClick() {
        const display = navRef.current.classList.toggle("display-1");

        setIsClicked(() => {
            return (display)
        })

    }

    const myStyle = {
        display: "none"
    }
    const myStyle2 = {
        display: "block",
    }


    return (
        <header>
            <Image className="logo" src="images/logo.svg" />

            <nav ref={navRef}>
                <ul >
                    <li className="border-design"> <a href=".">Home</a></li>
                    <li className="border-design"> <a href=".">About</a></li>
                    <li className="border-design"> <a href=".">Contact</a></li>
                    <li className="border-design"> <a href=".">Blog</a></li>
                    <li className="border-design"> <a href=".">Careers</a></li>
                </ul>
            </nav>

            <MediaQuery maxWidth={830}>
                <Image
                    onClick={handleClick}
                    style={!isClicked ? myStyle2 : myStyle}

                    className="burger" src="images/icon-hamburger.svg" />
                <Image
                    onClick={handleClick}
                    style={!isClicked ? myStyle : myStyle2}
                    className="close" src="images/icon-close.svg" />
            </MediaQuery>

            <Button className="invite-btn" />

        </header>
    )
}

export default Headers
import React from "react";
import Image from "./Image";
import { Button } from "./Image";


function Footers() {
    return (
        <footer>
            <div className="footer-container-1">
                <Image className="footer-logo" src="images/footer-logo.svg" />

                <div >
                    <Image className="fb" src="images/icon-facebook.svg" />
                    <Image className="yt" src="images/icon-youtube.svg" />
                    <Image className="tw" src="images/icon-twitter.svg" />
                    <Image className="pt" src="images/icon-pinterest.svg" />
                    <Image className="is" src="images/icon-instagram.svg" />

                </div>
            </div>
            <ul className="text text-ed">
                <li>About Us</li>
                <li>Contact</li>
                <li>Blog</li>
            </ul>
            <ul className="text">

                <li>Careers</li>
                <li>Support</li>
                <li>Privacy Policy</li>
            </ul>
            <div className="footer-container-2">

                <Button />
                <p className="footer-p">  © Easybank. All Rights Reserved
                </p>
            </div>
        </footer>
    )
}

export default Footers;
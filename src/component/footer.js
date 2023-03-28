import React from 'react';
import Instagramlogo from "../asset/InstagramLogo.png";
import Linkedinlogo from "../asset/LinkedinLogo.png";

function Footer() {
    return (
        <div class="footercontainer">
        <div class="footer-left">
            <div class="text">Prompt Generator</div>
            <div class="text">Dweep Daily</div>
            <div class="text">All Contributors</div>
            <div class="text">Your data on Dweep.io</div>
            <div class="text">Contribute to Dweep</div>
        </div>
        <div class="footer-right">
            <div class="text">Dweep.io</div>
            <div class="text">Made with love in India</div>
            <div class="text"></div>
            <div>
                <img width="28px" height="28px" src={Instagramlogo} alt="image"/>
                <img width="28px" height="28px" src={Linkedinlogo} alt="image"/>
            </div><br/>
            <div class="text">hello@dweep.io</div>
        </div>
    </div>

    );
  }
  
  export default Footer;
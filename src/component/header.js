import React from 'react';
import vector from "../asset/Vector.png";


function Header() {
  return (
    <div class="headercontainer">
    <div class="left">
        <div class="title">An inspiring design delivered to your inbox every morning</div>
        <p class="subtitle">Our team scouts the internet for the best designs, 
            illustrations and art and delivers a truly inspiring
            one every day to inbox</p>
            <div class="subtitle2">Show me how it looks</div>
            <div class="form">
                <input type="text" class="input" placeholder="Your e-mail address"></input>
                <button class="input-btn">Register Now</button>
            </div>
            <h5 class="caption">Free - No Spam - No Data Sharing</h5>
    </div>
    <div class="right">
        <div class="image-container">
            <img width="100%" height="100%" src={vector} alt="image"/>
        </div>
    </div>
</div>
  );
}

export default Header;

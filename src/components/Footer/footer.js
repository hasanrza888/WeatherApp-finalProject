import "./footer.css"
function Footer() {
    return ( 
        <div className="footerDiv">
            <div className="footerCont">
                 
                <div className="contactUsContainer">
                    <h3 className="contactUs">Contact Us</h3>
                    <a href="mailto: hasanrza.888@gmail.com" className="email">hasanrza.888@gmail.com</a>
                    <a href="tel: +994-077-577-31-33" className="email">+994-077-577-31-33</a>
                </div>
                <div className="copyright">© 2022 SunWeather. All Rights Reserved.</div>
            </div>
        </div> 
    );
}

export default Footer;
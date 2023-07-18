import "./css/style.css";

const Footer = () =>{
    return(
    <>
     <footer className="footer">
        <div className="education__heading">
            <h3>Contact</h3>
        </div>

        <section className="contact">
            <div className="contact__form">
                <form action="#">
                    <input type="email" placeholder="WRITE YOUR EMAIL"/>
                    <br/><br/>
                    <textarea placeholder="WRITE A MESSAGE" id="text-area"></textarea>
                    <br/><br/>
                    <input type="submit" value="SEND" className="bttn-stretch bttn-md bttn-danger"/>
                </form>
            </div>
            <div className="contact__info">
                <div><a href="#"><i className="fa fa-facebook-official" aria-hidden="true"></i></a></div>
                <div><a href="#"><i className="fa fa-whatsapp" aria-hidden="true"></i></a></div>
                <div><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></div>
                <div><a href="#"><i className="fa fa-github-alt" aria-hidden="true"></i></a></div>
                <div><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></div>
            </div>
        </section>
    </footer>
    </>
    );
}

export default Footer;
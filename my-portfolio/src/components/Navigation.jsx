import "./css/style.css";

const Navigation = () =>{
    return(
    <>
      <div className = "background-image">
            <nav>
                <div className="nav__items">
                <label htmlFor="check" className="checkbox">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </label>
                <input type="checkbox" name="check" id="check" />

                <div className="logo animate__animated animate__backInDown">
                    <a href="#">Usama Hassan</a>
                </div>

                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Education</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                </div>
            </nav>

            <section className="hero">
                <div className="image-and-info">
                <div className="para">
                    <h3 className="logo animate__animated animate__backInDown">Asalam o Alaikum</h3>
                    <br />
                    <p>I am <b>Usama Hassan</b> and I am a passionate Software Engineer. I love to learn new stuff and I would love to make the prduct work best...</p>
                    <br />
                    <button className="bttn-stretch bttn-sm bttn-danger">Download CV</button>
                </div>

                <div className="photo">
                    <img src="images/profile.jpg" alt="profile" />
                </div>
                </div>
            </section>
        </div>
    </>
    );
}

export default Navigation;
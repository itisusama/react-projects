const Navigation = () => {
    return(
        <nav className="nav">
            <div className="logo">
                <img src="images/brand_logo.png" alt="logo" />
            </div>

            <ul className="nav__list">
                <li>Menu</li>
                <li>Location</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <button type="button" className="nav__button">Login</button>
        </nav>
    );
}

export default Navigation;
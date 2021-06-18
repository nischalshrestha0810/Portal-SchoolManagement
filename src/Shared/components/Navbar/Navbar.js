const Navbar = () => {
    return (
        <nav className="left__navigation-menu">
            <ul>
                <li>
                    <a href="#">
                        <i className="fas fa-home"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fas fa-user-plus"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fas fa-question-circle"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fas fa-power-off"></i>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
import "./header.css"

function Header() {
    return (
        <div className="custom-header">
            {/* Navbar */}
            <nav className="main-header navbar navbar-expand navbar-green navbar-dark">
                {/* Left navbar links */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="# ">
                        <i className="fas fa-bars" />
                        </a>
                    </li>
                </ul>
                {/* <ul className="navbar-nav header">
                    <h1>PHẦN MỀM GIÁM SÁT THÔNG SỐ THIẾT BỊ PHÂN TÍCH</h1>
                </ul> */}
                {/* Right navbar links */}
                <ul className="navbar-nav">
                    <li className="greetings">
                        <span>Xin chào, VIETCIS.,JSC</span>
                    </li>
                    {/* Notifications Dropdown Menu */}
                    <li className="nav-item">
                        <a className="nav-link" href="# ">
                            <i className="fas fa-sign-out-alt" />
                        </a>
                    </li>
                </ul>
            </nav>
            {/* /.navbar */}
        </div>
    );
}

export default Header;

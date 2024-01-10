import "./sidemenu.css";

function SideMenu() {
    return (
        <div>
            {/* Main Sidebar Container */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <a href="index3.html" className="brand-link">
                    <img
                        src="dist/img/VLogo.png"
                        alt="ViMON Logo"
                        className="brand-image img-circle elevation-3"
                        style={{ opacity: ".8" }}
                    />
                    <span className="brand-text font-weight-light">ViMON</span>
                </a>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                        <ul
                            className="nav nav-pills nav-sidebar flex-column"
                            data-widget="treeview"
                            role="menu"
                            data-accordion="false">
                            {/* Add icons to the links using the .nav-icon class
                            with font-awesome or any other icon font library */}
                            <li className="nav-item">
                                <a href="# " className="nav-link active">
                                    <i className="nav-icon fas fa-tachometer-alt" />
                                    <p>
                                        Tổng quan
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="# " className="nav-link">
                                <i className="nav-icon fas fa-users" />
                                <p>
                                    Chi tiết tổ 1
                                </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="# " className="nav-link">
                                <i className="nav-icon fas fa-users" />
                                <p>
                                    Chi tiết tổ 2
                                </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="# " className="nav-link">
                                <i className="nav-icon fas fa-clipboard" />
                                <p>
                                    Báo cáo
                                </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="# " className="nav-link">
                                    <i className="nav-icon fas fa-wrench" />
                                    <p>
                                        Cài đặt
                                    </p>
                                </a>
                            </li>
                            <li className="nav-header">TRẠNG THÁI TRUYỀN THÔNG</li>
                            <li class="nav-item">
                                <a href="# " className="nav-link">
                                    <i className="nav-icon fas fa-circle text-success"></i>
                                    <p className="text">Bình thường (sáng)</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="# " className="nav-link">
                                    <i className="nav-icon fas fa-circle text-warning"></i>
                                    <p className="text">Cảnh báo (sáng)</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="# " className="nav-link">
                                    <i className="nav-icon fas fa-circle text-danger"></i>
                                    <p className="text">Lỗi (nhấp nháy)</p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside>
        </div>
    );
}

export default SideMenu;
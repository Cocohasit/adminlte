import React from "react";

function Footer() {
    return (
        <div>
            <div>
                <footer className="main-footer">
                <strong>
                    Copyright © 2014-2019 <a href="http://adminlte.io">AdminLTE.io</a>.
                </strong>
                All rights reserved.
                <div className="float-right d-none d-sm-inline-block">
                    <b>Version</b> 3.0.0-rc.1
                </div>
                </footer>
                {/* Control Sidebar */}
                <aside className="control-sidebar control-sidebar-dark">
                {/* Control sidebar content goes here */}
                </aside>
                {/* /.control-sidebar */}
                {/* ./wrapper */}
            </div>
        </div>
    );
}

export default Footer;

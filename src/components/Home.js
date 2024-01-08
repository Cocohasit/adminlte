import React from "react";
import "../styles/home.css"

function Home() {
    return (
        <div className="custom-home">
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-12">
                                <h1 className="main-title m-0 text-dark">DỮ LIỆU QUAN TRẮC TỰ ĐỘNG TRẠM BẮC NHẠC SƠN</h1>
                            </div>
                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.container-fluid */}
                </div>
                {/* /.content-header */}
                {/* Main content */}
                <section className="content">
                    <div className="container-fluid">
                        {/* Small boxes (Stat box) */}
                        <div className="row">
                            <div className="col-lg-4 col-6">
                                {/* small box */}
                                <div className="small-box bg-info">
                                    <div className="small-box-header">
                                        <div />
                                        <span>PH</span>
                                        <i className="signal fas fa-circle" />
                                    </div>
                                    <div className="current-value digi-font">
                                        <h3>150</h3>
                                    </div>
                                    {/* <div className="icon">
                                    <i className="ion ion-bag" />
                                </div> */}
                                    <span className="small-box-footer">
                                        Giới hạn: <span className="digi-font">5 - 9</span>
                                    </span>
                                </div>
                            </div>
                            {/* ./col */}
                            <div className="col-lg-4 col-6">
                                {/* small box */}
                                <div className="small-box bg-success">
                                    <div className="inner">
                                        <h3>
                                            53<sup style={{ fontSize: 20 }}>%</sup>
                                        </h3>
                                        <p>Bounce Rate</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-stats-bars" />
                                    </div>
                                    <a href="# " className="small-box-footer">
                                        More info <i className="fas fa-arrow-circle-right" />
                                    </a>
                                </div>
                            </div>
                            {/* ./col */}
                            <div className="col-lg-4 col-6">
                                {/* small box */}
                                <div className="small-box bg-warning">
                                    <div className="inner">
                                        <h3>44</h3>
                                        <p>User Registrations</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-person-add" />
                                    </div>
                                    <a href="# " className="small-box-footer">
                                        More info <i className="fas fa-arrow-circle-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* /.row */}
                        {/* Main row */}
                        {/* TODO: new layout */}
                        <div className="row">
                            <div className="col-4">
                                Col 1
                                <div className="row">
                                    Col 1 Row 1
                                </div>
                                <div className="row">
                                    Col 1 Row 2
                                </div>
                                <div className="row">
                                    Col 1 Row 3
                                </div>
                            </div>
                            <div className="col-4">
                                Col 2
                                <div className="row">
                                    Col 2 Row 1
                                </div>
                                <div className="row">
                                    Col 2 Row 2
                                </div>
                                <div className="row">
                                    Col 2 Row 3
                                </div>
                            </div>
                            <div className="col-4">
                                Col 3
                                <div className="row">
                                    Col 3 Row 1
                                </div>
                                <div className="row">
                                    Col 3 Row 2
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /.container-fluid */}
                </section>
                {/* /.content */}
            </div>
            {/* /.content-wrapper */}
        </div>
    );
}

export default Home;

import "./systeminfo.css";

function SystemInfo() {
  return (
    <div className="custom-home">
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-12">
                <h1 className="main-title m-0 text-dark">
                  TỔNG QUAN HỆ THỐNG
                </h1>
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
              {/* col 1 */}
              <div className="col-4">
                {/* small box */}
                <div className="small-box bg-pink">
                  <div className="small-box-header">
                    <div />
                    <span className="inner-text">PH</span>
                  </div>
                  <div className="current-value digi-font">
                    <h3 style={{ fontSize: 50 }}>150</h3>
                  </div>
                  <span className="small-box-footer">
                    Giới hạn: <span className="digi-font">5 - 9</span>
                  </span>
                </div>
                {/* small box */}
                <div className="small-box bg-purple">
                  <div className="small-box-header">
                    <div />
                    <span className="inner-text">TSS</span>
                  </div>
                  <div className="current-value">
                    <h3 className="digi-font" style={{ fontSize: 50 }}>
                      150
                    </h3>
                    <span
                      style={{
                        fontSize: 25,
                        fontWeight: "bold",
                        marginTop: 8,
                        marginLeft: 2,
                      }}
                    >
                      mg/l
                    </span>
                  </div>
                  <span className="small-box-footer">
                    Giới hạn: <span className="digi-font">0.9 - 100</span> mg/l
                  </span>
                </div>
                {/* small box */}
                <div className="small-box bg-danger">
                  <div className="small-box-header">
                    <div />
                    <span className="inner-text">
                      NHIỆT ĐỘ
                    </span>
                  </div>
                  <div className="current-value">
                    <h3 className="digi-font" style={{ fontSize: 50 }}>
                      150
                    </h3>
                    <span
                      style={{
                        fontSize: 25,
                        fontWeight: "bold",
                        marginTop: 8,
                        marginLeft: 2,
                      }}
                    >
                      &deg;C
                    </span>
                  </div>
                  <span className="small-box-footer">
                    Giới hạn: <span className="digi-font">0 - 40</span> &deg;C
                  </span>
                </div>
              </div>

              {/* col 2 */}
              <div className="col-4">
                {/* small box */}
                <div className="small-box bg-teal">
                  <div className="small-box-header">
                    <div />
                    <span className="inner-text">COD</span>
                  </div>
                  <div className="current-value">
                    <h3 className="digi-font" style={{ fontSize: 50 }}>
                      150
                    </h3>
                    <span
                      style={{
                        fontSize: 25,
                        fontWeight: "bold",
                        marginTop: 8,
                        marginLeft: 2,
                      }}
                    >
                      mg/l
                    </span>
                  </div>
                  <span className="small-box-footer">
                    Giới hạn: <span className="digi-font">0 - 150</span> mg/l
                  </span>
                </div>
                {/* small box */}
                <div className="small-box bg-dark">
                  <div className="small-box-header">
                    <div />
                    <span className="inner-text">AMONIA</span>
                  </div>
                  <div className="current-value">
                    <h3 className="digi-font" style={{ fontSize: 50 }}>
                      150
                    </h3>
                    <span
                      style={{
                        fontSize: 25,
                        fontWeight: "bold",
                        marginTop: 8,
                        marginLeft: 2,
                      }}
                    >
                      mg/l
                    </span>
                  </div>
                  <span className="small-box-footer">
                    Giới hạn: <span className="digi-font">0 - 30</span> mg/l
                  </span>
                </div>
                {/* small box */}
                <div className="small-box bg-blue">
                  <div className="small-box-header">
                    <div />
                    <span className="inner-text">
                      LƯU LƯỢNG
                    </span>
                  </div>
                  <div className="current-value">
                    <h3 className="digi-font" style={{ fontSize: 50 }}>
                      150
                    </h3>
                    <span
                      style={{
                        fontSize: 25,
                        fontWeight: "bold",
                        marginTop: 8,
                        marginLeft: 2,
                      }}
                    >
                      m3/h
                    </span>
                  </div>
                  <span className="small-box-footer">
                    Giới hạn: <span className="digi-font">1 - 800</span> m3/h
                  </span>
                </div>
              </div>

              {/* col 3 */}
              <div className="col-4">
                {/* small box */}
                <div className="small-box bg-pink">
                  <div className="small-box-header">
                    <div />
                    <span className="inner-text">PH</span>
                  </div>
                  <div className="current-value digi-font">
                    <h3 style={{ fontSize: 50 }}>150</h3>
                  </div>
                  <span className="small-box-footer">
                    Giới hạn: <span className="digi-font">5 - 9</span>
                  </span>
                </div>
                {/* small box */}
                <div className="small-box bg-purple">
                  <div className="small-box-header">
                    <div />
                    <span className="inner-text">TSS</span>
                  </div>
                  <div className="current-value">
                    <h3 className="digi-font" style={{ fontSize: 50 }}>
                      150
                    </h3>
                    <span
                      style={{
                        fontSize: 25,
                        fontWeight: "bold",
                        marginTop: 8,
                        marginLeft: 2,
                      }}
                    >
                      mg/l
                    </span>
                  </div>
                  <span className="small-box-footer">
                    Giới hạn: <span className="digi-font">0.9 - 100</span> mg/l
                  </span>
                </div>
                {/* small box */}
                <div className="small-box bg-danger">
                  <div className="small-box-header">
                    <div />
                    <span className="inner-text">
                      NHIỆT ĐỘ
                    </span>
                  </div>
                  <div className="current-value">
                    <h3 className="digi-font" style={{ fontSize: 50 }}>
                      150
                    </h3>
                    <span
                      style={{
                        fontSize: 25,
                        fontWeight: "bold",
                        marginTop: 8,
                        marginLeft: 2,
                      }}
                    >
                      &deg;C
                    </span>
                  </div>
                  <span className="small-box-footer">
                    Giới hạn: <span className="digi-font">0 - 40</span> &deg;C
                  </span>
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

export default SystemInfo;
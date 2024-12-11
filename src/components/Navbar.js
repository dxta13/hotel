import React from "react";

function Navbar() {
    return (
        <div className="row">
            <nav className="navbar navbar-expand-lg bg-primary text-white">
                <div className="container-fluid">
                    {/* โลโก้และชื่อรีสอร์ท */}
                    <a className="navbar-brand text-white" href="#">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT6Nj_zhUJZs0pEU9oCWjoOGgCMni5F4lB4g&s"
                            alt="Resort Logo"
                            style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "50%",
                                marginRight: "10px",
                            }}
                        />
                        The Rim Resort Chiangmai
                    </a>
                    {/* ปุ่ม Toggler สำหรับหน้าจอขนาดเล็ก */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* เมนู */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">
                                    Activities
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">
                                    Gallery
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <button className="btn btn-warning ms-3">TH</button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

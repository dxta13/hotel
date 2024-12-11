import React from "react";

function HeroSection() {
    return (
        <div class="row">
        <section className="hero-section text-center">
            <div className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://www.therimchiangmai.com/wp-content/uploads/2024/09/Slider5-scaled.jpg" 
                         className="d-block w-100" alt="Beach View" 
                         style={{ height: "600px", objectFit: "cover" }}
                         />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.therimchiangmai.com/wp-content/uploads/2024/09/DSC09226-HDR.jpg" 
                        className="d-block w-100" alt="Resort View" 
                        style={{ height: "600px", objectFit: "cover" }}
                        />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.trvl-media.com/lodging/5000000/4180000/4173700/4173687/d09afc8b.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill" 
                        className="d-block w-100" alt="Resort View" 
                        style={{ height: "600px", objectFit: "cover" }}
                        />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target=".carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target=".carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
            <div className="hero-text mt-4">
                <h1>Welcome to The Rim Resort Chiangmai</h1>
                <p>Experience the charm of Thai culture with us!</p>
            </div>
        </section>
        </div> 
    );
}

export default HeroSection;

import React from "react";

const Banner = () => {
  return (
    <>
      <section className="section hero" aria-label="home">
        <div className="container">
          <h1 className="headline-lg hero-title">
            NFT MARKETPLACE{" "}
            <span className="span">DEMO WEBSITE</span>
          </h1>

          <p className="section-text body-lg">
           Made for twyn internship
          </p>

          <a href="#" className="btn">
            Explore now
          </a>
        </div>
      </section>
    </>
  );
};

export default Banner;

import React from "react";

function Banner() {
  return (
    <>
      <section className="bg-image">
        <div className="container text-center">
          <p className="h1 pt-5 mt-2">
            Top Quality Digital
            <br />
            Products To Explore
          </p>
          <p className="pt-3">
            Get your blood tests delivered at let home collect sample <br />
            from the victory of the managments that supplies
            <br />
            best design system guidelines ever.
          </p>
          <div>
            <button
              type="button"
              className="btn rounded-5 text-white px-4 mt-2"
              style={{ backgroundColor: "#ea3a60" }}
            >
              Explore
            </button>
          </div>
          <div className="pt-3">
            <img src="https://shreya1360.github.io/Startup-landing-page-website/img/Browser-mockup.png" className="img-fluid" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;

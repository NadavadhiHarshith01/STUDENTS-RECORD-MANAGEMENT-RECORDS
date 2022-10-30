import React from "react";
import Nav from "./Nav";

function About() {

  return (
    <>
    <div>
      <Nav />
      <div>
        <h1 className="dashbord">About Us</h1>
      </div>

    <div id="about-main">
        <div className="jumbotron">
            <div className="jumbotron-inner">
                <div className="top-box">
                    <div className="content-box">

                        <p>
                            Our team is a developer experience platform for web APIs.  <br /> Our mission is to make developers productive through automatic code generation.
                        </p>
                    </div>
                </div>
            </div>
            <div className="img-layer-container">
                <div className="team-image" id="team-image">
                    <img src="https://apimatic.io/img/theme/aboutUs/images-1.png" />
                </div>


            </div>
        </div>
        
    </div>

    </div>
    </>
  );
}

export default About;

import React from "react"


function OneFeature(props){
return <>


<div className="col-md-3 p-4">
        <img src={props.img} alt="" />
        <h6>{props.title}</h6>
        <p>
          Get your blood tests delivered at home collect a sample from the your
          blood tests.
        </p>
      </div>


</>

}

function Feature(){
    return <>
    
    <section>
  <div className="container pt-4">
    <div className="text-center pt-5">
      <h6 className="text-danger text-uppercase text-danger">
        Whats the function
      </h6>
      <h2>Meet the feature of product</h2>
    </div>
    <div className="row mt-5 pt-4">
     
     <OneFeature title = "Fast Performance" img = "https://shreya1360.github.io/Startup-landing-page-website/img/feature1.png"/>
     <OneFeature title = "Partenership deal" img = "https://shreya1360.github.io/Startup-landing-page-website/img/feature3.png"/>
     <OneFeature title = "Fast Performance" img = "https://shreya1360.github.io/Startup-landing-page-website/img/feature2.png"/>
     <OneFeature title = "Partenership deal" img = "https://shreya1360.github.io/Startup-landing-page-website/img/feature4.png"/>
    
      
    </div>
  </div>
</section>

    </>
}

export default Feature;
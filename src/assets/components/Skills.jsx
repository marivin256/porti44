

import Corporation from "/src/assets/components/Corporation.jpg"
import Problem from "/src/assets/components/Problem.jpg"
import Debug from "/src/assets/components/Debug.jpg"
import Program from "/src/assets/components/Program.jpg"


gsap.registerPlugin(ScrollTrigger);
function App () {

  
  function animateFrom(ele, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    if(ele.classList.contains("gs_reveal_fromLeft")) {
      x = -200;
      y = 0;
    } else if (ele.classList.contains("gs_reveal_fromRight")) {
      x = 100;
      y = 0;
    }
    ele.style.transform = "translate(" + x + "px, " + y + "px)";
    ele.style.opacity = "0";
    gsap.fromTo(ele, {x: x, y: y, autoAlpha: 0}, {
      duration: 1.25, 
      x: 0,
      y: 0, 
      autoAlpha: 1, 
      ease: "expo", 
      overwrite: "auto"
    });
  }
  
  function hide(ele) {
    gsap.set(ele, {autoAlpha: 0});
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray(".gs_reveal").forEach(function(ele) {
      hide(ele); 
      
      ScrollTrigger.create({
        trigger: ele,
        markers: false,
        onEnter: function() { animateFrom(ele) }, 
        onEnterBack: function() { animateFrom(ele, -1) },
        onLeave: function() { hide(ele) } 
      });
    });
  });

  

  return(
    

<div className="cInnerContent text-white ">
  <h1 className="header-section gs_reveal ipsType_center text-yellow-600 text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">MY SKILLS AND ABILITIES</h1>
  
  <div className="features">

    <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
      <div className="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromLeft">
        <div className="card">
          <img width="479" src={Corporation} alt=""/>
        </div>
      </div>

      <div className="ipsGrid_span7 ipsType_left">
        <h2 className="heading_large gs_reveal"><strong className="text-yellow-600">CORPERATION SKILLS</strong> </h2>
        <p className="gs_reveal">As a Software Developer, I often interuct with my colligues and Clients frequently, Which creates and strong bond between me, my colligues and my Clients.</p>
      </div>
    </div>

    <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
      <div className="ipsGrid_span7 ipsType_right">
        <h2 className="heading_large gs_reveal"> <strong className="text-yellow-600">DEBUGGING SKILLS</strong> </h2>
        <p className="gs_reveal">Debugging is the basic Developer tool that helps understand code, find problems, and test Application flows.</p>
      </div>

      <div className="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromRight">
        <div className="card">
          <img width="479" src={Debug} alt=""/>
        </div>
      </div>
    </div>

    <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
      <div className="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromLeft">
        <div className="card">
          <img width="479" src={Problem} alt=""/>
        </div>
      </div>

      <div className="ipsGrid_span7 ipsType_left">
        <h2 className="heading_large gs_reveal"> <strong className="text-yellow-600">PROBLEM SOLVING SKILLS</strong> </h2>
        <p className="gs_reveal">As a Software Developer, I am able to quickly identify problems and offer effective solutions.</p>
      </div>
    </div>

    <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
      <div className="ipsGrid_span7 ipsType_right">
        <h2 className="heading_large gs_reveal"><strong className="text-yellow-600">PROGRAMMING SKILLS</strong></h2>
        <p className="gs_reveal">I have skills in various programming  scripting and frame works such as React and Vue.</p>
      </div>

      <div className="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromRight">
        <div className="card">
          <img width="479"  src={Program} alt=""/>
        </div>
      </div>
    </div>

  </div>

</div>



  )
}
export default App;


import Corporation from "/src/assets/components/Corporation.jpg"
import Problem from "/src/assets/components/Problem.jpg"
import Debug from "/src/assets/components/Debug.jpg"
import Program from "/src/assets/components/Program.jpg"



function Skills () {

  useGSAP(( direction) => {
     

    gsap.fromTo(".box",
    {
      
      autoAlpha: 0, x: -50},{autoAlpha: 1, x: 5, duration:1.75, ease:"expo"},
      

      
    )


    gsap.fromTo(".lbox",
    {autoAlpha: 0, x: 50},{autoAlpha: 1, x: -5, duration:1.75}
    )

    gsap.fromTo(".hed",
    {autoAlpha: 0, y: 50},{autoAlpha: 1, y: 20, duration:1.50}
    )

    gsap.fromTo(".gs_reveal",
    {autoAlpha: 0, y: 50},{autoAlpha: 1, y: 20, duration:1.70}
    )
    gsap.fromTo(".top",
    {autoAlpha: 0, y: 50},{autoAlpha: 1, y: -30, duration:0.55}
    )


    
  
  })
  

  return(
    

<div className="cInnerContent text-white ">
  <h1 className="header-section top ipsType_center text-yellow-600 text-4xl font-extrabold text-white sm:text-5xl md:text-6xl ">MY SKILLS AND ABILITIES</h1>
  
  <div className="features">

    <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
      <div className=" featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromLeft">
        <div className="card box">
          <img width="479" src={Corporation} alt=""/>
        </div>
      </div>

      <div className="ipsGrid_span7 ipsType_left">
        <h2 className="heading_large hed"><strong className="text-yellow-600">CORPERATION SKILLS</strong> </h2>
        <p className="gs_reveal">As a Software Developer, I often interuct with my colligues and Clients frequently, Which creates and strong bond between me, my colligues and my Clients.</p>
      </div>
    </div>

    <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
      <div className="ipsGrid_span7 ipsType_right">
        <h2 className="heading_large hed"> <strong className="text-yellow-600">DEBUGGING SKILLS</strong> </h2>
        <p className="gs_reveal">Debugging is the basic Developer tool that helps understand code, find problems, and test Application flows.</p>
      </div>

      <div className="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromRight">
        <div className="card lbox">
          <img width="479" src={Debug} alt=""/>
        </div>
      </div>
    </div>

    <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
      <div className="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromLeft">
        <div className="card box">
          <img width="479" src={Problem} alt=""/>
        </div>
      </div>

      <div className="ipsGrid_span7 ipsType_left">
        <h2 className="heading_large hed"> <strong className="text-yellow-600">PROBLEM SOLVING SKILLS</strong> </h2>
        <p className="gs_reveal">As a Software Developer, I am able to quickly identify problems and offer effective solutions.</p>
      </div>
    </div>

    <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
      <div className="ipsGrid_span7 ipsType_right">
        <h2 className="heading_large gs_head"><strong className="text-yellow-600">PROGRAMMING SKILLS</strong></h2>
        <p className="gs_reveal">I have skills in various programming  scripting and frame works such as React and Vue.</p>
      </div>

      <div className="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromRight">
        <div className="card lbox">
          <img width="479"  src={Program} alt=""/>
        </div>
      </div>
    </div>

  </div>

</div>



  )
}
export default Skills;

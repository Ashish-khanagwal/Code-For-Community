import React from "react";
// import image1 from '../media/1.png';
import image2 from '../media/2.png';
// import image3 from '../media/3.png';
import imghalf1 from '../media/1-half.png';
import imghalf3 from '../media/3-half.png';





const Github = () => {
    return (
        <>
          <div className="github">
             <h1 className='heading'>Our <span className='gradient-text'>Github</span></h1>

             <div className="github-para">“Open Source is about collaboration not competition”</div>

             <div className="image-container">
             <div className="wave" style={{height: "150px", overflow: "hidden"}}>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
          <path d="M-3.76,21.22 C207.86,46.88 280.10,50.82 505.83,21.22 L500.00,0.00 L0.00,0.00 Z" style={{stroke: "none", fill: "#181D29"}}></path>
        </svg>
      </div>
             <div className="github-image">

               <a href="https://github.com/Code-For-Comm/Code-For-Community"> <img src={imghalf1} alt="openSource" className="img1"></img></a>
               {/* <a href="https://github.com/Code-For-Comm/Code-For-Community"> <img src={image1} alt="openSource" className="imgfull1"></img></a> */}
               <a href="https://github.com/Code-For-Comm/Code-For-Community"><img src={image2} alt="openSource" className="img2"></img></a>
               <a href="https://github.com/Code-For-Comm/Code-For-Community"><img src={imghalf3} alt="openSource" className="img3"></img></a>
               {/* <a href="https://github.com/Code-For-Comm/Code-For-Community"><img src={image3} alt="openSource" className="imgfull3"></img></a> */}
             </div>

             <div className="wave2" style={{height: "150px", overflow: "hidden"}}>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
          <path d="M-3.19,123.85 C204.47,100.17 290.82,98.20 501.31,123.85 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "#181D29"}}></path>
        </svg>
      </div>
  </div> 

             <a href='http://discord.gg/ejXJkd64Jg'>
                        <button type='button' className='header-button discord-button git-button'><i class="fa-brands fa-github"></i>Visit our Github</button>
                    </a>
                       
          </div>
        </>
    )
}
export default Github;
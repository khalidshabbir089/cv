import React,{useRef} from 'react'
import {FaFacebookF} from 'react-icons/fa';
import {VscGithubAlt} from 'react-icons/vsc';
import {FaInstagram} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';
import { useState, useEffect } from "react";
import { baseurl } from "../baseurl/baseurl";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Carousel } from 'react-bootstrap';
import './style.css';
import emailjs from '@emailjs/browser';
import Sliderr from './Slider'

export const CV = () => {
    // =======================================================

    // ==========================================================
  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const submit = () => {
      console.log(name+"thsi is email")
      if (name && email && message) {
        const serviceId = 'service_gqj5avb';
        const templateId = 'template_jls8vhy';
        const userId = 'rruPKbEwwgWT-UbOz';
        const templateParams = {
            name,
            email,
            message
        };

        emailjs.send(serviceId, templateId, templateParams, userId)
            .then(response => console.log(response))
            .then(error => console.log(error));
          setName('');
          setEmail('');
          setMessage('');
          setEmailSent(true);
      } else {
          alert('Please fill in all fields.');
      }
  }

    //======================================== 
    const [getaboutusdata, setaboutusdata] = useState([]);

  /*========================================================*/
  const getdataaboutus = async () => {
    const res = await fetch(baseurl +"/getdataaboutus", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      setaboutusdata(data);
      
    
    }
  };

 
  const linkedin = getaboutusdata.map((obj,id)=>{   
    return (obj.linkedin);   
});   
  const github = getaboutusdata.map((obj,id)=>{   
    return (obj.github);   
});   
  const facebook = getaboutusdata.map((obj,id)=>{   
    return (obj.facebook);   
});   
  const instagram = getaboutusdata.map((obj,id)=>{   
    return (obj.instagram);   
});   


const percent=35;
// ================================================================
const [geteducaitons,seteducations]=useState([]);
const educationdata = async () => {
    const res = await fetch(baseurl +"/geteducation", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const dataedu = await res.json();

    if (res.status === 422 || !dataedu) {
      console.log("error ");
    } else {
        seteducations(dataedu);
     
    
    }
  };
// =============================================================
const [getexp,setexp]=useState([]);

const experiencedata= async ()=>{
    const res = await fetch(baseurl +"/getexperience",{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
        },
    });
    const exdata = await res.json();
    if(res.status === 422|| !exdata){
        console.log("error");
    }else{
        setexp(exdata);
        
    }
};
// =============================================================
const [getskill,setskill]=useState([]);

const skilldata= async ()=>{
    const res = await fetch(baseurl +"/getskills",{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
        },
    });
    const exdata = await res.json();
    if(res.status === 422|| !exdata){
        console.log("error");
    }else{
        setskill(exdata);
        
    }
};
// =============================================================
const [getreview,setreview]=useState([]);

const reviewdata= async ()=>{
    const res = await fetch(baseurl +"/getreview",{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
        },
    });
    const review = await res.json();
    if(res.status === 422|| !review){
        console.log("error");
    }else{
        setreview(review);
     
    }
};
// ====================================================


useEffect(() => {
    getdataaboutus();
    educationdata();
    experiencedata();
    skilldata();
    reviewdata()
  }, []);

  
// =========================================================

  return (
   <>
     <main className="container px-0 " >
      <section className="profile " id="profile_ripple">
          <div className="left">
              <div className="avatar_block">
                  <img src="./images/khalid.jpg" alt=""/>
                  <span>
                      <i className="uil uil-comment-dots"></i>
                  </span>
              </div>
              <div>
                 {getaboutusdata.map((element, id) => {
                  return (
                    <>
                      <h2>{element.name}</h2>
                    </>
                  );
                })}
                 
                  <p className="cd-headline loading-bar">
                      <span className="cd-words-wrapper">
                          <b className="is-visible">MERN Stack Developer</b>
                          <b>Front-end Developer</b>
                          <b>Back-end Developer</b>
                          <b>Graphic Designer</b>
                          <b>UI/UX Designer</b>
                      </span>
                  </p>
              </div>
          </div>
          <div className="right">
            <ul className="contact">
                <li>
                    <i className="uil uil-phone-volume"></i>
                    <strong>Phone :  </strong> {getaboutusdata.map((element, id) => {
                  return (
                    <>
                     {element.phone}
                    </>
                  );
                })}

                </li>
                <li>
                    <i className="uil uil-envelope"></i>
                    <strong className=''>Email :  </strong>{getaboutusdata.map((element, id) => {
                  return (
                    <>
                     {element.email}
                    </>
                  );
                })}
                    
                </li>
                <ul className="socials">
                    <li>
                        <a target="_blank" href={linkedin}>
                            <FaLinkedinIn />
                        </a>
                    </li>   <li className='' >
                        <a target="_blank" href={github}  style={{background:'#212A4A'}}>
                            <VscGithubAlt style={{background:''}} />
                        </a>
                    </li>  <li>
                        <a target="_blank" href={facebook} style={{background:'#4d79f6'}}>
                            <FaFacebookF />
                        </a>
                    </li>
                  
                    <li>
                        <a  target="_blank" href={instagram} style={{background:'#ff5da0'}}>
                           <FaInstagram/>
                        </a>
                    </li>
                </ul>
            </ul>

          </div>
      </section>
 

<section className="about">
    <h1 className="section_heading">About us</h1>
    <div className="content">
        <div className="left me-sm-0 me-md-5">
            <h2> {getaboutusdata.map((element, id) => {
                  return (
                    <>
                      <h2>{element.heading}</h2>
                    </>
                  );
                })}</h2>
            <p>{getaboutusdata.map((element, id) => {
                  return (
                    <>
                      {element.bio}
                    </>
                  );
                })}</p>
         <button ><a href="./files/khalid.pdf" download>Download</a></button>
        </div>
        <div className="right ms-sm-0 ms-md-5 mt-md-5 ">
            <p>
                <span>Name</span>
                <span> {getaboutusdata.map((element, id) => {
                  return (
                    <>
                      {element.name}
                    </>
                  );
                })}</span>
            </p>
            <p>
                <span>Date of Birth</span>
                <span>{getaboutusdata.map((element, id) => {
                  return (
                    <>
                      {element.datebirth}
                    </>
                  );
                })}</span>
            </p>
            <p>
                <span>Spoken Language</span>
                <span>{getaboutusdata.map((element, id) => {
                  return (
                    <>
                      {element.languages}
                    </>
                  );
                })}</span>
            </p>
            <p>
                <span>Nationality</span>
                <span>{getaboutusdata.map((element, id) => {
                  return (
                    <>
                      {element.nationality}
                    </>
                  );
                })}</span>
            </p>
            <p>
                <span>Interest</span>
                <span>Coding Learning</span>
            </p>

        </div>
    </div>

</section>
<section className="skills">
    <h1 className="section_heading">Education & Skills</h1>
   <div className="content">
    <div className="left">
        <div className="inner_left">
            <div className="heading">
                <i className="uil uil-graduation-cap"></i>
                <h5>Education</h5>
            </div>
            <div className="timeline_wrapper">
              
            {geteducaitons.map((element, id) => {
                  return (
                    <>
                      <div className="item">
                    <p>{element.year}</p>
                    <p className="center">{element.school}</p>
                    <p>{element.degree}</p>
                </div>
                    </>
                  );
                })}
              
               

          
            </div>
        </div>
        <div className="inner_right">
            <div className="heading">
                <i className="uil uil-suitcase-alt"></i>
                <h5>Experience</h5>
            </div>
           <div className="timeline_wrapper">
           {getexp.map((element, id) => {
                  return (
                    <>
                          <div className="item">
                <p>{element.year}</p>
                <p className="center">{element.organization}</p>
                <p>{element.position}</p>
            </div>
                    </>
                  );
                })}
       

           </div>
        </div>
    </div>
    <div className="right">
       <div className="skills_wrapper">

       {getskill.map((element, id) => {
                  return (
                    <>
                               <div className="skill-box">
                                <div className='d-flex justify-content-between'>
                                <h4>{element.skillname}</h4>
                         <p className='progessbar'>{element.percent+"%"}</p>
                                </div>
                       
                         <ProgressBar className='skillprogressbar p-0'   animated now={element.percent} />;
                </div>
                    </>
                  );
                })}
          
         

 

       </div>
    </div>
   </div>
</section>

<section className="counter_section">
    <div>
        <div>
            <i className="uil uil-cell"></i>
        </div>
        <div>
            <h3><span className="counter" data-count="50">50</span>+</h3>
            <h5>Completed projects</h5>
        </div>
    </div>
    <div>
        <div>
            <i className="uil uil-smile"></i>
        </div>
        <div>
            <h3><span className="counter" data-count="15">15</span>+</h3>
            <h5>Happy clients</h5>
        </div>
    </div>
    <div>
        <div>
            <i className="uil uil-trophy"></i>
        </div>
        <div>
            <h3><span className="counter" data-count="3">3</span>+</h3>
            <h5>Certifications</h5>
        </div>
    </div>
    
</section>
<section className='m-0 p-0'>
  <Sliderr/>
</section>
<section className="partners container  pe-5 " style={{marginTop:'10px'}}>
        <div className="brands_wrapper row d-flex justify-content-between">
            <img className=''style={{width:"100px"}} src="./images/html.png" alt=""/>
            <img className=''style={{width:"100px"}} src="./images/bootstrap.png" alt=""/>
            <img className=''style={{width:"100px"}} src="./images/sass.png" alt=""/>
            <img className=''style={{width:"100px"}} src="./images/js.png" alt=""/>
            <img className=''style={{width:"100px"}} src="./images/redux.png" alt=""/>
            <img className=''style={{width:"100px"}} src="./images/mongodb.png" alt=""/>
            <img className=''style={{width:"100px"}} src="./images/express.png" alt=""/>
            <img className=''style={{width:"100px"}} src="./images/react.png" alt=""/>
            <img className=''style={{width:"100px"}} src="./images/node.png" alt=""/>
            
        </div>
    </section>

    <section className="work ">
        <h1 className="section_heading">My workds & Review</h1>
        <div className="wrapper">
           <div className="slider_wrapper ">
            <div className="icon_wrap">
                <i className="uil uil-feedback"></i>
            </div> 
            <div id="carouselExampleSlidesOnly" className="carousel fixhight " data-bs-ride="carousel" >

                    <Carousel indicators={false} controls={false} >
                 {getreview.map(element => (
          <Carousel.Item key={element.id}>
            <p className='slidep '>{element.reviewes}</p>
                    <div className='text-center'><img className='slideimg  ' src={"./images/"+element.img} alt=""/></div>
                    <h2 className='slideh2 text-center'>{element.client}</h2>
                    <h6 className='slideh6 text-center'>{element.position}</h6>
          </Carousel.Item>
               ))}
             </Carousel>

            </div>


          
            
            </div>
           {/* <div className="portfolio">
         
               <div className="tabs">
                   <ul>
                       <li><a className="active "style={{ textDecoration: 'none' }}  href="#" data-filter="*">All</a></li>
                       <li><a href="#"style={{ textDecoration: 'none' }}  data-filter=".design">UI/Ux Design</a></li>
                       <li><a href="#" style={{ textDecoration: 'none' }} data-filter=".frontend">Frontend</a></li>
                       <li><a href="#" style={{ textDecoration: 'none' }} data-filter=".backend">Backend</a></li>
                   </ul>
               </div>
               <div className="portfolio_wrapper">
                <div className="item design">
                    <a className="magnify" href="./images/1.jpg" title="something">

                        <img src="./images/1.jpg" alt=""/>
                    </a>
                </div>
                <div className="item frontend">
                   <a className="magnify" href="./images/2.jpg" title="something1">
                        <img src="./images/2.jpg" alt=""/>
                    </a>
                </div>
                <div className="item backend">
                    <a className="magnify" href="./images/3.jpg" title="something2">
                        <img src="./images/3.jpg" alt=""/>
                    </a>
                </div>
                <div className="item design">
                    <a className="magnify" href="./images/4.jpg" title="something3">
                        <img src="./images/4.jpg" alt=""/>
                    </a>
                </div>
                <div className="item design">
                    <a className="magnify" href="./images/5.jpg" title="something4">
                        <img src="./images/5.jpg" alt=""/>
                    </a>
                </div>
                <div className="item backend">
                    <a className="magnify" href="./images/3.jpg" title="something5">
                        <img src="./images/3.jpg" alt=""/>
                    </a>
                </div>
                <div className="item frontend">
                    <a className="magnify" href="./images/3.jpg" title="something6">
                        <img src="./images/3.jpg" alt=""/>
                    </a>
                </div>
                <div className="item backend">
                    <a className="magnify" href="./images/3.jpg" title="something7">
                        <img src="./images/3.jpg" alt=""/>
                    </a>
                </div>
                <div className="item backend">
                    <a className="magnify" href="./images/3.jpg" title="something8">
                        <img src="./images/3.jpg" alt=""/>
                    </a>
                </div>


               </div>
           </div> */}
        </div>
    </section>



    <section className="contact">
        <h1 className="section_heading">Contact Me</h1>
        <div className="wrapper">
            <div className="left">
                <div>
                    <div><i className="uil uil-phone-volume"></i> </div>
                    <div>
                        <h4>Call me </h4>
                        {getaboutusdata.map((element, id) => {
                  return (
                    <>
                      <span>{element.phone}</span>
                    </>
                  );
                })}
                    </div>
                </div>
                <div>
                    <div><i className="uil uil-envelope"></i> </div>
                    <div>
                        <h4>Email me</h4>
                        {getaboutusdata.map((element, id) => {
                  return (
                    <>
                      <span>{element.email}</span>
                    </>
                  );
                })}
                    </div>
                </div>
                <div>
                    <div><i className="uil uil-map-marker"></i> </div>
                    <div>
                        <h4>Address</h4>
                        {getaboutusdata.map((element, id) => {
                  return (
                    <>
                      <span>{element.address}</span>
                    </>
                  );
                })}
                    </div>
                </div>
            </div>
            <div className="right mx-100%" >
              
                    <div className="form_group mb-3" >
                        <div>
                            <label for="">Name</label>
                            <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />

                        </div>
                        <div>
                            <label for="">Email</label>
                            <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />

                        </div>
                    </div>

                    <div className="form_group textarea_wrapper">
                        <div>
                            <label for="">Message</label>
                            <textarea placeholder="Your message" cols="30" rows="4" value={message} onChange={e => setMessage(e.target.value)}></textarea>

                        </div>
                       
                    </div>
                    <button onClick={submit}>Send Message</button>

                

      
        <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span>


            </div>
        </div>
    </section>
   
</main>
<footer className="container">
    <span>@ 2022 All rights reserved </span>
</footer>
   
   </>
  )
}

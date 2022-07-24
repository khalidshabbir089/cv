import React from 'react'
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Slider.css';
import { useState,useEffect } from 'react';
import { baseurl } from '../baseurl/baseurl';

const Slider = () => {

// =============================================================
const [getportfolio,setportfolio]=useState([]);

const portfoliodata= async ()=>{
    const res = await fetch(baseurl+"/getportfolio",{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
        },
    });
    const portfolio = await res.json();
    if(res.status === 422|| !portfolio){
        console.log("error");
    }else{
      setportfolio(portfolio);
     
    }
};
// ====================================================


useEffect(() => {
  portfoliodata()
  }, []);

  


    const settings = {
        dots: false,
        infinite: true,
        speed: 1200,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      const linked = getportfolio.map((obj,id)=>{   
        return (obj.link);   
      });   
  return (
    <section className='slicksliderreact m-0 '>
            <h2 className='section_heading mb-5'> Portfolio</h2>

    <div className=''>
            <Sliders className=' w-auto m-0 p-0' {...settings}>
            {getportfolio.map((element, id) => {
              
         
                  return (
                    <>
                       <div className=' cardwrapper  mx-auto  '  >
                     <Card className='cardwrapper  ' style={{ }}>
                         <Card.Img variant="top" src={"./images/"+element.image} />
                         <Card.Body>
        <Card.Title className='slidertitle'>{element.title}</Card.Title>
        <Card.Text className='slidertitle'>
         {element.description}
        </Card.Text>
        <Button variant="primary"><a className='text-decoration-none text-light'target="_blank" href={element.link}>View</a></Button>
      </Card.Body>
                    </Card>
              </div>
                    </>
                  );
                })}
            
            
      
            </Sliders>
          </div>
    </section>
  )
}

export default Slider
import React, { useState } from "react";
import "../styles/Gallary.css"
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa'
import pdffile from "./unit1.pdf"
const images = [
    {
        image: "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
        image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
        image: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
        image: "https://images.pexels.com/photos/2775196/pexels-photo-2775196.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
        image: "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
        image: "http://store-images.s-microsoft.com/image/apps.34807.13737222747171486.b5d22c01-23d2-4c58-8ec5-615ceed070c8.535b2b2a-25be-40d3-afa7-2341fde67a8b",
        pdf: pdffile
    }
]

function Gallary(){

const [curr, setCurr] = useState(0);
const length = images.length;


    const prevSlide = () => {
        setCurr(curr === 0 ? length-1 : curr-1);
    }

    const nextSlide = () => {
        setCurr(curr===length-1 ? 0 : curr+1);
    }



    return(
        <div className="container">
            <div className="heading">
                Image Slider
            </div>
            <div className="slider">
                <FaArrowAltCircleLeft className="leftArrow" onClick={prevSlide}></FaArrowAltCircleLeft>
                {
                    images.map((pic, index) => {
                        return(    
                            <div className={index === curr ? 'slide active' : 'slide'} key={index}>
                                { 
                                    index === curr && (
                                        <div>
                                        
                                        {
                                            pic.pdf ? (
                                                <a href={pic.pdf}>{pic.image}</a>
                                            ):
                                            (
                                                <img key={index} src={pic.image} alt="beautiful pic" className="image"></img>
                                            )
                                        }
                                        
                                        </div>
                                        
                                    )
                                }
                            </div>                    
                            
                        )
                    })
                }
                <FaArrowAltCircleRight className="rightArrow" onClick={nextSlide}></FaArrowAltCircleRight>
            </div>
            
        </div>
    )
}

export default Gallary
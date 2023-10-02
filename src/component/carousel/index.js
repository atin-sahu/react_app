import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GrFormNext from 'react-icons/gr'
import GrFormPrevious from 'react-icons/gr'

const Carousel = () => {
    return (
        <>
            <Slider
                autoplay
                autoplaySpeed={4000}
                dots
                initialSlide={2}
                infinite
                prevArrow={<GrFormPrevious />}
                nextArrow={<GrFormNext />}
                dotsClass="slick-dots"
            >
                {data.map((item, index) => (
                    <div key={index}>
                        <img src={item} alt="" style={{ width: "100%" }} />
                    </div>
                ))}
            </Slider>
        </>
    );
};

export default Carousel;
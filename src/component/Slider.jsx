import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = (props) => {

    const {
        arrImages
    } = props
  return (
    <div>
      <h1>Slider</h1>
        <Carousel
            autoPlay
            emulateTouch
            infiniteLoop
            stopOnHover
            showIndicators
            interval={2000}
            showThumbs={false}
        >
            { arrImages?.length ? 
                arrImages?.map((item)=>
                        <div key={item.name}>
                            <img src={item.url} />
                        </div> 
                ) 
                : null
            }
        </Carousel>
    </div>
  )
}

export default Slider

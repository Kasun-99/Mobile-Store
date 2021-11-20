import React from 'react'
import './Slider.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import './Slider.css';

import img1 from '../../images/summury/s-1.jpeg';
import img2 from '../../images/summury/s-2.jpeg';
import img3 from '../../images/summury/s-3.jpeg';
import img4 from '../../images/summury/s-4.jpeg';
import img5 from '../../images/summury/s-5.jpeg';
import img6 from '../../images/summury/s-6.jpeg';
import img7 from '../../images/summury/s-7.jpeg';
import img8 from '../../images/summury/s-8.jpeg';
import img9 from '../../images/summury/s-9.jpeg';


// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);




    
const ImageSlider =() => {
    let data= [
        {
            id: 1,
            imgSrc: img1,
        },
        {
            id: 2,
            imgSrc: img2,
        },
        {
            id: 3,
            imgSrc: img3,
        },
        {
            id: 4,
            imgSrc: img4,
        },
        {
            id: 5,
            imgSrc: img5,
        },
        {
            id: 6,
            imgSrc: img6,
        },
        {
            id: 7,
            imgSrc: img7,
        },
        {
            id: 8,
            imgSrc: img8,
        },
        {
            id: 9,
            imgSrc: img9,
        }

    ]
    return (
        
        <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        loop={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false
        }}
        style={{
            width: '40%',
            height: '60%',
            marginTop: '2rem',
            marginBottom:'2rem',
            borderRadius: '20px',
            boxShadow: '0px 0px 19px 0px rgba(0,0,0,0.24)'
        }}
    > 
        {data.map((item, index)=>{
            return(
                <SwiperSlide key={index}>
                  <img src={item.imgSrc} style={{ width: '100%' }} alt="" />
                </SwiperSlide>
            )
        })}
        
        
    </Swiper> 
    )
}

export default ImageSlider;

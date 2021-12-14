import React from 'react';
import styled from 'styled-components';
import img9 from "../static/9.jpg"
import img8 from "../static/8.jpg"
import img7 from "../static/7.jpg"
import img6 from "../static/6.jpg"
import img5 from "../static/5.jpg"
import img4 from "../static/4.jpg"
import img3 from "../static/3.jpg"
import img2 from "../static/2.jpg"
import img1 from "../static/1.jpg"

// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/autoplay'
import 'swiper/components/navigation'
import 'swiper/components/pagination'

// import Swiper core and required modules
import SwiperCore, {Autoplay, Pagination, Navigation} from 'swiper';
// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const SwiperSlice = () => {
    return (
        <SwiperWrap>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    "delay" : 2500,
                    "disableOnInteraction" : false
                }}
                pagination={{
                    "clickable" : true
                }}
                className="mySwiper">
                <SwiperSlide><img className='all-img' src={img1} alt=''/></SwiperSlide>
                <SwiperSlide><img className='all-img' src={img2} alt=''/></SwiperSlide>
                <SwiperSlide><img className='all-img' src={img3} alt=''/></SwiperSlide>
                <SwiperSlide><img className='all-img' src={img4} alt=''/></SwiperSlide>
                <SwiperSlide><img className='all-img' src={img5} alt=''/></SwiperSlide>
                <SwiperSlide><img className='all-img' src={img6} alt=''/></SwiperSlide>
                <SwiperSlide><img className='all-img' src={img7} alt=''/></SwiperSlide>
                <SwiperSlide><img className='all-img' src={img8} alt=''/></SwiperSlide>
                <SwiperSlide><img className='all-img' src={img9} alt=''/></SwiperSlide>
            </Swiper>
        </SwiperWrap>
    );
};

export default SwiperSlice;

const SwiperWrap = styled.div `
    .all-img{
        width: 100%;
    }
`
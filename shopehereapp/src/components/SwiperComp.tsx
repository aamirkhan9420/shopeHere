import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import styled from '@emotion/styled';

 const SwiperComp=()=> {
     const sliderData = [
  {
    id: "0",
    "img": 'https://i.ibb.co/qMTYfD0h/shoe1.jpg',
    text: "Summers SALE up to 50% OFF what are you wating for",
  },
  {
    id: "1",
    img: "https://i.ibb.co/Q3TFgKf8/shoe2.jpg",
    text: "AUTUMN is coming, choose what suits you THE BEST",
  },
  {
    id: "2",
    img: 'https://i.ibb.co/5WsKqkJ4/shoe3.jpg',
    text: "Make your feet as comfortable as walking on the beach",
  },
  {
    id: "3",
    img: 'https://i.ibb.co/bRPtG3Dc/shoe4.jpg',
    text: "Choose between basketball and fashion or choose both",
  },
];
  return (
    <>
      <StyledSwiper
        cssMode={true}
        loop={true}
         pagination={{
          clickable: true,
        }}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {sliderData.map((ele)=>(

        <SwiperSlide>
            <SlideWrapper>

           <SlideImage src={ele.img} />
           <SlideText>{ele.text}</SlideText>
            </SlideWrapper>
        </SwiperSlide>
        ))}
   
      </StyledSwiper>
    </>
  );
}
export default SwiperComp

const StyledSwiper = styled(Swiper)({
 width: '100%',
  height: '500px',
  position: 'relative',
  '.swiper-slide': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  '.swiper-pagination-bullet': {
    background: '#fff',  
    opacity: 0.6,
  },
  '.swiper-pagination-bullet-active': {
    background: '#ff4081', 
    opacity: 1,
  },
   '.swiper-button-next, .swiper-button-prev': {
    color: '#ff4081', // arrow color
    width: '40px',    // arrow button area width
    height: '40px',   // arrow button area height
  },
  '.swiper-button-next::after, .swiper-button-prev::after': {
    fontSize: '24px', // actual arrow icon size
  },
});
const SlideWrapper = styled('div')({
  position: 'relative',
  width: '100%',
  height: '100%',
});
const SlideImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover', 
});

const SlideText = styled('div')({
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: '#fff',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  textAlign: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.4)', // optional dark overlay
  padding: '10px 20px',
  borderRadius: '8px',
});
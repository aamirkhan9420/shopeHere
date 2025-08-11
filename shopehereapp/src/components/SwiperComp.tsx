import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import theme from './ThemeProvider';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import styled from '@emotion/styled';
import { AppDispatch, RootState } from '../store';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { FetchProductBanner } from '../features/products/ProductBannerSlice';

const SwiperComp = () => {
  let {data,loading,isErr}=useSelector((state:RootState)=>state.banner)
  let dispatch =useDispatch<AppDispatch>()
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
  useEffect(()=>{
   dispatch(FetchProductBanner())
  },[dispatch])
  return (
    <>
      <StyledSwiper
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        effect='slide'
        speed={700}
      >
        {sliderData.map((ele) => (
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
  height: '85vh',
  position: 'relative',
  '.swiper-slide': {
    ...theme.customLayout.flexCenter,
    position: 'relative',
  },
  '.swiper-pagination-bullet': {
    ...theme.customLayout.BackGroundColorWhite,
    opacity: 0.6,
  },
  '.swiper-pagination-bullet-active': {
    background: '#ff4081',
    opacity: 1,
  },
  '.swiper-button-next, .swiper-button-prev': {
    color: '#ff4081',
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  '.swiper-button-next::after, .swiper-button-prev::after': {
    fontSize: theme.typography.pxToRem(24),
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
  ...theme.customLayout.ColorWhite,
  fontSize: theme.typography.h6.fontSize,
  fontWeight: theme.typography.fontWeightBold,
  textAlign: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  padding: `${theme.spacing(1.25)} ${theme.spacing(2.5)}`,
  borderRadius: '8px',
});
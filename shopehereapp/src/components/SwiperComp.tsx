import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import theme from './ThemeProvider';

import { Navigation, Pagination, Mousewheel, Keyboard, EffectCards } from 'swiper/modules';
import styled from '@emotion/styled';
import { AppDispatch, RootState } from '../store';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { FetchProductBanner } from '../features/products/ProductBannerSlice';

const SwiperComp = () => {
  let { data, loading, isErr } = useSelector((state: RootState) => state.banner)
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);
  let dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(FetchProductBanner())
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch])
  return (
    <>
      <StyledSwiper
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        keyboard={true}
        className="mySwiper"
        speed={600}
        effect={isSmallScreen ? 'cards' : 'slide'}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, EffectCards]}
      >
        {data?.length > 0 && data?.map((ele) => (
          <SwiperSlide key={ele.id}>
            <SlideWrapper>
              <SlideImage src={ele.img} />
              <SlideText>{ele.offerText}</SlideText>
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
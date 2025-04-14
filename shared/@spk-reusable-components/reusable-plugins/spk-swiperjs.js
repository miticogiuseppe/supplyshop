import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Thumbs, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import "swiper/css/effect-flip";
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";

const SpkSwiperJs = ({ slides, navigation = false, pagination, scrollbar = false, autoplay = false, loop = false, keyboard = false, mousewheel = false, spaceBetween, breakpoint, slidesPerView, initialSlide, centeredSlides = false, grabCursor = true, watchslide = false, freemode = false, onSlideChange, onInit, className, mainClass, direction, onswiper, effect, cubeEffect, coverflowEffect, thumb, style, customModules = [], ...rest }) => {

  const modules = [Navigation, Pagination, Autoplay, Thumbs, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Mousewheel, ...customModules];

  return (
    <Swiper
      modules={modules}
      navigation={navigation}
      // pagination={pagination ? { dynamicBullets: true, clickable: true } : false}
      pagination={pagination}
      scrollbar={scrollbar}
      autoplay={autoplay === true ? { delay: 2500, disableOnInteraction: false } : autoplay}
      loop={loop}
      thumbs={thumb}
      onSwiper={onswiper}
      effect={effect}
      watchSlidesProgress={watchslide}
      freeMode={freemode}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      initialSlide={initialSlide}
      centeredSlides={centeredSlides}
      grabCursor={grabCursor}
      onSlideChange={onSlideChange}
      onInit={onInit}
      className={className}
      mousewheel={mousewheel}
      keyboard={keyboard}
      direction={direction}
      cubeEffect={cubeEffect}
      coverflowEffect={coverflowEffect}
      breakpoints={breakpoint}
      style={style}
      {...rest}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className={mainClass}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SpkSwiperJs;

"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import slidePic1 from '@/public/images/swiper/1.png';
import slidePic2 from '@/public/images/swiper/2.jpg';
import slidePic3 from '@/public/images/swiper/3.jpg';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import "./swiper-container.scss";

const SwiperContainer: React.FC = () => {
  const t = useTranslations('components.SwiperContainer');
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      title: t('slide1.title'),
      subTitle: t('slide1.subTitle'),
      picture: slidePic1
    },
    {
      title: t('slide2.title'),
      subTitle: t('slide2.subTitle'),
      picture: slidePic2
    },
    {
      title: t('slide3.title'),
      subTitle: t('slide3.subTitle'),
      picture: slidePic3
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const fadeInScaleGlowFades = {
    hidden: { opacity: 0, scale: 0.8, textShadow: "0 0 0px rgba(var(--bs-body-color-rgb), 0)" },
    visible: { 
      opacity: 1, 
      scale: 1, 
      textShadow: "0 0 20px rgba(var(--bs-body-color-rgb), 0.8)",
      transition: {
        duration: 0.8,
        textShadow: {
          duration: 0.5,
          repeat: 1,
          repeatType: "reverse",
        },
      },
    }
  };

  return (
    <>
      <div className="swiper-con">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        effect={'fade'}
        loop={true}
        navigation={false}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={false}
        modules={[Autoplay, EffectFade]}
        className="MainSwiper"
        onSlideChange={(swiper) => {
          const realIndex = swiper.realIndex % slides.length;
          setActiveIndex(realIndex);
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.title}>
            <Image src={slide.picture} alt={slide.title} fill={true} style={{ objectFit: 'cover' }} />
            <div
              className="position-absolute top-50 start-50 translate-middle text-center slide-text-wrapper"
            >
              <motion.h1 
                className="display-1 mb-4" 
                style={{ fontWeight: "bolder" }}
                variants={fadeInScaleGlowFades}
                initial="hidden"
                animate={activeIndex === index ? "visible" : "hidden"}
              >
                {slide.title}
              </motion.h1>
              <motion.h3 
                className="text-break"
                variants={fadeInUp}
                initial="hidden"
                animate={activeIndex === index ? "visible" : "hidden"}
                transition={{ delay: 0.3 }}
              >
                {slide.subTitle}
              </motion.h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </>
  );
}

export default SwiperContainer;
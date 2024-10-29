"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import slidePic1 from '@/public/images/swiper/1.png';
import slidePic2 from '@/public/images/swiper/2.jpg';
import slidePic3 from '@/public/images/swiper/3.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import "./swiper-container.scss";

const SwiperContainer: React.FC = () => {
  const t = useTranslations('components.SwiperContainer');

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
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={false}
        modules={[Autoplay, EffectFade]}
        className="MainSwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <Image src={slide.picture} alt={slide.title} fill={true} style={{ objectFit: 'cover' }} />
            <div className="slide-text">
              <h1 style={{ fontSize: '3.5rem', fontWeight: 'bolder' }}>{slide.title}</h1>
              <h2>{slide.subTitle}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </>
  );
}

export default SwiperContainer;
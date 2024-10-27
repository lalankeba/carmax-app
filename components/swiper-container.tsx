"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import slidePic1 from '@/public/images/swiper/1.png';
import slidePic2 from '@/public/images/swiper/2.jpg';
import slidePic3 from '@/public/images/swiper/7.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./swiper-container.scss";


const SwiperContainer: React.FC = () => {
  const t = useTranslations('components.SwiperContainer');

  return (
    <>
      <div className="swiper-con">
      <Swiper
        spaceBetween={30}
        effect={'slide'}
        navigation={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={false}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="MainSwiper"
      >
        <SwiperSlide>
          <Image src={slidePic1} alt="slide 1" fill={true} style={{ objectFit: 'cover' }} />
          <div className="slide-text">
            <h1 style={{ fontSize: '3.5rem', fontWeight: 'bolder' }}>{t('slide1.title')}</h1>
            <h2>{t('slide1.subTitle')}</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slidePic2} alt="slide 2" fill={true} style={{ objectFit: 'cover' }} />
          <div className="slide-text">
            <h1 style={{ fontSize: '3.5rem', fontWeight: 'bolder' }}>{t('slide2.title')}</h1>
            <h2>{t('slide2.subTitle')}</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slidePic3} alt="slide 3" fill={true} style={{ objectFit: 'cover' }} />
          <div className="slide-text">
            <h1 style={{ fontSize: '3.5rem', fontWeight: 'bolder' }}>{t('slide3.title')}</h1>
            <h2>{t('slide3.subTitle')}</h2>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}

export default SwiperContainer;
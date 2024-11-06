import LocationContainer from "@/components/location-container";
import ServicesContainer from "@/components/services-container";
import SwiperContainer from "@/components/swiper-container";
import ReviewsContainer from "@/components/reviews-container";
import GalleryContainer from "@/components/gallery-container";
import ContactContainer from "@/components/contact-container";

export default function Home() {

  return (
    <>
      <div>
        <SwiperContainer />
        <ServicesContainer />
        <LocationContainer />
        <GalleryContainer />
        <ReviewsContainer />
        <ContactContainer />
      </div>
    </>
  );
}

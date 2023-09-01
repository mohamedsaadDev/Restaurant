import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import slide1 from "../../data/imges/slide1.jpg"
import slide2 from "../../data/imges/slide2.jpg"
import slide3 from "../../data/imges/slide3.jpg"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Home.css';
const Home = () => {
  return (
    <>
      <div id='home' className='container-home'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          //navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="Swiper-home"
        >
          <SwiperSlide className='swiper-slide-home'>
            <img src={slide1} alt="" />
          </SwiperSlide>
          <SwiperSlide className='swiper-slide-home'>
            <img src={slide2} alt="" />
          </SwiperSlide>
          <SwiperSlide className='swiper-slide-home'>
            <img src={slide3} alt="" />
          </SwiperSlide>
        </Swiper>
        <div data-aos="fade-up"  data-aos-easing="linear" data-aos-duration="1000" className='container-info-home'>
              <h1 className='title-slide'>welcome to restaurant</h1>
              <p className='paragraph-slide-home'>
                Contemnit enim disserendi elegantiam confuse loquitur Ex rebus
                <br />
                enim timiditas non ex vocabulis nascitur 
                </p>
              <button className='btn-home'>ABOUT</button>
            </div>
      </div>
    </>
  )
}

export default Home
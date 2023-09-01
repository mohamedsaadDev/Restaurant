import React from 'react'
import "./Tem.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import team1 from "../../data/imges/team-1.jpg"
import team2 from "../../data/imges/team-3.jpg"
import team3 from "../../data/imges/team-4.jpg"
const Tem = () => {
    return (
        <>
            <section id='team' className='container-team'>
                <div className='container-info-team'>
                    <h2 className='title-team'>Our Team</h2>
                    <p className='subtitle-team'>Contemnit enim disserendi elegantiam</p>
                    <p className='paragraph-team'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Contemnit enim disserendi elegantiam confuse loquitur. 
                        Ex rebus enim timiditas non ex vocabulis nascitur.
                    </p>
                </div>
                <div className=''>
                    <Swiper
                    slidesPerView={4}
                    centeredSlides={true}
                    spaceBetween={30}
                    grabCursor={true}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Pagination]}
                    className="swiper-tem"
                    >
                        <SwiperSlide className='swiper-slide-tem'>
                            <img src={team1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='swiper-slide-tem'>
                            <img src={team2} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='swiper-slide-tem'>
                            <img src={team3} alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}
export default Tem
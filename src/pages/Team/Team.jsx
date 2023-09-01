import React from 'react'
import "./Team.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import team1 from "../../data/imges/team-4.jpg"
import team2 from "../../data/imges/team-1.jpg"
import team3 from "../../data/imges/team-3.jpg"
import team4 from "../../data/imges/team.jpg"
const Team = () => {
  return (
    <>
    <div id='team' className='container-team'>
        <div className='container-slide-team'>
          <div className='container-info-team'>
            <h2 className='title-team'>Our Team</h2>
            <p className='subtitle-team'>Contemnit enim disserendi elegantiam</p>
            <p className='paragraph-team'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Contemnit enim disserendi elegantiam confuse loquitur. 
              Ex rebus enim timiditas non ex vocabulis nascitur.
            </p>
          </div>
        <Swiper
        breakpoints={{
          860: {
            slidesPerView: 3,
            spaceBetween: 30,
            },
            570: {
              slidesPerView: 2,
              spaceBetween: 10,
              },
              280: {
              slidesPerView: 1,
              spaceBetween: 10,
              }
        }}
        //centeredSlides={true}
        loop={true}
        //spaceBetween={30}
        className="mySwiper"
      >
        <SwiperSlide className='swiper-slide-team'>
          <img src={team1} alt="" />
          <div className='info-Personal-team'>
            <h6>cooker</h6>
            <h4>Ahmed khaled</h4>
            <p>Contemnit enim disserendi elegantiam confuse loquitur. 
              Ex rebus enim timiditas non ex vocabulis nascitur
              </p>
              <ul className='d-flex'>
                <li><i className="fa-brands fa-facebook-f icon-info-Personal-team"></i></li>
                <li><i className="fa-brands fa-twitter icon-info-Personal-team"></i></li>
                <li><i className="fa-brands fa-google-plus-g icon-info-Personal-team"></i></li>
              </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide-team'>
          <img src={team2} alt="" />
          <div className='info-Personal-team'>
            <h6>cooker</h6>
            <h4>Ahmed khaled</h4>
            <p>Contemnit enim disserendi elegantiam confuse loquitur. 
              Ex rebus enim timiditas non ex vocabulis nascitur
              </p>
              <ul className='d-flex'>
                <li><i className="fa-brands fa-facebook-f icon-info-Personal-team"></i></li>
                <li><i className="fa-brands fa-twitter icon-info-Personal-team"></i></li>
                <li><i className="fa-brands fa-google-plus-g icon-info-Personal-team"></i></li>
              </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide-team'>
          <img src={team3} alt="" />
          <div className='info-Personal-team'>
            <h6>cooker</h6>
            <h4>Ahmed khaled</h4>
            <p>Contemnit enim disserendi elegantiam confuse loquitur. 
              Ex rebus enim timiditas non ex vocabulis nascitur
              </p>
              <ul className='d-flex'>
                <li><i className="fa-brands fa-facebook-f icon-info-Personal-team"></i></li>
                <li><i className="fa-brands fa-twitter icon-info-Personal-team"></i></li>
                <li><i className="fa-brands fa-google-plus-g icon-info-Personal-team"></i></li>
              </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide-team'>
          <img src={team4} alt="" />
          <div className='info-Personal-team'>
            <h6>cooker</h6>
            <h4>Ahmed khaled</h4>
            <p>Contemnit enim disserendi elegantiam confuse loquitur. 
              Ex rebus enim timiditas non ex vocabulis nascitur
              </p>
              <ul className='d-flex'>
                <li><i className="fa-brands fa-facebook-f icon-info-Personal-team"></i></li>
                <li><i className="fa-brands fa-twitter icon-info-Personal-team"></i></li>
                <li><i className="fa-brands fa-google-plus-g icon-info-Personal-team"></i></li>
              </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide-team'>
          <img src={team1} alt="" />
          <div className='info-Personal-team'>
            <h6>cooker</h6>
            <h4>Ahmed khaled</h4>
            <p>Contemnit enim disserendi elegantiam confuse loquitur. 
              Ex rebus enim timiditas non ex vocabulis nascitur
              </p>
              <ul className='d-flex'>
                <li><i className="fa-brands fa-facebook-f icon-info-Personal-team"></i></li>
                <li><i className="fa-brands fa-twitter icon-info-Personal-team"></i></li>
                <li><i className="fa-brands fa-google-plus-g icon-info-Personal-team"></i></li>
              </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide-team'>
          <img src={team2} alt="" />
          <div className='info-Personal-team'>
            <h6>cooker</h6>
            <h4>Ahmed khaled</h4>
            <p>Contemnit enim disserendi elegantiam confuse loquitur. 
              Ex rebus enim timiditas non ex vocabulis nascitur
              </p>
              <ul className='d-flex'>
                <li><i className="fa-brands fa-facebook-f icon-info-Personal-team"></i></li>
                <li><i className="fa-brands fa-twitter icon-info-Personal-team"></i></li>
                <li><i className="fa-brands fa-google-plus-g icon-info-Personal-team"></i></li>
              </ul>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
    </>
  )
}

export default Team
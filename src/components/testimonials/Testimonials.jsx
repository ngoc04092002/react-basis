import React from 'react'
import './testimonials.scss'
import ME from '../../assets/me.png';
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
          <SwiperSlide className="testimonials">
            <div className="client__avatar">
              <img src={ME} alt="" />
            </div>
            <h5 className='client__name'>Ernest achiever</h5>
              <small className='client__review'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quasi eaque ab nam inventore odit nostrum! Asperiores, fugiat fugit rem odio aut sequi suscipit consectetur, illum repellat sint assumenda id?
              </small>
          </SwiperSlide>
          <SwiperSlide className="testimonials">
            <div className="client__avatar">
              <img src={ME} alt="" />
            </div>
            <h5 className='client__name'>Ernest achiever</h5>
              <small className='client__review'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quasi eaque ab nam inventore odit nostrum! Asperiores, fugiat fugit rem odio aut sequi suscipit consectetur, illum repellat sint assumenda id?
              </small>
          </SwiperSlide>
          <SwiperSlide className="testimonials">
            <div className="client__avatar">
              <img src={ME} alt="" />
            </div>
            <h5 className='client__name'>Ernest achiever</h5>
              <small className='client__review'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quasi eaque ab nam inventore odit nostrum! Asperiores, fugiat fugit rem odio aut sequi suscipit consectetur, illum repellat sint assumenda id?
              </small>
          </SwiperSlide>
          <SwiperSlide className="testimonials">
            <div className="client__avatar">
              <img src={ME} alt="" />
            </div>
            <h5 className='client__name'>Ernest achiever</h5>
              <small className='client__review'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quasi eaque ab nam inventore odit nostrum! Asperiores, fugiat fugit rem odio aut sequi suscipit consectetur, illum repellat sint assumenda id?
              </small>
          </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials
import React from 'react'

import { Navigation, Pagination, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'


import SwipperAgenda from '../Agenda/SwipperAgenda'
import styles from './style.module.css'

export default function Agenda() {
    
    return (
        <div className={styles.wrapper}>
            <h2 id="agenda" className={styles.subtitle}>Anota aí a nossa agenda</h2>
            <p className={styles.paragraph}>Temos um monte de eventos que estamos criando em nosso servidor. Fique de olho que sempre tem coisa boa!</p>
        
            <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            slidesPerView={"auto"}
            spaceBetween={40}
            autoplay={false}
            a11y={true}
            pagination={true}
            breakpoints={{
                600: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                  pagination: false,
                  
                },
                1300: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
              }}
              className={styles.swipper}
            >
                <SwiperSlide  className={styles.swipperComponent}> <SwipperAgenda /> </SwiperSlide>
                <SwiperSlide  className={styles.swipperComponent}> <SwipperAgenda /> </SwiperSlide>
                <SwiperSlide  className={styles.swipperComponent}> <SwipperAgenda /> </SwiperSlide>
                <SwiperSlide  className={styles.swipperComponent}> <SwipperAgenda /> </SwiperSlide>
                <SwiperSlide  className={styles.swipperComponent}> <SwipperAgenda /> </SwiperSlide>
                <SwiperSlide  className={styles.swipperComponent}> <SwipperAgenda /> </SwiperSlide>
                <SwiperSlide  className={styles.swipperComponent}> <SwipperAgenda /> </SwiperSlide>
                <SwiperSlide  className={styles.swipperComponent}> <SwipperAgenda /> </SwiperSlide>
                <SwiperSlide  className={styles.swipperComponent}> <SwipperAgenda /> </SwiperSlide>
                <SwiperSlide  className={styles.swipperComponent}> <SwipperAgenda /> </SwiperSlide>
                <SwiperSlide  className={styles.swipperComponent}> <SwipperAgenda /> </SwiperSlide>
                <SwiperSlide  className={styles.swipperComponent}> <SwipperAgenda /> </SwiperSlide>
                <SwiperSlide  className={styles.swipperComponent}> <SwipperAgenda /> </SwiperSlide>
                <SwiperSlide  className={styles.swipperComponent}> <SwipperAgenda /> </SwiperSlide>
                <SwiperSlide  className={styles.swipperComponent}> <SwipperAgenda /> </SwiperSlide>
                <SwiperSlide  className={styles.swipperComponent}> <SwipperAgenda /> </SwiperSlide>
            </Swiper>

        </div>
    )
}
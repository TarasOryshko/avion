import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function SwiperSlider(props) {
  return (
    <Swiper
      style={{ height: 450 }}
      modules={[Navigation, Pagination, A11y]}
      navigation
      spaceBetween={20}
      slidesPerView={3}
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {props.data.map((item) => (
        <SwiperSlide key={item.id}>
          <img src={item.src} alt={item.alt} />
          <h3>{item.title}</h3>
          <p>${item.price}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
export default SwiperSlider;

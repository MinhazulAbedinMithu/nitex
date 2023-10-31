import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonial.scss";

// import required modules
import { Pagination } from "swiper/modules";
const testimonialData = [
  {
    id: 1,
    name: "John Doe",
    image: "https://via.placeholder.com/50", // Placeholder image
    feedback: "Great service! I'm very satisfied with their work.",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "https://via.placeholder.com/50", // Placeholder image
    feedback: "Amazing experience with this company. Highly recommended.",
  },
  {
    id: 3,
    name: "John Doe",
    image: "https://via.placeholder.com/50", // Placeholder image
    feedback: "Great service! I'm very satisfied with their work.",
  },
  {
    id: 4,
    name: "John Doe",
    image: "https://via.placeholder.com/50", // Placeholder image
    feedback: "Great service! I'm very satisfied with their work.",
  },
  {
    id: 5,
    name: "Jane Smith",
    image: "https://via.placeholder.com/50", // Placeholder image
    feedback: "Amazing experience with this company. Highly recommended.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <h2 className="section-title">Testimonials</h2>
      <div className="testimonial-slider">
        <Swiper
          spaceBetween={30}
          slidesPerView={2}
          pagination={true}
          modules={[Pagination]}
          loop={true}
          className="slider-root"
        >
          {testimonialData.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="slide">
              <div data-aos="fade-up" className="testimonial-card">
                <img src={testimonial.image} alt={testimonial.name} />
                <h3>{testimonial.name}</h3>
                <p>{testimonial.feedback}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;

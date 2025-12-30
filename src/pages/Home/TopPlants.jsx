import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Link, useLoaderData } from "react-router";
import plantStyle from "./plantStyle.module.css";

const TopPlants = () => {
  const { plants } = useLoaderData();

  return (
    <div className="lg:p-5 my-10 md:my-30">
      <h1 className="text-center text-info-content font-bold text-4xl md:text-5xl mb-7">
        Top Rated Indoor Plants
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className={plantStyle.Swiper}
      >
       
        <div>
          {plants.map((plant) => (
            <SwiperSlide
              key={plant.plantId}
              className={plantStyle.Swiper_slide}
            >
              <figure>
                <img
                  className="w-full h-[150px] lg:h-[250px]"
                  src={plant.image}
                  alt=""
                />
              </figure>
              <div className="flex justify-between items-center mt-15 mx-4 lg:mt-2 lg:mx-3">
                <h2 className="card-title">{plant.plantName}</h2>
                
                <div className="card-actions">
                  <Link
                    to={`/plants/${plant.plantId}`}
                    className="btn btn-sm bg-[#15803D] text-white rounded"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default TopPlants;

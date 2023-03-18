import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import ProductCard from "../ProductCart";
import Container from "../../Layout/Container";
import classes from "./DiscountsCarousel.module.scss";
import "./CarouselStyle.scss";

const DiscountsCarousel = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:4000/discounts");
        const discounts = await res.json();
        setData(discounts);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, []);
  return (
    <Container className={classes["discounts"]}>
      <h2 className={classes["discounts__title"]}>Special Discount</h2>
      {data && (
        <Swiper
          spaceBetween={0}
          slidesPerView={4}
          navigation={true}
          modules={[Navigation]}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <ProductCard data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Container>
  );
};

export default DiscountsCarousel;

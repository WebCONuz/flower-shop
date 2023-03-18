import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/Header";
import ProductCard from "../../components/ProductCart";
import Container from "../../Layout/Container";
import classes from "./Category.module.scss";
import DiscountsCarousel from "../../components/DiscountsCarousel";

const Category = () => {
  const { type } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bcData = await fetch(
          `http://localhost:4000/products?category=${type}`
        );
        const cards = await bcData.json();
        setData(cards);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, [type]);

  return (
    <>
      <Header />
      <Container className={classes["cards"]}>
        {data &&
          data.map((item) => (
            <ProductCard
              key={item.id}
              data={item}
              className={classes["card-item"]}
            />
          ))}
      </Container>
      <DiscountsCarousel />
    </>
  );
};

export default Category;

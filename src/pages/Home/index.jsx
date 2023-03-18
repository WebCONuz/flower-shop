import React from "react";
import Badge from "../../components/Badge";
import CategoryBlog from "../../components/CategoriesBlog";
import DiscountsCarousel from "../../components/DiscountsCarousel";
import Header from "../../components/Header";
import OrderForm from "../../components/OrderForm";

const Home = () => {
  return (
    <>
      <Header />
      <Badge />
      <CategoryBlog />
      <DiscountsCarousel />
      <OrderForm />
    </>
  );
};

export default Home;

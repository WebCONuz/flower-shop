import React from "react";
import { Link } from "react-router-dom";
import Container from "../../Layout/Container";
import classes from "./CategoriesBlog.module.scss";
import categories from "../../routes/categories";

const CategoryBlog = () => {
  return (
    <Container className={classes["categories"]}>
      {categories.map((category) => (
        <div key={category.text} className={classes["categories__item"]}>
          <img
            src={category.image}
            alt={category.text}
            className={classes["categories__image"]}
          />
          <Link to={category.link} className={classes["categories__button"]}>
            {category.text}
          </Link>
        </div>
      ))}
    </Container>
  );
};

export default CategoryBlog;

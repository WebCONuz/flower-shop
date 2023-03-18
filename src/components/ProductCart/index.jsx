import React, { useState } from "react";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classNames from "classnames";
import classes from "./ProductCard.module.scss";

const ProductCard = ({ className, data }) => {
  const [selected, setSelected] = useState(false);
  const selectItem = () => setSelected((prevState) => !prevState);
  return (
    <div className={classNames(classes["card"], className)}>
      <div className={classes["card__wrapper"]}>
        <img
          src={data.images[0]}
          alt={data.name}
          className={classes["card__img"]}
        />
        <h3 className={classes["card__title"]}>{data.name}</h3>
        <p className={classes["card__price"]}>
          {data.price} USD.{" "}
          {data.discount && (
            <span className={classes["card__discount"]}>
              {data.discount} USD.
            </span>
          )}
        </p>
        <button
          className={classNames(
            classes["card__button"],
            selected && classes["card__button__selected"]
          )}
          onClick={selectItem}
        >
          {selected ? "Added" : "Add to cart"}
        </button>
        <button className={classes["card__like"]}>
          <FontAwesomeIcon
            icon={selected ? faHeartSolid : faHeartRegular}
            className={classes["header__heart"]}
          />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

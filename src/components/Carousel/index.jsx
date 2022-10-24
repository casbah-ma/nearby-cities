import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import {
  CarouselContainer,
  CarouselDots,
  CarouselDot,
  CarouselImage,
} from "./Carousel.styles";

function Carousel({ image }) {
  
  const ActiveDot = () => {
    return (
      <CarouselDots>
          <CarouselDot active />
      </CarouselDots>
    );
  };

  return (
    <CarouselContainer>
      <ActiveDot />
      <CarouselImage src={image?.source} />
    </CarouselContainer>
  );
}

Carousel.propTypes = {
  images: PropTypes.array,
  auto: PropTypes.bool,
};

export default Carousel;

import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import {
  CarouselContainer,
  CarouselDots,
  CarouselDot,
  CarouselImage,
} from "./Carousel.styles";
import no_image from "../../../public/no_image.jpeg"

function Carousel({ image, auto }) {
  // const [current, setCurrent] = useState(0);
  // const length = images.length;

  // useEffect(() => {
  //   if (auto) {
  //     const interval = setInterval(() => {
  //       setCurrent(current === length - 1 ? 0 : current + 1);
  //     }, 5000);
  //     return () => clearInterval(interval);
  //   }
  // }, [current]);

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
      <CarouselImage src={image?.source || no_image.src} />
    </CarouselContainer>
  );
}

Carousel.propTypes = {
  images: PropTypes.array,
  auto: PropTypes.bool,
};

export default Carousel;

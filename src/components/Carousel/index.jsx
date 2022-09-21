import PropTypes from "prop-types";
import { useState, useMemo } from "react";
import {
  CarouselContainer,
  CarouselDots,
  CarouselDot,
  CarouselImage,
} from "./Carousel.styles";

function Carousel({ images, auto }) {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const autoSlide = useMemo(() => {
    if (auto) {
      const interval = setInterval(() => {
        setCurrent((current + 1) % length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [auto, current, length]);

  const ActiveDot = () => {
    return (
      <CarouselDots>
        {images.map((_, index) => (
          <CarouselDot
            key={index}
            onClick={() => setCurrent(index)}
            active={index === current}
          />
        ))}
      </CarouselDots>
    );
  };

  return (
    <CarouselContainer>
      <ActiveDot />
      {images.map(
        (image, index) =>
          index === current && <CarouselImage key={index} src={image} />
      )}
    </CarouselContainer>
  );
}

Carousel.propTypes = {};

export default Carousel;

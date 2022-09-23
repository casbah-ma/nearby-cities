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
        setCurrent(current === length - 1 ? 0 : current + 1);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [current]);

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
      {images.length > 0 &&
        images.map(
          (image, index) =>
            index === current && <CarouselImage key={index} src={image.url} />
        )}
    </CarouselContainer>
  );
}

Carousel.propTypes = {
  images: PropTypes.array,
  auto: PropTypes.bool,
};

export default Carousel;

import PropTypes from "prop-types";
import prependHttp from 'prepend-http';
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
      <CarouselImage src={prependHttp(image)} />
    </CarouselContainer>
  );
}

Carousel.propTypes = {
  images: PropTypes.array,
  auto: PropTypes.bool,
};

export default Carousel;

import React from "react";
import PropTypes from "prop-types";
const Carousel = React.lazy(() => import("../Carousel"));
import { DistanceIcon, MapIcon } from "../Icons";
import {
  CardContainer,
  CardImage,
  CardContent,
  CardTitle,
  CardActions,
  CardDescription,
  CardLink,
  CardButton,
} from "./Card.styles";

function Card({ theme, size, title, distance, images, step, t, location }) {
  return (
    <CardContainer size={size}>
      <CardImage size={size}>
        <Carousel images={images} auto />
      </CardImage>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardActions>
          <CardDescription>
            <DistanceIcon />
            Distance: {distance}
          </CardDescription>
          <CardLink target="_blank" href={location}>
            Get Derection
            <MapIcon color={theme?.colors?.bg?.primary} />
          </CardLink>
        </CardActions>
        <CardButton>{step}</CardButton>
      </CardContent>
    </CardContainer>
  );
}

Card.propTypes = {
  size: PropTypes.string,
  title: PropTypes.string,
  distance: PropTypes.string,
  images: PropTypes.array,
  step: PropTypes.string,
  t: PropTypes.func,
  location: PropTypes.string,
};

export default Card;

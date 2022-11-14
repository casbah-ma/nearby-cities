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

function Card({
  theme,
  size,
  title,
  distance,
  image,
  step,
  distanceLabel,
  linkLabel,
  location,
}) {
  return (
    <CardContainer size={size} data-testid="card">
      <CardImage size={size}>
        <Carousel image={image} />
      </CardImage>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardActions>
          <CardDescription>
            <DistanceIcon />
            {distanceLabel}: {`${distance.toFixed(1)}km`}
          </CardDescription>
          <CardLink disabled={!location} target="_blank" href={location}>
            {linkLabel}
            <MapIcon color={!location ? "#9ca3af" : theme?.colors?.bg?.primary} />
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

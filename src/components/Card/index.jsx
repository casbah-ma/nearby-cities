import Image from "next/image";
import PropTypes from "prop-types";
import Carousel from "../Carousel";
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

function Card({ size, title, images, t, location }) {
  return (
    <CardContainer size={size}>
      <CardImage size={size}>
        <Carousel images={images} />
      </CardImage>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardActions>
          <CardDescription>
            <DistanceIcon />
            Get Derection
          </CardDescription>
          <CardLink>
            Get Derection
            <MapIcon />
          </CardLink>
        </CardActions>
        <CardButton>Step 1</CardButton>
      </CardContent>
    </CardContainer>
  );
}

Card.propTypes = {};

export default Card;

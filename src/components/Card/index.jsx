import Image from "next/image";
import PropTypes from "prop-types";
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
        <img
          src="https://source.unsplash.com/random/?sexy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
        />
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

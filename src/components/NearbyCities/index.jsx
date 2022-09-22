import PropTypes from "prop-types";
import {
  NearbyCitiesContainer,
  NearbyCitiesTitle,
  NearbyCitiesDescription,
  NearbyCitiesHeader,
  NearbyCitiesButton,
  NearbyCitiesList,
  NearbyCitiesListItem,
} from "./NearbyCities.styles";
import Card from "../Card";
import RefreshIcon from "../Icons/RefreshIcon";
import { useEffect, useState } from "react";
import { getSafe, shuffle } from "../../helpers";
import { getDistance } from "geolib";

function NearbyCities({
  latitude = 35.775781158640214,
  longitude = -5.796029414390299,
}) {
  //   const APIURL = `https://api.site.com/places?latitude=${latitude}&longitude=${longitude}`;
  const APIURL = `https://api.visittanger.com/cache/places?tags_search=histoire,balneaire,nature&cities_filter=tanger`;
  const [results, setResults] = useState([]);

  // fetch data from API
  useEffect(() => {
    fetch(APIURL)
      .then((response) => response.json())
      .then(({ status, data }) => {
        if (status === "success") {
          const DistanceFromHotel = data.map((item, i) => {
            const distance = getSafe(() =>
              getDistance(item, location.coordinates, { latitude, longitude })
            );
            console.log(`${i} =====> `, distance);
            const distanceInKm = distance / 1000;
            console.log(`${i} =====> ${distanceInKm}km`);
            return {
              ...item,
              distance: distanceInKm,
            };
          });

          setResults(DistanceFromHotel);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [APIURL]);

  return (
    <NearbyCitiesContainer>
      <NearbyCitiesHeader>
        <NearbyCitiesTitle>
          One step away to explore your desired city
        </NearbyCitiesTitle>
        <NearbyCitiesDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud Lorem ipsum dolor sit. ut labore et dolore
          magna
        </NearbyCitiesDescription>
        <NearbyCitiesButton onClick={() => {}}>
          Refresh <RefreshIcon />
        </NearbyCitiesButton>
      </NearbyCitiesHeader>
      <NearbyCitiesList>
        <NearbyCitiesListItem>
          <Card
            images={[
              "https://source.unsplash.com/random/?night",
              "https://source.unsplash.com/random/?city",
              "https://source.unsplash.com/random/?street",
            ]}
          />
        </NearbyCitiesListItem>
        <NearbyCitiesListItem>
          <Card
            size="lg"
            images={[
              "https://source.unsplash.com/random/?night",
              "https://source.unsplash.com/random/?city",
              "https://source.unsplash.com/random/?street",
            ]}
          />
        </NearbyCitiesListItem>
        <NearbyCitiesListItem>
          <Card
            size="lg"
            images={[
              "https://source.unsplash.com/random/?night",
              "https://source.unsplash.com/random/?city",
              "https://source.unsplash.com/random/?street",
            ]}
          />
        </NearbyCitiesListItem>
        <NearbyCitiesListItem>
          <Card
            images={[
              "https://source.unsplash.com/random/?night",
              "https://source.unsplash.com/random/?city",
              "https://source.unsplash.com/random/?street",
            ]}
          />
        </NearbyCitiesListItem>
      </NearbyCitiesList>
    </NearbyCitiesContainer>
  );
}

NearbyCities.propTypes = {};

export default NearbyCities;

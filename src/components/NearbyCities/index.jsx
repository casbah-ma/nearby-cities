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

function NearbyCities({ latitude, longitude }) {
  //   const APIURL = `https://api.site.com/places?latitude=${latitude}&longitude=${longitude}`;
  const APIURL = `https://api.visittanger.com/cache/places?tags_search=histoire,balneaire,nature&cities_filter=tanger`;
  const [results, setResults] = useState([]);
  const [shuffleData, setShuffle] = useState([]);

  // fetch data from API
  useEffect(() => {
    fetch(APIURL)
      .then((response) => response.json())
      .then(({ status, data }) => {
        if (status === "success") {
          const DistanceFromHotel = data.map((item, i) => {
            const distance = getSafe(() =>
              getDistance(item.location.coordinates, { latitude, longitude })
            );
            const distanceInKm = distance / 1000;
            return {
              ...item,
              distance: distanceInKm ? distanceInKm + "km" : "0km",
            };
          });
          setShuffle(shuffle(DistanceFromHotel));
          setResults(DistanceFromHotel);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [APIURL]);

  useEffect(() => {
    console.log(shuffleData);
  }, [shuffleData]);

  const handleRefresh = () => {
    setShuffle([...shuffle(shuffleData)]);
  };

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
        <NearbyCitiesButton onClick={handleRefresh}>
          Refresh <RefreshIcon />
        </NearbyCitiesButton>
      </NearbyCitiesHeader>
      <NearbyCitiesList>
        {shuffleData.slice(0, 4).map((item, i) => (
          <NearbyCitiesListItem key={i}>
            <Card
              size={(i === 1 || i === 2) && "lg"}
              step={`Step ${i + 1}`}
              title={item.title.en}
              images={item.media}
              distance={item.distance}
            />
          </NearbyCitiesListItem>
        ))}
      </NearbyCitiesList>
    </NearbyCitiesContainer>
  );
}

NearbyCities.propTypes = {};

export default NearbyCities;

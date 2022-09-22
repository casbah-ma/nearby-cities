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

function NearbyCities({ title, description, latitude, longitude, APIURL }) {
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
        <NearbyCitiesTitle>{title}</NearbyCitiesTitle>
        <NearbyCitiesDescription>{description}</NearbyCitiesDescription>
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

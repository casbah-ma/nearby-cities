import PropTypes from "prop-types";
//Styled Components
import {
  NearbyCitiesContainer,
  NearbyCitiesTitle,
  NearbyCitiesDescription,
  NearbyCitiesHeader,
  NearbyCitiesButton,
  NearbyCitiesList,
  NearbyCitiesListItem,
} from "./NearbyCities.styles";
// Components
import Card from "../Card";
import RefreshIcon from "../Icons/RefreshIcon";
import { useEffect, useState } from "react";
import { getSafe, shuffle } from "../../helpers";
import { getDistance } from "geolib";
import Provider from "../Provider";

function NearbyCities({
  theme,
  title,
  description,
  latitude,
  longitude,
  linkLabel,
  distanceLabel,
  APIURL,
}) {
  const [shuffleData, setShuffle] = useState([]);

  // Sort the data by distance
  const sortData = (data) => {
    const sortedData = data.sort((a, b) => {
      return a.distance - b.distance;
    });
    console.log(sortedData);
    return sortedData;
  };
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
              distance: distanceInKm ? distanceInKm : "0",
              locationUrl: `https://www.google.com/maps/search/?api=1&query=${item.location.coordinates[1]},${item.location.coordinates[0]}`,
            };
          });
          setShuffle(shuffle(DistanceFromHotel));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [APIURL]);

  // get random data from API
  const handleRefresh = () => {
    setShuffle([...shuffle(shuffleData)]);
  };

  return (
    <Provider theme={theme}>
      <NearbyCitiesContainer data-testid="NearbyCities">
        <NearbyCitiesHeader>
          <NearbyCitiesTitle>{title}</NearbyCitiesTitle>
          <NearbyCitiesDescription>{description}</NearbyCitiesDescription>
          <NearbyCitiesButton onClick={handleRefresh}>
            Refresh <RefreshIcon color={"#fff"} />
          </NearbyCitiesButton>
        </NearbyCitiesHeader>
        <NearbyCitiesList>
          {shuffleData.length !== 0 &&
            sortData(shuffleData.slice(0, 4)).map((item, i) => (
              <NearbyCitiesListItem key={i} index={i}>
                <Card
                  theme={theme}
                  size={i === 1 || i === 2 ? "lg" : "sm"}
                  step={`Step ${i + 1}`}
                  title={item.title.en}
                  images={item.media}
                  distance={item.distance}
                  distanceLabel={distanceLabel}
                  linkLabel={linkLabel}
                  location={item.locationUrl}
                />
              </NearbyCitiesListItem>
            ))}
        </NearbyCitiesList>
      </NearbyCitiesContainer>
    </Provider>
  );
}

NearbyCities.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  APIURL: PropTypes.string,
};

export default NearbyCities;

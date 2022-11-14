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
import { NoDataFound } from "../Lottiefiles";

function NearbyCities({
  theme,
  title,
  description,
  latitude,
  longitude,
  linkLabel,
  distanceLabel,
  buttonLabel,
  setpLabel
}) {
  const [shuffleData, setShuffle] = useState([]);
  const APIURL = `https://en.wikipedia.org/w/api.php?origin=*&action=query&generator=geosearch&ggsradius=10000&ggscoord=${latitude}|${longitude}&format=json&prop=coordinates|pageimages|description|info&pithumbsize=1000&ggslimit=100`;
  // Sort the data by distance
  const sortData = (data) => {
    const sortedData = data.sort((a, b) => {
      return a.distance - b.distance;
    });
    return sortedData;
  };
  // fetch data from API
  useEffect(() => {
    fetch(APIURL)
      .then((response) => response.json())
      .then(async ({ query }) => {
        let data = [];
        for (let key in query.pages) {
          data.push(query.pages[key]);
        }

        if (data.length > 0) {
          const DistanceFromHotel = data
            .map((item, i) => {
              const distance = getSafe(() =>
                getDistance(
                  {
                    latitude: item.coordinates[0].lat,
                    longitude: item.coordinates[0].lon,
                  },
                  { latitude, longitude }
                )
              );
              const distanceInKm = distance / 1000;
              return {
                ...item,
                distance: distanceInKm ? distanceInKm : "?",
                locationUrl:
                  item?.coordinates &&
                  `https://www.google.com/maps/search/?api=1&query=${item?.coordinates[0]?.lat},${item?.coordinates[0]?.lon}`,
              };
            })
            .filter(
              (item) =>
                item.distance !== "?" && item.thumbnail && item.thumbnail.source
            );
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
          {shuffleData.length !== 0 && (
            <NearbyCitiesButton
              onClick={handleRefresh}
              disabled={shuffleData.length <= 4}
            >
              {buttonLabel} <RefreshIcon color={theme?.colors?.text?.primary || "#fff"} />
            </NearbyCitiesButton>
          )}
        </NearbyCitiesHeader>
        {shuffleData.length !== 0 ? (
          <NearbyCitiesList>
            {sortData(shuffleData.slice(0, 4)).map((item, i) => (
              <NearbyCitiesListItem key={i} gridAreas={`step${i + 1}`}>
                <Card
                  theme={theme}
                  size={i === 1 || i === 2 ? "lg" : "sm"}
                  step={`${setpLabel} ${i + 1}`}
                  title={item.title}
                  image={item.thumbnail}
                  distance={item.distance}
                  distanceLabel={distanceLabel}
                  linkLabel={linkLabel}
                  location={item.locationUrl}
                />
              </NearbyCitiesListItem>
            ))}
          </NearbyCitiesList>
        ) : (
          <NoDataFound />
        )}
      </NearbyCitiesContainer>
    </Provider>
  );
}

NearbyCities.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
};

export default NearbyCities;

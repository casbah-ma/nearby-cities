import React from "react";
const NearbyCities = React.lazy(() => import("../components/NearbyCities"));
const Provider = React.lazy(() => import("../components/Provider"));
import theme from "../../theme";

const props = {
  title: "One step away to explore your desired city",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit. ut labore et dolore magna",
  latitude: 35.76727,
  longitude: -5.79975,
  distanceLabel: "Distance",
  linkLabel: "Get Direction",
  setpLabel: "Step",
  buttonLabel: "Refresh"
  
};

export default function Home() {
  return (
    <Provider theme={theme}>
      <NearbyCities {...props} />
    </Provider>
  );
}

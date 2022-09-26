import Card from ".";

export default {
  title: "Components/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;
export const Small = Template.bind({});
export const Large = Template.bind({});
Small.args = {
  size: "sm",
  title: "Small Card",
  distance: "1.5 km",
  distanceLabel: "Distance",
  step: "Step 1",
  linkLabel: "Get Direction",
  location:
    "https://www.google.com/maps/search/?api=1&query=35.775781158640214,-5.796029414390299",
  images: [
    { url: "https://source.unsplash.com/random/?country" },
    { url: "https://source.unsplash.com/random/?city" },
    { url: "https://source.unsplash.com/random/?street" },
  ],
};
Large.args = {
  ...Small.args,
  size: "lg",
  title: "Large Card",
};

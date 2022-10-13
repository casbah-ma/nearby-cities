import NearbyCities from ".";

export default {
  title: "Sections/NearbyCities",
  component: NearbyCities,
};

const Template = (args) => <NearbyCities {...args} />;
export const Default = Template.bind({});
Default.args = {
  APIURL:
    "https://api.visittanger.com/cache/places?tags_search=histoire,balneaire,nature&cities_filter=tanger",
  title: "One step away to explore your desired city",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit. ut labore et dolore magna",
  latitude: 35.775781158640214,
  longitude: -5.796029414390299,
  linkLabel: "Get Direction",
};

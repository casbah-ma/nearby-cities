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
  images: [
    "https://source.unsplash.com/random/?night",
    "https://source.unsplash.com/random/?city",
    "https://source.unsplash.com/random/?street",
  ],
};
Large.args = {
  ...Small.args,
  size: "lg",
  title: "Large Card",
};

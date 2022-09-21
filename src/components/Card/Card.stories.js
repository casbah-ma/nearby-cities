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
  description: "This is a small card",
};
Large.args = {
  size: "lg",
  title: "Large Card",
  description: "This is a large card",
};

import Carousel from ".";

export default {
  title: "Components/Carousel",
  component: Carousel,
};

const Template = (args) => <Carousel {...args} />;
export const Default = Template.bind({});
Default.args = {
  images: [
    "https://source.unsplash.com/random/?night",
    "https://source.unsplash.com/random/?city",
    "https://source.unsplash.com/random/?street",
  ],
};

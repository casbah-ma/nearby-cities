import Carousel from ".";

export default {
  title: "Components/Carousel",
  component: Carousel,
};

const Template = (args) => <Carousel {...args} />;
export const Default = Template.bind({});
Default.args = {
  images: [
    { url: "https://source.unsplash.com/random/?country" },
    { url: "https://source.unsplash.com/random/?city" },
    { url: "https://source.unsplash.com/random/?street" },
  ],
};

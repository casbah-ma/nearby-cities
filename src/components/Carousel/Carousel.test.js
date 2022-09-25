import { screen, render } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./Carousel.stories";

const { Default } = composeStories(stories);
describe("Carousel", () => {
  it("should render Carousel Default", async () => {
    render(<Default />);
    const Carousel = await screen.findAllByRole("img");
    expect(Carousel).toHaveLength(1);
  });
});

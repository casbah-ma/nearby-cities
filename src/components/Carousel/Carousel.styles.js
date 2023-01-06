import tw, { styled } from "twin.macro";

export const CarouselContainer = tw.div`w-full h-full relative rounded-t-xl`;

export const CarouselWrapper = tw.div`w-full h-full flex items-center justify-center overflow-hidden`;

export const CarouselImage = tw.img`w-full h-full bg-cover object-cover rounded-t-xl transition-transform duration-500 ease-in-out`;

export const CarouselDots = tw.div` lg:w-[12.5rem] lg:h-[2.375rem] h-[1.875rem] w-[5rem] p-3 flex items-center justify-center rounded-full gap-2 bg-[rgba(29, 29, 29, 0.8)] shadow-[2px 4px 16px rgba(0, 0, 0, 0.16)] 
absolute mx-[9rem] lg:mx-[12.5rem] left-0 right-0 bottom-10  lg:bottom-5 z-20`;

export const CarouselDot = styled.button(({ active }) => [
  tw`w-2.5 h-2.5  rounded-full bg-[#9F9F9F] shadow-[2px 4px 48px rgba(0, 0, 0, 0.1)] `,
  active &&
    tw`w-3.5 h-3.5 bg-white scale-105 transition-transform duration-500 ease-out`,
]);

export const CarouselDotActive = tw(CarouselDot)`bg-[#007ADF]`;

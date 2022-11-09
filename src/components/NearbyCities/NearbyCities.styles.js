import tw, { styled } from "twin.macro";

export const NearbyCitiesContainer = tw.div`flex flex-col items-center justify-around w-full h-full mx-auto bg-[#F8F8F8] rounded-[48px] p-2 lg:p-10 `;
export const NearbyCitiesHeader = tw.section`flex flex-col items-center justify-center mx-auto gap-4 mb-20 mt-20`;
export const NearbyCitiesTitle = styled.h2(({ theme }) => [
  tw`w-full lg:w-[32rem] font-spectral text-center font-bold text-2xl md:text-5xl lg:text-[44px] text-[#0E0D12]`,
  ` font-family: ${theme.fontFamily.primary};
`,
]);

export const NearbyCitiesDescription = styled.p(({ theme }) => [
  tw`w-full text-xs md:text-sm lg:w-[44rem] font-popping mt-4 lg:text-lg text-center text-[#0E0D12]`,
  ` font-family: ${theme.fontFamily.secondary};
  `,
]);
export const NearbyCitiesButton = styled.button(({ theme }) => [
  tw`w-full lg:w-[10.625rem] h-[3.75rem] rounded-full flex justify-center items-center gap-2  text-[20px] [text-transform: uppercase]  font-normal mt-4`,
  `font-family: ${theme.fontFamily.primary};
   background: ${theme.colors.bg.primary};
   color: ${theme.colors.text.secondary};
  `,
]);

export const NearbyCitiesList = tw.div`grid grid-cols-1 grid-rows-4 md:grid-rows-2  grid-flow-col gap-8 `;
export const NearbyCitiesListItem = styled.div`
  ${tw`h-fit `}
  ${(props) => props.index === 1 && tw`md:-mt-[100px]`}
`;

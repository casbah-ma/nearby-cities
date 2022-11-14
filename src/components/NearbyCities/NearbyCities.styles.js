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
  tw`w-full lg:w-[10.625rem] h-[3.75rem] rounded-full flex justify-center items-center gap-2 uppercase text-[20px]   font-normal mt-4`,
  `font-family: ${theme.fontFamily.primary};
   background: ${theme.colors.bg.primary};
   color: ${theme.colors.text.secondary};
  `,
]);

export const NearbyCitiesList = styled.div(({ theme }) => [
  ` width: 100%;
    height: 100%;
    display: grid;
    padding: 0;
    grid-template-columns: 34.875rem 34.875rem;
    grid-template-rows: 30.625rem 3.75rem 30.625rem;
    gap: 2.5rem;
    align-items: center;
    justify-content: center;
    grid-template-areas:
        "step1 step2"
        "step3 step2"
        "step3 step4";
    @media (max-width: 1024px) {
      grid-template-columns: 25rem 25rem !important;
      align-items: unset;
    }
    @media (max-width: 768px) {
      grid-template-columns: 21rem 22rem !important;
    }
    @media (max-width: 425px) {
      grid-template-columns: 100% !important;
      grid-template-rows: 30.625rem 32.625rem 32.625rem 30.625rem !important;
      grid-template-areas:
        "step1"
        "step2"
        "step3"
        "step4";
    }
  `,
]);
export const NearbyCitiesListItem = styled.div(({ gridAreas }) => [
  `grid-area: ${gridAreas};`,
]);

import tw, { styled } from "twin.macro";

export const CardContainer = styled.section(({ size, theme }) => [
  tw`md:w-[22rem] lg:w-[34.875rem]  h-full lg:h-[30.625rem] flex flex-col items-center justify-between rounded-xl  bg-white shadow-[2px 4px 48px rgba(0, 0, 0, 0.1)]  hover:scale-105 transition-transform duration-500 ease-out`,
  size === "lg" && tw`lg:h-[36.875rem]`,
]);

export const CardImage = styled.section(({ size }) => [
  tw`w-full h-[20.125rem] rounded-t-xl`,
  size === "lg" && tw`lg:h-[26.375rem]`,
]);

export const CardContent = styled.section(({}) => [
  tw`w-full flex-1 flex flex-col items-start justify-around p-9 gap-2 relative`,
]);

export const CardTitle = styled.h2(({ theme }) => [
  tw`text-2xl font-bold`,
  //   `font-family: ${theme.fontFamily.primary}`,
]);

export const CardActions = styled.div(({ theme }) => [
  tw`w-full flex flex-col gap-4 lg:flex-row items-start justify-between p-0 mt-5 lg:mt-0`,
  //   `font-family: ${theme.fontFamily.secondary}`,
]);

export const CardDescription = styled.p(({ theme }) => [
  tw` flex items-center justify-center  text-center lg:self-end  gap-2`,
  //   `font-family: ${theme.fontFamily.primary}`,
]);
export const CardLink = styled.a(({ theme }) => [
  tw`flex items-center justify-center  text-center self-end cursor-pointer text-[#007ADF] gap-2`,
  //   `font-family: ${theme.fontFamily.secondary}`,
]);

export const CardButton = styled.div(({ theme }) => [
  tw`w-[6.875rem] h-12 px-6 py-3  text-center rounded-full absolute -top-6 left-9 bg-red-200`,
  //   `font-family: ${theme.fontFamily.primary}`,
]);

import tw from "twin.macro";

export const NearbyCitiesContainer = tw.div`flex flex-col items-center justify-around max-w-full h-[110.438rem] mx-auto bg-[#F8F8F8] rounded-[48px] p-10`;
export const NearbyCitiesHeader = tw.section`flex flex-col items-center justify-center mx-auto gap-4`;
export const NearbyCitiesTitle = tw.h2`w-[32rem] font-spectral text-center font-bold text-[44px] text-[#0E0D12]`;
export const NearbyCitiesDescription = tw.p`w-[44rem] font-popping mt-4 text-lg text-center text-[#0E0D12]`;
export const NearbyCitiesButton = tw.button`w-[10.625rem] h-[3.75rem] flex justify-center items-center gap-2  text-[20px] text-transform[uppercase] font-spectral font-normal mt-4 text-[#0D2A3F] bg-[#FDF1B9]`;
export const NearbyCitiesList = tw.div`column-count[1] md:column-count[2] gap-10`;
export const NearbyCitiesListItem = tw.div`mb-10`;

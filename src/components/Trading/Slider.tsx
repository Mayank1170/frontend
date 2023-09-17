// // components/RangeSlider.tsx
// import React from "react";
// import ReactSlider, { ReactSliderProps } from "react-slider";
// import cn from "classnames";

// export const RangeSlider = <T extends number | readonly number[]>(
//   _props: ReactSliderProps<T>
// ) => {
//   return (
//     <ReactSlider
//       {..._props}
//       renderThumb={(props, state) => (
//         <div
//           {...props}
//           className={cn(
//             "bg-black border border-[#4CFFFF8F] rounded-lg text-sm w-16 h-8 text-white flex items-center justify-center cursor-grab"
//           )}
//         >
//           {state.valueNow}X
//         </div>
//       )}
//       renderTrack={(props, state) => {
//         //check if there are multiple values
//         const points = Array.isArray(state.value) ? state.value.length : null;
//         const isMulti = points && points > 0;
//         const isLast = isMulti ? state.index === points : state.index === 1;
//         const isFirst = state.index === 0;
//         return (
//           <div
//             {...props}
//             className={cn("h-1/4 top-1/2 -translate-y-1/2 bg-[#80FEE3]", {
//               //use 1/4 height or width depending on the orientation and make sure to center it.

//               "rounded-full": true,
             
//             })}
//           ></div>
//         );
//       }}
//       renderMark={(props) => {
//         return (
//           <div
//             {...props}
//             className={cn("top-1/2 ml-8 -translate-y-1/2 bg-[#80FEE3] rounded-sm", {
//               "w-2 h-5": true,
           
//             })}
//           ></div>
//         );
//       }}
//       className="h-9 mb-5"
//     />
//   );
// };
// export default RangeSlider;

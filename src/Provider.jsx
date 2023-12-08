// There two ways you can use ContextApi
// You can uncomment any of this from every folder and just go to terminal do npm start

// WAY 1: ------BELOW------->

// import React, { createContext } from 'react';
// import Consumer from './Consumer';
// // Create a context
// const MyContext = createContext();
// // Provider component
// export default function MyProvider() {
//   // Set the context value as an object
//   let contextValue = { greeting: "Hello" };
//   return (
//     <MyContext.Provider value={contextValue}>
//         <Consumer/>
//     </MyContext.Provider>
//   );
// }

// export { MyContext };  // Export the context for use in other components


// WAY 2: ------BELOW------->
// When you have SINGLE  CONTEXT

// import React from 'react'
// import { createContext } from 'react'
// import Consumer from './Consumer'
// const MyContext = createContext()
// export default function Provider() {
//     let data = "Hello World"
//     let data_2 = "World"
//   return (
//     <>
//     <MyContext.Provider value={data}>
//         <Consumer/>
//     </MyContext.Provider>
//     </>
//   )
// }
// export {MyContext}



// When you have MORE THAN SINGLE  CONTEXT

// import React from "react";
// import { createContext } from "react";
// import Consumer from "./Consumer";
// const MyContext = createContext();
// const MyContext2 = createContext();
// export default function Provider() {
//   let data = "Hello";
//   let data_2 = "World";
//   return (
//     <>
//       <MyContext.Provider value={data}>
//         <MyContext2.Provider value={data_2}>
//           <Consumer />
//         </MyContext2.Provider>
//       </MyContext.Provider>
//     </>
//   );
// }

// export { MyContext, MyContext2 };

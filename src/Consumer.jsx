// There two ways you can use ContextApi
// You can uncomment any of this from every folder and just go to terminal do npm start

// WAY 1: ------BELOW------->

// import React from 'react';
// import { MyContext } from './Provider';
// import { useContext } from 'react';
// export default function Consumer() {
//   let contextValue = useContext(MyContext);
//   // Access the greeting property
//   let greeting = contextValue ? contextValue.greeting : "";

//   return (
//     <div>
//       {greeting}
//     </div>
//   );
// }




// WAY 2: ------BELOW------->
// When you have single CONTEX

// import React from 'react'
// import { MyContext } from './Provider'
// function Consumer() {
//   return (
//     <MyContext.Consumer>
//         {
//             (data) =>{
//                 return <div>{data}</div>
//             }
//         }
//     </MyContext.Consumer>
//   )
// }

// export default Consumer

// When you have MORE THAN SINGLE  CONTEXT

// import React from 'react'
// import { MyContext,MyContext2 } from './Provider'
// function Consumer() {
//   return (
//     <MyContext.Consumer>
//         {
//             (data) =>{
//                 return (
//                     <MyContext2.Consumer>
//                         {
//                             (data_2) =>{
//                                 return <div>{data}{data_2}</div>
//                             }
//                         }
//                     </MyContext2.Consumer>
//                 )
//             }
//         }
//     </MyContext.Consumer>
//   )
// }

// export default Consumer
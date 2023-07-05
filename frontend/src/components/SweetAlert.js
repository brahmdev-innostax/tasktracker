/**
  was trying to create a custom SweetAlert for the app,
  but ended up using the sweetalert library of npm
  so this whole code is commented out
**/
// import { useEffect, useRef } from "react";

// function SweetAlert(props) {
//   const alertDiv = useRef();
//   useEffect(() => {
//     setTimeout(() => {
//       props.callBack &&
//         props.callBack({ message: props.message, showAlert: false });
//     }, 1000);
//   }, []);

//   return (
//     <div
//       ref={alertDiv}
//       className="fixed top-8 right-10 p-2 pl-4 rounded-md shadow-md font-bold bg-blue-100 text-black "
//     >
//       <i className="fa fa-check pr-2"></i>
//       {props.message}
//     </div>
//   );
// }

// export default SweetAlert;

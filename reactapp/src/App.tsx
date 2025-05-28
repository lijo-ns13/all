// ((((((((((((((((((mouse move also move circle))))))))))))))))))

// import { useEffect, useState } from "react";

// function App() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   useEffect(() => {
//     const handleMouse = (e: MouseEvent) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", handleMouse);
//     return () => {
//       window.addEventListener("mousemove", handleMouse);
//     };
//   });
//   const circleStyle: React.CSSProperties = {
//     position: "fixed",
//     left: position.x - 25,
//     top: position.y - 25,
//     width: "50px",
//     height: "50px",
//     borderRadius: "50%",
//     backgroundColor: "blue",
//   };

//   return (
//     <>
//       <div style={circleStyle}></div>
//     </>
//   );
// }

// export default App;

// (((((((((((((((((((((___________)))))))))))))))))))))

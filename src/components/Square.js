import React from "react";
import './Square.css'

// const Squares = (props) => {
//   return (
//     <button className="square" 
//       onClick={() => props.onClick()}>
//       {props.value}
//     </button>
//   )
// }
// const Squares = ({onClick, value}) => {
//   return (
//     <button className="square" 
//       onClick={() => {onClick()}}>
//       {value}
//     </button>
//   )
// }
const Squares = ({onClick, value}) => {
  return (
    <button className="square" 
      onClick={onClick}>
      {value}
    </button>
  )
}
export default Squares
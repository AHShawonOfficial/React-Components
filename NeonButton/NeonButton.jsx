import { useState } from "react";

const [hover, setHover] = useState(false);

const NeonButton = ({
   text,
   color,
   bgcolor,
   hoverColor,
   hoverBGcolor,
   clickFunction,
}) => {
   const styles = {
      color: color,
      backgroundColor: bgcolor,
   };
   const hoverStyles = {
      color: hoverColor,
      backgroundColor: hoverBGcolor,
   };
   return (
      <button
         onMouseEnter={() => {
            setHover(true);
         }}
         onMouseLeave={() => {
            setHover(false);
         }}
         style={hover ? hoverStyles : styles}
         onClick={() => {
            clickFunction;
         }}
      >
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         {text}
      </button>
   );
};

NeonButton.defaultProps = {
   text: "BUTTON",
   color: "rgb(0,150,255)",
   bgcolor: "#fdfdfd",
   hoverColor: "black",
   hoverBGcolor: "rgb(0,150,255)",
   clickFunction: () => {
      console.log("Please define a function for click event");
   },
};

export default NeonButton;

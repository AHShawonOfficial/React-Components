import { useState } from "react";

const NeonButton = ({
   text,
   hoverColor,
   hoverBGcolor,
   clickFunction,
   style,
}) => {
   const [hover, setHover] = useState(false);
   const styles = {
      position: "relative",
      padding: "5px 10px",
      margin: "10px",
      color: "rgb(0,150,255)",
      backgroundColor: "#ebe8e8",
      transitionDuration: "0.3s",
      transitionProperty: "all",
      transitionTimingFunction: "ease-in-out",
      overflow: "hidden",
   };
   const hoverStyles = {
      backgroundColor: hoverBGcolor,
      color: hoverColor,
      boxShadow: `0 0 10px ${hoverBGcolor}, 0 0 40px ${hoverBGcolor}, 0 0 80px ${hoverBGcolor}`,
      transitionDelay: "0.5s",
   };
   const span1 = {
      position: "absolute",
      height: "2px",
      width: "100%",
      top: 0,
      left: "-100%",
      background: `linear-gradient(90deg, transparent, ${hoverBGcolor})`,
   };
   const span1hover = {
      left: "100%",
      transition: "0.5s",
   };
   const span2 = {
      position: "absolute",
      height: "100%",
      width: "2px",
      top: "-100%",
      right: 0,
      background: `linear-gradient(180deg, transparent, ${hoverBGcolor})`,
   };
   const span2hover = {
      top: "100%",
      transition: "0.5s",
      transitionDelay: "0.125s",
   };
   const span3 = {
      position: "absolute",
      height: "2px",
      width: "100%",
      right: "-100%",
      bottom: 0,
      background: `linear-gradient(270deg, transparent, ${hoverBGcolor})`,
   };
   const span3hover = {
      right: "100%",
      transition: "0.5s",
      transitionDelay: "0.25s",
   };
   const span4 = {
      position: "absolute",
      height: "100%",
      width: "2px",
      bottom: "-100%",
      left: 0,
      background: `linear-gradient(360deg, transparent, ${hoverBGcolor})`,
   };
   const span4hover = {
      bottom: "100%",
      transition: "0.5s",
      transitionDelay: "0.375s",
   };

   return (
      <button
         onMouseEnter={() => {
            setHover(true);
         }}
         onMouseLeave={() => {
            setHover(false);
         }}
         style={
            hover
               ? { ...styles, ...style, ...hoverStyles }
               : { ...styles, ...style }
         }
         onClick={clickFunction}
      >
         <span style={hover ? { ...span1, ...span1hover } : span1}></span>
         <span style={hover ? { ...span2, ...span2hover } : span2}></span>
         <span style={hover ? { ...span3, ...span3hover } : span3}></span>
         <span style={hover ? { ...span4, ...span4hover } : span4}></span>
         {text}
      </button>
   );
};

NeonButton.defaultProps = {
   text: "BUTTON",
   hoverColor: "black",
   hoverBGcolor: "rgb(0,150,255)",
   clickFunction: () => {
      console.log("Please define a function for click event");
   },
   style: {},
};

export default NeonButton;

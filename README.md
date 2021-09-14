Description 
------------
NeonButton is a small React-Component which is generally a pre-styled button. It's visualization will work best on dark pages. It's fully dynamic and very simple to use, you can also modify it by editing the jsx.

How to use
-----------
This simple button component gets some props and will work on that props dynamically. At first import it where you need it, like below line,
import NeonButton from './NeonButton'

The props of this component are-
  1. text
  2. style
  3. hoverColor
  4. hoverBGcolor
  5. clickFunction

  Descriptions of props
  ----------------------
  1. text = The "text" prop gets the text of the button. The value of this prop will be displayed on the button. eg: <NeonButton text="Hello World" />

  2. style = The style prop work same as react jsx inline styling. eg: <NeonButton style={{fontSize: "2rem"}} />

  3. hoverColor = This prop gets the color of button text while hovered. eg: <NeonButton hoverColor="white" />

  4. hoverBGcolor = This prop gets the background color of button while hovered. eg: <NeonButton hoverBGcolor="skyblue" />

  5. clickFunction = This prop gets a callback function which will be called when the button is clicked. eg: <NeonButton clickFunction={()=> {console.log("Hello World")}} />

NOTE: The default value of each props have been defined using defaultProps object. The value of props will overwrite the default values.
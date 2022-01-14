import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./DarkModeLightMode.css";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb as farLightbulb } from "@fortawesome/free-regular-svg-icons";

const lightOn = <FontAwesomeIcon icon={faLightbulb} />;
const lightOff = <FontAwesomeIcon icon={farLightbulb} />;

function DarkModeLightMode() {
  //CODE BELOW CONTROLS DARK MODE/ LIGHT MODE
  let [color, setColor] = useState("#313131"); //This state changes background color for color mode
  let [textColor, setTextColor] = useState("white"); //This state changes font color for color mode
  let [colorChangeIndicator, updateColorChangeIndicator] = useState(lightOn); //This state changes icon upon click
  let [currentClass, updateCurrentClass] = useState("darkMode");//This state updates the class name so correct light bulb appears

  document.body.style.backgroundColor = color;
  document.body.style.color = textColor;

  function colorMode() {
    if (color === "#313131") {
      setColor("#F2ECD7");
    } else if (color === "#F2ECD7") {
      setColor("#313131");
    }

    if (currentClass === "darkMode") {
      updateCurrentClass("lightMode");
    } else if (currentClass === "lightMode") {
      updateCurrentClass("darkMode");
    }

    if (colorChangeIndicator === lightOn) {
      updateColorChangeIndicator(lightOff);
    } else if (colorChangeIndicator === lightOff) {
      updateColorChangeIndicator(lightOn);
    }

    if (textColor === "white") {
      setTextColor("black");
    } else if (textColor === "black") {
      setTextColor("white");
    }
  }

  // DARK MODE/LIGHT MODE CODE ENDS

  return (
    <div>
      <button className={currentClass} onClick={colorMode}>
        {colorChangeIndicator}
      </button>
    </div>
  );
}

export default DarkModeLightMode;

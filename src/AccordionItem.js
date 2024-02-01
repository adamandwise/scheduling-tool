/**
 * Author: Adam Wise
 * Date: 1/30/2024
 *
 * The main conciete of this component is that it holds a container that holds the form. Its a UI element essentially.
 *  At the start of the app the accordion item is set to a closed state, but the user can click on the + icon and the accodrion will inflate revealing the from.
 * It is a parent component of Preferences.js and a child component of Form.js
 */

import React, { useState } from "react";
import Prefrences from "./Preferences";

function AccordionItem({ formData, handleFormInput, onButtonClick }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number"></p>
      <p className="number">Select classes and preferences</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && (
        <div className="content-box">
          <Prefrences
            formData={formData}
            handleFormInput={handleFormInput}
            onButtonClick={onButtonClick}
            handleToggle={handleToggle}
          />
        </div>
      )}
    </div>
  );
}

export default AccordionItem;

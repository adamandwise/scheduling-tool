import Prefrences from "./Preferences";
import React, { useState } from "react";

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

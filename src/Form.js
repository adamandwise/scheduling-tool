import AccordionItem from "./AccordionItem";
import React, { useState, useEffect } from "react";

function Form({ formData, handleFormInput, onButtonClick }) {
  //<All4Quarters schedule={schedule} />
  return (
    <div className="accordion">
      <h3 style={{ color: "red" }}>
        Returning students: Please check all classes you have taken so far.
      </h3>
      <h3 style={{ color: "green" }}>
        First time students: Please fill in your preferences.
      </h3>
      <AccordionItem
        formData={formData}
        handleFormInput={handleFormInput}
        onButtonClick={onButtonClick}
      />
    </div>
  );
}

export default Form;

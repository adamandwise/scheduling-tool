import { useState } from "react";
import React from "react";

function AdvisorForm() {
  const [selectedQuarters, setSelectedQuarters] = React.useState({
    fall: false,
    winter: false,
    spring: false,
    summer: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedQuarters((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <div className="generate">
      <form className="generate-advisor-form">
        <h1 className="degree-select label-styles">Add or edit courses</h1>

        <div className="degree-select">
          <select className="degree-select-styles" name="degree" id="degree">
            <option value="default">- Select a degree - </option>
            <option value="AAS">
              Associate of Applied Science in Data Analytics & Software
              Development{" "}
            </option>
          </select>
          <br></br>
        </div>

        <label className="label-styles">Select Department</label>
        <select
          className="degree-select-styles"
          name="course-prefix"
          id="courseName"
        >
          <option value="defualt">-Select Department-</option>
          <option value="CMST">CMST</option>
          <option value="ENG">ENG</option>
          <option value="MATH">MATH</option>
          <option value="SDEV">SDEV</option>
          <option value="LABSCIENCE">Lab Science</option>
        </select>

        <br />
        <label className="label-styles">
          Designate course id (i.e. 101, 102, 103, etc.):
        </label>
        <input
          className="degree-select-styles"
          type="number"
          name="course-id"
          placeholder="ex. 101 , 102 , 103 , etc."
        />
        <br></br>

        <label className="label-styles">
          Does this course have a prerequisite? If so, please enter the course:
        </label>
        <input
          className="degree-select-styles"
          type="text"
          name="prereq-course-id"
          placeholder="ex. MATH98"
        />
        <br></br>

        <label className="label-styles">
          Assign a priority level for this course (i.e. take as soon as
          possible, take year 1, take year 2, etc.):
          <input className="degree-select-styles" type="text" name="email" />
        </label>
        <br />
        <fieldset className="quarter-offered-fieldset">
          <legend className="label-styles">
            Which quarter is this course offered?
          </legend>
          <label className="quarter-offered-fieldset-options">
            <input
              type="checkbox"
              name="fall"
              checked={selectedQuarters.fall}
              onChange={handleCheckboxChange}
            />
            Fall
          </label>
          <label className="quarter-offered-fieldset-options">
            <input
              type="checkbox"
              name="winter"
              checked={selectedQuarters.winter}
              onChange={handleCheckboxChange}
            />
            Winter
          </label>
          <label className="quarter-offered-fieldset-options">
            <input
              type="checkbox"
              name="spring"
              checked={selectedQuarters.spring}
              onChange={handleCheckboxChange}
            />
            Spring
          </label>
          <label className="quarter-offered-fieldset-options">
            <input
              type="checkbox"
              name="summer"
              checked={selectedQuarters.summer}
              onChange={handleCheckboxChange}
            />
            Summer
          </label>
        </fieldset>
        <br />
        <label className="label-styles">
          Please provide a short description of the course:
          <textarea
            className="degree-select-styles"
            name="message"
            placeholder="Enter your discription here..."
          ></textarea>
        </label>
        <br />
        <button type="submit">Submit</button>

        <input type="hidden" name="required" value="true" />
      </form>
    </div>
  );
}

export default AdvisorForm;

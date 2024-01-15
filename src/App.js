import { useState } from "react";
import "./styles.css";

// const classes = [
//   {
//     class_name:,
//     pre_req:,
//     offered_in_summer:,
//     is_lab_science:,
//   }
// ]

export default function App() {
  return (
    <div className="app">
      <Header />
      <Form />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h3>🐊 GRC SDEV Scheduling Tool 🐊</h3>
    </div>
  );
}

function Form() {
  return (
    <div className="accordion">
      <h3 style={{ color: "red" }}>
        Returning students: Please check all classes you have taken so far.
      </h3>
      <h3 style={{ color: "green" }}>
        First time students: Please fill in your preferences.
      </h3>
      <AccordionItem />
      <All4Quarters />
    </div>
  );
}

function All4Quarters() {
  return (
    <div className="quarter-allign">
      <Display season="🍂 Fall Quarter 🍂" />
      <Display season="❄️ Winter  Quarter ❄️" />
      <Display season="🌸 Spring  Quarter 🌸" />
      <Display season="☀️ Summer  Quarter ☀️" />
    </div>
  );
}

function Display({ season }) {
  return (
    <div className="content-box quarter-content">
      <h5>{season} </h5>
      <hr></hr>
    </div>
  );
}

function Footer() {
  return (
    <div className="header">
      <h3>🐊 🐊</h3>
    </div>
  );
}

function AccordionItem() {
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
          <Prefrences />
        </div>
      )}
    </div>
  );
}

function Prefrences() {
  const handleFormClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="content-box" onClick={handleFormClick}>
      <form action="/">
        <label className="number form-set">
          How many summer classes would you like to take?
        </label>
        <input
          className="text-set"
          type="radio"
          id="zero"
          name="summer"
          defaultValue="zero"
          defaultChecked
        />
        <label className="text-set" htmlFor="zero">
          0
        </label>
        <input
          className="text-set"
          type="radio"
          id="one"
          name="summer"
          defaultValue="one"
        />
        <label className="text-set" htmlFor="one">
          1
        </label>
        <input
          className="text-set"
          type="radio"
          id="two"
          name="summer"
          defaultValue="two"
        />
        <label className="text-set" htmlFor="two">
          2
        </label>
        <br />
        <br />
        <label className="number" htmlFor="howMany">
          How many clases per quarter would you like to take?
        </label>
        <select className=" text-set" id="howMany" name="howMany">
          <option value={1}>1</option>
          <option value={2} selected>
            2
          </option>
          <option value={3}>3</option>
        </select>
        <br />
        <br />
        <label className="number">
          Which classes have you taken so far? (check all that apply):
        </label>
        <br />
        <label className="number form-set">Math:</label>
        <input
          type="checkbox"
          id="math97"
          name="soFar[]"
          defaultValue="math97"
        />
        <label className="text-set" htmlFor="math97">
          Math 97
        </label>
        <input
          type="checkbox"
          id="math141"
          name="soFar[]"
          defaultValue="math141"
        />
        <label className="text-set" htmlFor="math141">
          Math 141
        </label>
        <input
          type="checkbox"
          id="math146"
          name="soFar[]"
          defaultValue="math146"
        />
        <label className="text-set" htmlFor="math146">
          Math 146
        </label>
        <input
          type="checkbox"
          id="math147"
          name="soFar[]"
          defaultValue="math147"
        />
        <label className="text-set" htmlFor="math147">
          Math 147
        </label>
        <input
          type="checkbox"
          id="math256"
          name="soFar[]"
          defaultValue="math256"
        />
        <label className="text-set" htmlFor="math256">
          Math 256
        </label>
        <br />
        <label className="number form-set">Communications: </label>
        <input
          type="checkbox"
          id="cmst210"
          name="soFar[]"
          defaultValue="cmst210"
        />
        <label className="text-set" htmlFor="cmst210">
          CMST 210
        </label>
        <input
          type="checkbox"
          id="cmst220"
          name="soFar[]"
          defaultValue="cmst220"
        />
        <label className="text-set" htmlFor="cmst220">
          CMST 220
        </label>
        <input
          type="checkbox"
          id="cmst230"
          name="soFar[]"
          defaultValue="cmst230"
        />
        <label className="text-set" htmlFor="cmst230">
          CMST 230
        </label>
        <input
          type="checkbox"
          id="cmst238"
          name="soFar[]"
          defaultValue="cmst238"
        />
        <label className="text-set" htmlFor="cmst238">
          CMST 238
        </label>
        <br />
        <label className="number form-set">English: </label>
        <input
          type="checkbox"
          id="eng101"
          name="soFar[]"
          defaultValue="eng101"
        />
        <label className="text-set" htmlFor="eng101">
          ENG 101
        </label>
        <input
          type="checkbox"
          id="eng126"
          name="soFar[]"
          defaultValue="eng126"
        />
        <label className="text-set" htmlFor="eng126">
          ENG 126
        </label>
        <input
          type="checkbox"
          id="eng127"
          name="soFar[]"
          defaultValue="eng127"
        />
        <label className="text-set" htmlFor="eng127">
          ENG 127
        </label>
        <input
          type="checkbox"
          id="eng128"
          name="soFar[]"
          defaultValue="eng128"
        />
        <label className="text-set" htmlFor="eng128">
          ENG 128
        </label>
        <input
          type="checkbox"
          id="eng235"
          name="soFar[]"
          defaultValue="eng235"
        />
        <label className="text-set" htmlFor="eng235">
          ENG 235
        </label>
        <br />
        <label className="number form-set">Science: </label>
        <input
          type="checkbox"
          id="science"
          name="soFar[]"
          defaultValue="science"
        />
        <label className="text-set" htmlFor="science">
          Lab Science
        </label>
        <br />
        <label className="number form-set">Software Development: </label>
        <input
          type="checkbox"
          id="sdev101"
          name="soFar[]"
          defaultValue="sdev101"
        />
        <label className="text-set" htmlFor="sdev101">
          SDEV 101
        </label>
        <input
          type="checkbox"
          id="sdev201"
          name="soFar[]"
          defaultValue="sdev201"
        />
        <label className="text-set" htmlFor="sdev201">
          SDEV 201
        </label>
        <input
          type="checkbox"
          id="sdev106"
          name="soFar[]"
          defaultValue="sdev106"
        />
        <label className="text-set" htmlFor="sdev106">
          SDEV 106
        </label>
        <input
          type="checkbox"
          id="sdev117"
          name="soFar[]"
          defaultValue="sdev117"
        />
        <label className="text-set" htmlFor="sdev117">
          SDEV 117
        </label>
        <input
          type="checkbox"
          id="sdev108"
          name="soFar[]"
          defaultValue="sdev108"
        />
        <label className="text-set" htmlFor="sdev108">
          SDEV 108
        </label>
        <input type="checkbox" id="cs108" name="soFar[]" defaultValue="cs108" />
        <label className="text-set" htmlFor="cs108">
          CS 108
        </label>
        <input type="checkbox" id="cs109" name="soFar[]" defaultValue="cs109" />
        <label className="text-set" htmlFor="cs109">
          CS 109
        </label>
        <input
          type="checkbox"
          id="sdev121"
          name="soFar[]"
          defaultValue="sdev121"
        />
        <label className="text-set" htmlFor="sdev121">
          SDEV 121
        </label>
        <input
          type="checkbox"
          id="sdev218"
          name="soFar[]"
          defaultValue="sdev218"
        />
        <label className="text-set" htmlFor="sdev218">
          SDEV 218
        </label>
        <input
          type="checkbox"
          id="sdev219"
          name="soFar[]"
          defaultValue="sdev219"
        />
        <label className="text-set" htmlFor="sdev219">
          SDEV 219
        </label>
        <input
          type="checkbox"
          id="sdev220"
          name="soFar[]"
          defaultValue="sdev220"
        />
        <label className="text-set" htmlFor="sdev220">
          SDEV 220
        </label>
        <input
          type="checkbox"
          id="sdev280"
          name="soFar[]"
          defaultValue="sdev280"
        />
        <label className="text-set" htmlFor="sdev280">
          SDEV 280
        </label>
        <br />
        <br></br>
        <div className="generate">
          <button onClick="">Generate Schedule</button>
        </div>
      </form>
    </div>
  );
}

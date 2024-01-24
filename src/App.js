import { useEffect, useState } from "react";
import "./styles.css";

const classes = [
  {
    class_name: "Math97",
    pre_req: null,
    offered_in_summer: true,
    is_lab_science: false,
  },
  {
    class_name: "ENG101",
    pre_req: null,
    offered_in_summer: true,
    is_lab_science: false,
  },
  {
    class_name: "ENG126",
    pre_req: null,
    offered_in_summer: true,
    is_lab_science: false,
  },
  {
    class_name: "ENG127",
    pre_req: null,
    offered_in_summer: true,
    is_lab_science: false,
  },
  {
    class_name: "ENG128",
    pre_req: null,
    offered_in_summer: true,
    is_lab_science: false,
  },
  {
    class_name: "ENG235",
    pre_req: null,
    offered_in_summer: true,
    is_lab_science: false,
  },
  {
    class_name: "MATH141",
    pre_req: null,
    offered_in_summer: true,
    is_lab_science: false,
  },
  {
    class_name: "MATH147",
    pre_req: null,
    offered_in_summer: true,
    is_lab_science: false,
  },
  {
    class_name: "MATH146",
    pre_req: null,
    offered_in_summer: true,
    is_lab_science: false,
  },
  {
    class_name: "MATH256",
    pre_req: null,
    offered_in_summer: true,
    is_lab_science: false,
  },
  {
    class_name: "CMST210",
    pre_req: null,
    offered_in_summer: true,
    is_lab_science: false,
  },
  {
    class_name: "CMST220",
    pre_req: null,
    offered_in_summer: true,
    is_lab_science: false,
  },
  {
    class_name: "CMST230",
    pre_req: null,
    offered_in_summer: true,
    is_lab_science: false,
  },
  {
    class_name: "CMST238",
    pre_req: null,
    offered_in_summer: true,
    is_lab_science: false,
  },
  {
    class_name: "Lab Science",
    pre_req: null,
    offered_in_summer: true,
    is_lab_science: true,
  },
  {
    class_name: "SDEV101",
    pre_req: null,
    offered_in_summer: false,
    is_lab_science: false,
  },
  {
    class_name: "SDEV201",
    pre_req: null,
    offered_in_summer: false,
    is_lab_science: false,
  },
  {
    class_name: "SDEV106",
    pre_req: "SDEV117",
    offered_in_summer: false,
    is_lab_science: false,
  },
  {
    class_name: "CS108",
    pre_req: "Math97",
    offered_in_summer: false,
    is_lab_science: false,
  },
  {
    class_name: "CS109",
    pre_req: "Math97",
    offered_in_summer: false,
    is_lab_science: false,
  },
  {
    class_name: "SDEV121",
    pre_req: "CS109",
    offered_in_summer: false,
    is_lab_science: false,
  },
  {
    class_name: "SDEV218",
    pre_req: "Math97",
    offered_in_summer: false,
    is_lab_science: false,
  },
  {
    class_name: "SDEV219",
    pre_req: "SDEV218",
    offered_in_summer: false,
    is_lab_science: false,
  },
  {
    class_name: "SDEV220",
    pre_req: "SDEV219",
    offered_in_summer: false,
    is_lab_science: false,
  },
  {
    class_name: "SDEV280",
    pre_req: null,
    offered_in_summer: false,
    is_lab_science: false,
  },
];
export default function App() {
  useEffect(() => {
    fetch("http://localhost:3001/")
      .then((response) => response.text())
      .then((data) => console.log(data));
  }, []);

  const [formData, setFormData] = useState({
    summerClasses: 0,
    classesPerQuarter: 0,
    previousClasses: [],
  });

  function handleFormInput(event) {
    const { name, value, type, checked } = event.target;

    //check the type of form input, in this case checkbox
    if (type === "checkbox") {
      //update the state to have all previously checked form data
      setFormData((prevFormData) => {
        //get the current array, or initiallize a new array if no items have been added
        const updatedArray = prevFormData[name] ? [...prevFormData[name]] : [];

        if (checked) {
          //add the value to the array if the class was selected
          updatedArray.push(value);
        } else {
          //removes the value from the array if unchecked.
          const valueIndex = updatedArray.indexOf(value);
          if (valueIndex > -1) {
            updatedArray.splice(value, 1);
          }
        }
        //returns the new updated array with all selections
        return {
          ...prevFormData,
          [name]: updatedArray,
        };
      });
    }
    //handles all over form inputs, like radio, and number types
    else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  }

  // useEffect(() => {
  //   console.log(formData);
  // }, [formData]);

  return (
    <div className="app">
      <Header />
      <Form formData={formData} handleFormInput={handleFormInput} />
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

function Form({ formData, handleFormInput }) {
  const [schedule, setSchedule] = useState([]);

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
        onScheduleGenerate={setSchedule}
      />
      <All4Quarters schedule={schedule} />
    </div>
  );
}

function All4Quarters({ schedule }) {
  const getScheduleForSeason = (season) => {
    const quarter = schedule.find((q) => q.season === season);
    return quarter ? quarter.schedule : [];
  };

  return (
    <div className="smorter-smallign">
      <Display
        season="🍂 Fall Quarter 🍂"
        schedule={getScheduleForSeason("🍂 Fall Quarter 🍂")}
      />
      <Display
        season="❄️ Winter  Quarter ❄️"
        schedule={getScheduleForSeason("❄️ Winter  Quarter ❄️")}
      />
      <Display
        season="🌸 Spring  Quarter 🌸"
        schedule={getScheduleForSeason("🌸 Spring  Quarter 🌸")}
      />
      <Display
        season="☀️ Summer  Quarter ☀️"
        schedule={getScheduleForSeason("☀️ Summer  Quarter ☀️")}
      />
    </div>
  );
}

function Display({ season, schedule }) {
  return (
    <div className="content-box quarter-content ">
      <h5 className="centered">{season}</h5>
      <hr></hr>
      <ul>
        {schedule.map((classItem, index) => (
          <li key={index}>{classItem.class_name}</li>
        ))}
      </ul>
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

function AccordionItem({ formData, handleFormInput, onScheduleGenerate }) {
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
            onScheduleGenerate={onScheduleGenerate}
          />
        </div>
      )}
    </div>
  );
}

function Prefrences({ formData, handleFormInput, onScheduleGenerate }) {
  //
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  //stops the accordian from closing when clicking on form elements
  const stopProp = (event) => {
    event.stopPropagation();
  };

  const handleButtonClick = () => {
    const newSchedule = generateSchedule(classes, formData);

    onScheduleGenerate(newSchedule);
  };

  function generateSchedule(classes, formData) {
    const schedule = [
      {
        season: "🍂 Fall Quarter 🍂",
        schedule: [classes[0], classes[1], classes[15]],
      },
      {
        season: "❄️ Winter  Quarter ❄️",
        schedule: [classes[6], classes[3], classes[16]],
      },
      {
        season: "🌸 Spring  Quarter 🌸",
        schedule: [classes[2], classes[14], classes[10]],
      },
      { season: "☀️ Summer  Quarter ☀️", schedule: [classes[4], classes[5]] },
    ];

    if (formData.summerClasses === "0") {
      schedule[3].schedule = [];
    } else if (formData.summerClasses === "1") {
      schedule[3].schedule.pop(1);
    }

    if (formData.classesPerQuarter === "1") {
      schedule[0].schedule.pop(1) && schedule[0].schedule.pop(2);
      schedule[1].schedule.pop(1) && schedule[1].schedule.pop(2);
      schedule[2].schedule.pop(1) && schedule[2].schedule.pop(2);
    } else if (formData.classesPerQuarter === "2") {
      schedule[0].schedule.pop(2);
      schedule[1].schedule.pop(2);
      schedule[2].schedule.pop(2);
    }

    return schedule;
  }

  //form data
  return (
    <div className="content-box" onClick={stopProp}>
      <form onSubmit={handleFormSubmit}>
        <label className="number form-set">
          How many summer classes would you like to take?
        </label>
        <input
          className="text-set"
          type="radio"
          id="zero"
          name="summerClasses"
          value="0"
          checked={formData.summerClasses === "0"}
          onChange={handleFormInput}
        />
        <label className="text-set" htmlFor="zero">
          0
        </label>
        <input
          className="text-set"
          type="radio"
          id="one"
          name="summerClasses"
          value="1"
          checked={formData.summerClasses === "1"}
          onChange={handleFormInput}
        />
        <label className="text-set" htmlFor="one">
          1
        </label>
        <input
          className="text-set"
          type="radio"
          id="two"
          name="summerClasses"
          value="2"
          checked={formData.summerClasses === "2"}
          onChange={handleFormInput}
        />
        <label className="text-set" htmlFor="two">
          2
        </label>
        <br />
        <br />
        <label className="number" htmlFor="classesPerQuarter">
          How many clases per quarter would you like to take?
        </label>
        <select
          className=" text-set"
          id="classesPerQuarter"
          name="classesPerQuarter"
          onChange={handleFormInput}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3} selected>
            3
          </option>
        </select>
        <br />
        <br />
        <label className="number">
          Which classes have you taken so far? (check all that apply):
        </label>
        <br />
        <hr></hr>

        <label className="number form-set">Math:</label>
        <input
          type="checkbox"
          id="math97"
          name="previousClasses"
          onChange={handleFormInput}
          defaultValue="math97"
        />
        <label className="text-set" htmlFor="math97">
          Math 97
        </label>
        <input
          type="checkbox"
          id="math141"
          name="previousClasses"
          onChange={handleFormInput}
          defaultValue="math141"
        />
        <label className="text-set" htmlFor="math141">
          Math 141
        </label>
        <input
          type="checkbox"
          id="math146"
          name="previousClasses"
          onChange={handleFormInput}
          defaultValue="math146"
        />
        <label className="text-set" htmlFor="math146">
          Math 146
        </label>
        <input
          type="checkbox"
          id="math147"
          name="previousClasses"
          onChange={handleFormInput}
          defaultValue="math147"
        />
        <label className="text-set" htmlFor="math147">
          Math 147
        </label>
        <input
          type="checkbox"
          id="math256"
          name="previousClasses"
          onChange={handleFormInput}
          defaultValue="math256"
        />
        <label className="text-set" htmlFor="math256">
          Math 256
        </label>
        <br />
        <hr></hr>

        <label className="number form-set">Communications: </label>
        <input
          type="checkbox"
          id="cmst210"
          name="previousClasses"
          onChange={handleFormInput}
          defaultValue="cmst210"
        />
        <label className="text-set" htmlFor="cmst210">
          CMST 210
        </label>
        <input
          type="checkbox"
          id="cmst220"
          name="previousClasses"
          onChange={handleFormInput}
          defaultValue="cmst220"
        />
        <label className="text-set" htmlFor="cmst220">
          CMST 220
        </label>
        <input
          type="checkbox"
          id="cmst230"
          name="previousClasses"
          onChange={handleFormInput}
          defaultValue="cmst230"
        />
        <label className="text-set" htmlFor="cmst230">
          CMST 230
        </label>
        <input
          type="checkbox"
          id="cmst238"
          name="previousClasses"
          onChange={handleFormInput}
          defaultValue="cmst238"
        />
        <label className="text-set" htmlFor="cmst238">
          CMST 238
        </label>
        <br />
        <hr></hr>

        <label className="number form-set">English: </label>
        <input
          type="checkbox"
          id="eng101"
          name="previousClasses"
          onChange={handleFormInput}
          defaultValue="eng101"
        />
        <label className="text-set" htmlFor="eng101">
          ENG 101
        </label>
        <input
          type="checkbox"
          id="eng126"
          name="previousClasses"
          onChange={handleFormInput}
          defaultValue="eng126"
        />
        <label className="text-set" htmlFor="eng126">
          ENG 126
        </label>
        <input
          type="checkbox"
          id="eng127"
          name="previousClasses"
          onChange={handleFormInput}
          defaultValue="eng127"
        />
        <label className="text-set" htmlFor="eng127">
          ENG 127
        </label>
        <input
          type="checkbox"
          id="eng128"
          name="previousClasses"
          onChange={handleFormInput}
          defaultValue="eng128"
        />
        <label className="text-set" htmlFor="eng128">
          ENG 128
        </label>
        <input
          type="checkbox"
          id="eng235"
          name="previousClasses"
          onChange={handleFormInput}
          defaultValue="eng235"
        />
        <label className="text-set" htmlFor="eng235">
          ENG 235
        </label>
        <br />
        <hr></hr>

        <label className="number form-set">Science: </label>

        <input
          type="checkbox"
          id="science"
          name="previousClasses"
          onChange={handleFormInput}
          defaultValue="labScience"
        />
        <label className="text-set" htmlFor="science">
          Lab Science
        </label>
        <br />
        <hr></hr>
        <label className="number form-set">Software Development: </label>

        <input
          type="checkbox"
          id="sdev101"
          name="previousClasses"
          onChange={handleFormInput}
          defaultValue="sdev101"
        />
        <label className="text-set" htmlFor="sdev101">
          SDEV 101
        </label>
        <input
          type="checkbox"
          id="sdev201"
          name="previousClasses"
          onChange={handleFormInput}
          defaultValue="sdev201"
        />
        <label className="text-set" htmlFor="sdev201">
          SDEV 201
        </label>
        <input
          type="checkbox"
          id="sdev106"
          name="previousClasses"
          onChange={handleFormInput}
          defaultValue="sdev106"
        />
        <label className="text-set" htmlFor="sdev106">
          SDEV 106
        </label>
        <input
          type="checkbox"
          id="sdev117"
          name="previousClasses"
          onChange={handleFormInput}
          defaultValue="sdev117"
        />
        <label className="text-set" htmlFor="sdev117">
          SDEV 117
        </label>
        <br></br>
        <input
          type="checkbox"
          id="sdev108"
          name="previousClasses"
          onChange={handleFormInput}
          defaultValue="sdev108"
        />

        <label className="text-set" htmlFor="sdev108">
          SDEV 108
        </label>
        <input
          type="checkbox"
          id="cs108"
          name="previousClasses"
          onChange={handleFormInput}
          defaultValue="cs108"
        />
        <label className="text-set" htmlFor="cs108">
          CS &nbsp; &nbsp; 108 &nbsp;
        </label>
        <input
          type="checkbox"
          id="cs109"
          name="previousClasses"
          onChange={handleFormInput}
          defaultValue="cs109"
        />
        <label className="text-set" htmlFor="cs109">
          CS &nbsp; &nbsp; 109 &nbsp;
        </label>
        <input
          type="checkbox"
          id="sdev121"
          name="previousClasses"
          onChange={handleFormInput}
          defaultValue="sdev121"
        />
        <label className="text-set" htmlFor="sdev121">
          SDEV 121
        </label>
        <br></br>
        <input
          type="checkbox"
          id="sdev218"
          name="previousClasses"
          onChange={handleFormInput}
          defaultValue="sdev218"
        />
        <label className="text-set" htmlFor="sdev218">
          SDEV 218
        </label>
        <input
          type="checkbox"
          id="sdev219"
          name="previousClasses"
          onChange={handleFormInput}
          defaultValue="sdev219"
        />
        <label className="text-set" htmlFor="sdev219">
          SDEV 219
        </label>
        <input
          type="checkbox"
          id="sdev220"
          name="previousClasses"
          onChange={handleFormInput}
          defaultValue="sdev220"
        />
        <label className="text-set" htmlFor="sdev220">
          SDEV 220
        </label>
        <input
          type="checkbox"
          id="sdev280"
          name="previousClasses"
          onChange={handleFormInput}
          defaultValue="sdev280"
        />
        <label className="text-set" htmlFor="sdev280">
          SDEV 280
        </label>
        <br />
        <hr></hr>

        <br></br>
        <div className="generate">
          <button onClick={handleButtonClick}>Generate Schedule</button>
        </div>
      </form>
    </div>
  );
}

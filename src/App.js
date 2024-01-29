import { useEffect, useState } from "react";
import "./styles.css";
import Header from "./Header";
import Form from "./Form";

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
  const [isLoading, setIsLoading] = useState(false);
  const [schedule, setSchedule] = useState({});
  const [formData, setFormData] = useState({
    summerClasses: 0,
    classesPerQuarter: 4,
    previousClasses: [],
  });

  const handleButtonClick = async () => {
    //start the progress bar
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3001/generate-schedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      //catching the response from OpenAI
      const data = await response.json();
      //logging the data
      console.log("received data: " + data);

      setSchedule(data);
      setIsLoading(false);
    } catch (error) {
      console.log("Error generating schedule:", error);
    }
  };

  useEffect(() => {
    console.log("checking schedule every time its updated =>" + schedule);
  }, [schedule]);

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
      <Form
        formData={formData}
        handleFormInput={handleFormInput}
        onButtonClick={handleButtonClick}
      />
      {isLoading && <ProgressBar />}
      {schedule && <ScheduleTable schedule={schedule} />}
      <Footer />
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

// progress bar component showing users that something is happening when the schedule is generated
function ProgressBar() {
  const text =
    ".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..";
  const letters = text.split("");

  return (
    <div className="progress-bar-center">
      <p className="progress-bar-center">
        Please wait while your schedule is generated
      </p>
      {letters.map((letter, index) => (
        <span
          key={index}
          className="letter"
          style={{ animationDelay: `${index * 0.15}s` }}
        >
          {letter === " " ? " " : letter}
          {""}
          {/* Replace space with Unicode non-breaking space */}
        </span>
      ))}
    </div>
  );
}

function ScheduleTable({ schedule }) {
  const scheduleData =
    typeof schedule === "string" ? JSON.parse(schedule) : schedule;
  const scheduleArray = scheduleData.schedule || [];

  if (scheduleArray.length === 0) {
    return null;
  }

  return (
    <div className="generate">
      <table className="table-draw">
        <thead className="centered">
          <tr className="">
            <th>Quarter</th>
            <th>Classes</th>
            <hr></hr>
          </tr>
        </thead>

        <tbody className="centered">
          {scheduleArray.map((quarter, index) => (
            <tr key={index}>
              <td>{quarter.quarter}</td>
              <td>{quarter.classes.map((c) => c.class_name).join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br></br>
    </div>
  );
}

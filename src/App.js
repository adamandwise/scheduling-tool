/**
 * Author: Adam Wise
 * Date: 1/30/2024
 *
 * This is the main App component of my GRC SDEV Schedule Tool Web Application.
 * The purpose of our application is to allow students and advisors to enter a few preferences and have a tailored school schedule designed around
 * what the student is looking for. We use a simple intake form to submit these preferences, and then we send it over as a prompt to OpenAI's chatGPT API to
 * workout a schedule.
 * From here we import useEffect and useState from react as we use these techniques to track state and pass props,
 * as well as do a little debugging.
 * We import all of the components we will be using, which includes Header, Form, Footer  ProgressBar amd ScheduleTable, as well as our style sheet.
 * The main App component handles a request to and a response from OpenAI, as we call thier API to send over student class preferences.
 */

import { useEffect, useState } from "react";
import "./styles.css";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";
import ProgressBar from "./ProgressBar";
import ScheduleTable from "./SceduleTable";
import ModeToggle from "./ModeToggle";
import Login from "./Login";
import ScheduleDisplay from "./ScheduleDisplay/ScheduleDisplay";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [schedule, setSchedule] = useState({});
  const [formData, setFormData] = useState({
    summerClasses: 0,
    classesPerQuarter: 1,
    previousClasses: [],
  });
  const [isAdvisor, setIsAdvisor] = useState(false);

  const handleAdvisorToggle = (val) => {
    setIsAdvisor((prevIsAdvisor) => !prevIsAdvisor);
  };

  // this function dictates what happens when the user submits the generate schedule button.
  // we call an endpoint on our own server that makes a Request to openAI's API. We then take this response and pass it into the schedule state for later use. We also
  //set the state for isLoading, which will call our progressbar component to signify to our users that the api is being called and ChatGpt is receiving our prompt.
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

  // This bit of code was used when debugging issues related to the data types being passed around - its no longer needed as that issue has been resolved, im keeping it for reference
  // useEffect(() => {
  //   console.log("checking schedule every time its updated =>" + schedule);
  // }, [schedule]);

  /**
   * This function is passed around as a prop to my form component, as it is used to set the formData which we use to pass to chatGPT in our prompt.
   * Each time the user makes an edit in the form, this piece of state is updated in real time. The tricky part here is updating the array of checkboxes, which
   * makes up the bulk of the function. We check for the type to make sure its either a checkbox or anything else really.
   * in both cases we update the state of form data to include all previously updated input values.
   * If we are dealing with check boxes, we instantiate a new array and  push the value checked onto it, which would be a string with a class name. we also remove the value from the
   * array if the user unchecks the box. we then return prevFromData with the updatedArray value. The other input types are more straight forward, and we just asign the value assocaited with the name to the
   * prevForData array. When the user createsa new schedule, the old value is simple replaced with the new one, so we dont need to account for any other activity.
   * @param {*} event
   */
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
    //handles all other form inputs, like radio, and number types
    else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  }

  return (
    <div className="app">
      <Header />
      <ModeToggle handleAdvisorToggle={handleAdvisorToggle} />
      {isAdvisor ? (
        <Login />
      ) : (
        <Form
          formData={formData}
          handleFormInput={handleFormInput}
          onButtonClick={handleButtonClick}
        />
      )}
      {isLoading && <ProgressBar />}
      {schedule && <ScheduleDisplay schedule={schedule} />}
      <Footer />
    </div>
  );
}

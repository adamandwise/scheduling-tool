import React, { useState } from "react";
import ReactSwitch from "react-switch";

function ModeToggle({ handleAdvisorToggle }) {
  const [checked, setChecked] = useState(true);

  const handleChange = (val) => {
    setChecked(val);

    handleAdvisorToggle(val);
  };

  return (
    <div className="toggle-switch ">
      <ReactSwitch
        checked={checked}
        onChange={handleChange}
        height={50}
        width={150}
        borderRadius={5}
        uncheckedIcon={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 20,
              color: "white",
              paddingRight: 25,
            }}
          >
            ADVISOR
          </div>
        }
        checkedIcon={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 20,
              color: "white",
              paddingLeft: 25,
            }}
          >
            STUDENT
          </div>
        }
      />
    </div>
  );
}

export default ModeToggle;

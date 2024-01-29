function Prefrences({
  formData,
  handleFormInput,
  onButtonClick,
  handleToggle,
}) {
  //
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  //stops the accordian from closing when clicking on form elements
  const stopProp = (event) => {
    event.stopPropagation();
  };

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
          <option value={3}>3</option>
          <option value={4}>4</option>
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
        <br />
        <hr></hr>

        <br></br>
        <div className="generate">
          <button
            onClick={() => {
              onButtonClick();
              handleToggle();
            }}
          >
            Generate Schedule
          </button>
        </div>
      </form>
    </div>
  );
}

export default Prefrences;

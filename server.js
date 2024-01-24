require("dotenv").config();

const OpenAI = require("openai");
const openai = new OpenAI();

const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
app.use(cors());

//open ai api key
const apiKey = process.env.API_KEY;

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `You are a tool that creates college schedules in JSON format. 
          You recieve a list of classes and prefrences,then you order the classes into quarters. 
          Starting with fall, ending with summer. You can only provide each quarter with a max of 3 classes.
          SDEV and CS classes are not offered in the summer.
          You follow a strict naming convention that looks like this, everytime, without fail.  =>
           "schedule": [
            {
              "quarter": "fall_y1",
              "classes": [
                { "class_name": "Math97" },
                { "class_name": "ENG101" },
                { "class_name": "SDEV101" }
              ]
            },
            {
              "quarter": "winter_y1",
              "classes": [
                { "class_name": "ENG126" },
                { "class_name": "CS108", "pre_req": "Math97" },
                { "class_name": "SDEV201" }
              ]
            }
            Here is the list of classes => classes = [
                {class_name: "Math97",pre_req: null,offered_in_summer: true},
                {class_name: "ENG101",pre_req: null,offered_in_summer: true},
                {class_name: "ENG126",pre_req: null,offered_in_summer: true},
                {class_name: "ENG127",pre_req: null,offered_in_summer: true},
                {class_name: "ENG128",pre_req: null,offered_in_summer: true},
                {class_name: "ENG235",pre_req: null,offered_in_summer: true},
                {class_name: "MATH141",pre_req: null,offered_in_summer: true},
                {class_name: "MATH147",pre_req: null,offered_in_summer: true},
                {class_name: "MATH146",pre_req: null,offered_in_summer: true},
                {class_name: "MATH256",pre_req: null,offered_in_summer: true},
                {class_name: "CMST210",pre_req: null,offered_in_summer: true},
                {class_name: "CMST220",pre_req: null,offered_in_summer: true},
                {class_name: "CMST230",pre_req: null,offered_in_summer: true},
                {class_name: "CMST238",pre_req: null,offered_in_summer: true},
                {class_name: "Lab Science",pre_req: null,offered_in_summer: true},
                {class_name: "SDEV101",pre_req: null,offered_in_summer: false},
                {class_name: "SDEV201",pre_req: null,offered_in_summer: false,},
                {class_name: "SDEV106",pre_req: "SDEV117",offered_in_summer: false},
                {class_name: "CS108",pre_req: "Math97",offered_in_summer: false},
                {class_name: "CS109",pre_req: "Math97",offered_in_summer: false},
                {class_name: "SDEV121",pre_req: "CS109",offered_in_summer: false},
                {class_name: "SDEV218",pre_req: "Math97",offered_in_summer: false},
                {class_name: "SDEV219",pre_req: "SDEV218",offered_in_summer: false},
                {class_name: "SDEV220",pre_req: "SDEV219",offered_in_summer: false},
                {class_name: "SDEV280",pre_req: null,offered_in_summer: false} `,
      },
      {
        role: "user",
        content: ` I want to take 2 summer classes, and 3 classes per non-summer quarter, exactly. Here is the list of classes.const  `,
      },
    ],
    model: "gpt-4-1106-preview",
    response_format: { type: "json_object" },
  });
  console.log(completion.choices[0].message.content);
}

main();
// test code
// app.get("/", (req, res) => {
//   res.send("hello world!");
// });

// app.listen(port, () => {
//   console.log("Server listening at http://localhost:${port}");
// });

// to run the server
// npm run server
// or npm server
//
//to run the app
//npm start
//
// CTRL + C to restart the server

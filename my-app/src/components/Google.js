import React from "react";
import Calendar from "@ericz1803/react-google-calendar";

const API_KEY = "AIzaSyD2N3E3oToejybBlfNWCGGFNx7eyshfJWE";
let calendars = [
  {calendarId: "catch22seeyoulater@gmail.com"},
  {
    calendarId: "catch22seeyoulater@gmail.com",
    color: "#B241D1" //optional, specify color of calendar 2 events
  }
];

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Calendar apiKey={API_KEY} calendars={calendars} />
      </div>
    )
  }
}
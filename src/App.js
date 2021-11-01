import React, { useState, useEffect } from "react";
import Data from "./Data.json";

var stories = Data.stories;

var monthNames = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function dateFormat(date) {
  var format = new Date(date);
  return (
    monthNames[format.getMonth()] +
    " " +
    format.getDate() +
    ", " +
    format.getFullYear()
  );
}

const App = () => {
  const [visible, setVisible] = useState(5);
  const loadMore = () => {
    setVisible((prevValue) => prevValue + 10);
  };

  useEffect(() => {
    fetch("./Data.json").then((res) => res.json());
  }, []);

  return (
    <div>
      {stories.slice(0, visible).map((story) => {
        return (
          <div className='container' key={story.id}>
            <div className='div1'>
              <a href={story.link}>
                <img id='img' src={story.img} alt='' />
              </a>
            </div>
            <div className='div2'>
              <a href={story.link}>
                <strong id='title'>{story.title}</strong>{" "}
                <strong id='date'>{dateFormat(story.date)}</strong>
              </a>
            </div>
            <div className='div3'>
              <p id='text'>{story.text}</p>
            </div>
          </div>
        );
      })}
      <button onClick={loadMore}>Load 10 more articles.</button>
    </div>
  );
};

export default App;

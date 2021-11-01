import React, { Component } from "react";
import Data from "./Data.json";

var stories = Data.stories;

class Stories extends Component {
  render() {
    return (
      <div>
        {stories.map((story) => {
          return (
            <div className='container' key={story.id}>
              <div className='div1'>
                <a href={story.link}>
                  <img id='img' src={story.img} alt='' />
                </a>
              </div>
              <div className='div2'>
                <a href={story.link}>
                  <strong id='title'>{story.title}</strong> <strong id='date'>{story.date}</strong>
                </a>
              </div>
              <div className='div3'>
                <p id='text'>{story.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Stories;

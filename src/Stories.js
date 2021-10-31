import React, { Component } from "react";
import Data from "./Data.json";

var stories = Data.stories;

class Stories extends Component {
  render() {
    return (
      <div>
        {stories.map((story) => {
          return <div key={story.id}>{story.title}</div>;
        })}
      </div>
    );
  }
}

export default Stories;

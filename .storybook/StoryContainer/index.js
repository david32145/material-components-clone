import React from "react";

const StoryContainer = ({ align, children }) => {
  return <div className="story-container" style={{ alignItems: align }}>{children}</div>;
};

export default StoryContainer;

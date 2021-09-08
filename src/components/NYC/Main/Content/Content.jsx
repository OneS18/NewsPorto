import React from "react";
import Welcome from "../Welcome/welcome";
import "./content.scss";
import News from "./News/News";

const Content = () => {
  return (
    <div>
      <Welcome />
      <News />
    </div>
  );
};

export default Content;

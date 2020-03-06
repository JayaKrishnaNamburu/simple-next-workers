import React from "react";
import { greeting } from "../utils/utils";

const Home = () => {
  return <h1>Hello {greeting()}</h1>;
};

export default Home;

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import SolutionCard from "./SolutionCard";
const Solutions = () => {
  const [allSolutions, setAllSolutions] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/solution/all_solutions").then((res) => {
      console.log("all solutions");
      setAllSolutions(res.data.data);
    });
  }, []);
  return (
    <div>
      {allSolutions.map((solution) => (
        <SolutionCard solution={solution} />
      ))}
    </div>
  );
};

export default Solutions;

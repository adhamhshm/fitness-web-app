import React from "react";
import { useState } from "react";
import { Box } from "@mui/material";

import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {

  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  //this state are here because changes occur across entire application, not juts inside the SearchExercises.js

  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} />
    </Box>
  )
}

export default Home;
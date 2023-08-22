import React, { useEffect, useState} from "react";
import { Pagination } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart}) => {

  console.log(exercises);

  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);


  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth"})
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);
      }
      else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    }

    fetchExercisesData();

  }, [bodyPart]); 
  //call everytime bodyPart changes

  return (
    <Box
      id="exercises"
      sx={{
        mt: {
          lg: "80px"
        }
      }}
      mt="20px"
      p="20px"
    >
      <Typography variant="h3" mb="46px" fontSize="30px" fontWeight="700">
        Choose Exercises
      </Typography>
      <Stack direction="row" sx={{ gap: { lg: "90px", xs: "30px" }}} flexWrap="wrap" justifyContent="center">
        {/*dynamic block of code to map all exercises*/}
        {/*old code => exercises.map*/}
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise}/> //pass things to the ExerciseCard component
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > exercisesPerPage && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            siblingCount={0}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"

          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises;
import React from "react";
import { useState, useEffect } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart}) => {

  const [search, setSearch] = useState("");
  //const [exercises, setExercises] = useState([]); --> move to Home.js
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", exerciseOptions);
      setBodyParts(['all', ...bodyPartsData]);
    }

    fetchExercisesData();

  }, []);

  //this async means this function will take some time
  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);

      console.log(exerciseData);

      const searchedExercises = exerciseData.filter( 
        (exercise) => exercise.name.toLowerCase().includes(search) ||
        exercise.target.toLowerCase().includes(search) ||
        exercise.equipment.toLowerCase().includes(search) ||
        exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="30px" justifyContent="center" p="20px">
      <Typography fontWeight="700" sx={{ fontSize: { lg: "44px", xs: "30px"}}} mb="50px" textAlign="center">
        Search your exercises
      </Typography>
      <Box position="relative" mb="72px">
        <TextField 
          sx={{
            input: {  
              border: "none", 
              borderRadius: "4px" 
            },
            width: {
              lg: "1200px",
              xs: "350px"
            },
            backgroundColor: "#FFFFFF",
            borderRadius: "40px",
          }}
          height="75px" 
          size="small"
          value={search} 
          placeholder="Search here..." 
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          type="text" 
        />
        <Button 
          className="search-btn"
          sx={{ 
            backgroundColor: "#FF2625",
            color: "#FFFFFF",
            textTransfrom: "none",
            width: {
              lg: "100px",
              xs: "80px"
            },
            fontSize: {
              lg: "14px",
              xs: "14px"
            },
            height: "40px",
            position: "absolute",
            right: 0,
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box sx={{ position: "relative", width: "100%", p: "20px"}}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
        {/*isBodyParts is used to check if we are render body parts or not */}
      </Box>
    </Stack>
  )
}

export default SearchExercises;
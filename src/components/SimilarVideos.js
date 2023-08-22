import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarVideos = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0"}}}>
      <Typography variant="h3" mb={5} fontSize="30px" fontWeight="700">
        Exercises target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative"}}>
        {targetMuscleExercises.length ? 
          <HorizontalScrollbar data={targetMuscleExercises} />
          : <Loader />
        }
      </Stack>
      <Typography variant="h3" mb={5} mt={20} fontSize="30px" fontWeight="700">
        Exercises that use the same equipment
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative"}}>
        {equipmentExercises.length ? 
          <HorizontalScrollbar data={equipmentExercises} />
          : <Loader />
        }
      </Stack>
    </Box>
  )
}

export default SimilarVideos;
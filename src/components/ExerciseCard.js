import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography, capitalize } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"/>
        <Stack direction="row">
            <Button 
                sx={{
                    ml: "21px",
                    color: "#FFFFFF",
                    background: "#FFA9A9",
                    fontSize: "14px",
                    borderRadius: "20px",
                    textTransfrom: "capitalize",
                }}
            >
                {exercise.bodyPart}
            </Button>
            <Button 
                sx={{
                    ml: "21px",
                    color: "#FFFFFF",
                    background: "#FCC757",
                    fontSize: "14px",
                    borderRadius: "20px",
                    textTransfrom: "capitalize",
                }}
            >
                {exercise.target}
            </Button>
        </Stack>
        <Typography
            ml="21px"
            color="#000000"
            fontWeight="bold"
            mt="11px"
            pb="10px"
            textTransform="capitalize"
            fontSize="20px"
        >
            {exercise.name}
        </Typography>
    </Link>
  )
}

export default ExerciseCard;
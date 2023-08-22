import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

const BodyCategory = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack 
        type="button" 
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={{
            borderTop: bodyPart === item ? "4px solid #FF2625" : "", //if the bodyPart same as item, to show which one is clicked, effect can be seen when click the icon
            backgroundColor: "#FFFFFF",
            borderBottomLeftRadius: "20px",
            width: "120px",
            height: "120px",
            cursor: "pointer", 
            gap: "40px"
        }}
        onClick={() => {
            setBodyPart(item);
            //window.scrollTo({top: 1700, left: 100, behaviour: "smooth"});
        }}
    >
        <img src={Icon} alt="icon" style={{ width: "30px", height: "30px"}}/>
        <Typography fontSize="20px" fontWeight="bold" color="#3A1212" textTransform="capitalize">{item}</Typography>
    </Stack>
  )
}

export default BodyCategory;
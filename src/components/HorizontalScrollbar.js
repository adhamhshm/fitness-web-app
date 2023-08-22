import React, { useContext } from "react";
import { Box, Hidden, Typography } from "@mui/material";
import BodyCategory from "./BodyCategory";
import ExerciseCard from "./ExerciseCard";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow" >
        <img src={LeftArrowIcon} alt="right-arrow" />
      </Typography>
    );
};

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollNext()} className="left-arrow" >
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };


//before
/* const CategoriesBar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <div>
        {data.map((item) => (
            <Box key={item.id || item} itemId={item.id || item} title={item.id || item} m="0 40px">
                <BodyCategory item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
            </Box>
        ))}
    </div>
  )
} */

//the data is from the bodyParts inside SearchExercises.js, using pass by props
//after
const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
    return (
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {data.map((item) => (
              <Box key={item.id || item} itemId={item.id || item} title={item.id || item} m="0 40px">
                  {isBodyParts ? <BodyCategory item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
                    : <ExerciseCard exercise={item} />      
                  }
              </Box>
          ))}
      </ScrollMenu>
    )
  }

export default HorizontalScrollbar;
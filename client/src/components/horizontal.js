import React, { useContext } from 'react'
import { bodyPartsContext } from '../context'
import { Box ,Stack, Typography} from "@mui/material"
import BodyPart from "./BodyPart";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu"
import ExerciseCard from "./ExercisesCard"
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Typography sx={{
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      bottom: "-25px",
      right: "100px",
      cursor:"pointer"
     
    }} onClick= {()=>scrollPrev()} >
      <img src={LeftArrowIcon}  />
    </Typography>
  )
}
const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Typography sx={{
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      bottom: "-20px",
      right: "10px",
      cursor: "pointer"
    }} onClick ={()=>scrollNext()}>
      <img src={RightArrowIcon} />
    </Typography>
  )
}
function Horizonatal({ isbodyPart, exercises }) {
  const { bodyParts } = useContext(bodyPartsContext);

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>

      {
        isbodyPart ? (bodyParts.map((item) => (
          <Box mt="130px" height= "300px" >

            <BodyPart item={item} />

          </Box>
        ))
        ) : (
            
            exercises.map((exercise) => (
              <Box sx={{
                m: "30px",
                mt:"100px",
                height: {lg:"440px"},
                backgroundColor:"#fff"
                }}>
                <ExerciseCard exercise={exercise} />
                </Box>

            ))
         
        )
      }

    </ScrollMenu>
  )
}

export default Horizonatal
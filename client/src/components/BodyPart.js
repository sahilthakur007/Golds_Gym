import React, { useContext } from 'react'
import { Typography,Stack } from '@mui/material'
import Gym from "../assets/icons/gym.png"
import { selectedBodyPartContext } from "../context";
const BodyPart = ({ item }) => {
const { bodyPart, setbodypart } = useContext(selectedBodyPartContext);

    const handleClick = () => {
        setbodypart(item);
     }
  return (
      <>
          
          <Stack
              type="button" spacing={5} className="bodyPart-card"
              sx={{
                  borderTop :item == bodyPart ? '4px solid #FF2625':'',
                  textAlign: "center",
                  alignItems:"center",
                  width: "272px",
                  height: "282px",
                  background: "#fff",
                  paddingTop: "12vh",
                  cursor:"pointer",

              }}

              onClick = {handleClick}
          >
              <img src={Gym} alt="Gym " style={{
                  height: "40px",
                  width: "40px",
              }}/>
              <Typography variant="h6" textTransform="capitalize">{item}</Typography>  
          </Stack>
    </>
  )
}

export default BodyPart
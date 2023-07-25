import React from 'react'
import { Stack, Typography ,Box} from "@mui/material"
import Logo from "../assets/images/Logo-1.png"
const footer = () => {
  return (
   
    <Stack sx={{
      alignItems: "center",
        mt: "120px",
      backgroundColor :"#fff"
     
    }}>
      <img src={Logo} style={{
        height: "40px",
        width:"180px"
      }} />
      <Typography  sx={{
        textAlign: "center",
        fontSize: { lg: "30px" ,xs:"25px"},
        mt: "30px",
        color:"#000"
      }}>
        Made With ❤️ By Devloper  Studio 
      </Typography>
      </Stack>
   
  )
}

export default footer
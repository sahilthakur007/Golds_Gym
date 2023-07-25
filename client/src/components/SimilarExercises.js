import { Box, Typography ,Stack} from '@mui/material'
import React, { useContext } from 'react'
import { similarEquipmentExercisesContext, similarTagetMusselExercisesContext } from '../context'
import Loader from "./loader"
import HorizonatalBar from './horizontal'
const SimilarExercises = () => {
  const { similarTargetMusselExercises } = useContext(similarTagetMusselExercisesContext)
  const { similarEquipmentExercises } = useContext(similarEquipmentExercisesContext)
  console.log("hey "+similarEquipmentExercises)
  return (
    <Box mt ="100px">
      <Typography sx={{
        fontSize: { lg: "40px",xs:"25px" },
        fontWeight: 600,
        ml: "20px",
        mt: "80px",
       
      }}>
        Similar <span style={{
          color: "#FF2625",
          textTransform: "capitalize"
        }}>Target Muscle</span> exercises
      </Typography>
     
      {similarTargetMusselExercises.length == 0 ? <Loader /> :
        <Box sx={{
          position: "relative",
          width: "100%"
        }}>  <HorizonatalBar exercises={similarTargetMusselExercises} />
        </Box>
        }
    
      <Typography direction="row" sx={{
        fontSize: { lg: "40px", xs: "25px" },
        fontWeight: 600,
        ml: { lg: "20px" ,xs:"15px"},
        mb: "-10px",
        mt: "120px"
      }}>
        Similar <span style={{
          color: "#FF2625",
          textTransform: "capitalize",
          

        }}>Equipment</span> exercises
      </Typography>
    
      {
        similarEquipmentExercises.length === 0 ? <Loader /> :
          <Box sx={{
            position: "relative",
            width: "100%",
            
          }}>
            <HorizonatalBar exercises={similarEquipmentExercises} />
            </Box>
      }
      
  </Box>
  )
}

export default SimilarExercises
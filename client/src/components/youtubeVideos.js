import React, { useContext } from 'react'
import { Box, Typography,Stack, sliderClasses } from "@mui/material";
import { detailsContext, youtubeVideoscontext } from '../context';
import Loader from "./loader"
const YoutubeVideos = () => {
  const { exercisesDetails } = useContext(detailsContext);
  const { youtubeVideos } = useContext(youtubeVideoscontext);


  return (
    <Box mt ="100px">
      <Typography sx={{
        fontSize: { lg: "45px", xs: "25px" },
        fontWeight: 600,
        ml:{lg:"64px",xs:"18px"}
      }}>
        Watch <span style={{
          color: "#FF2625",
          textTransform:"capitalize"
        }}>{exercisesDetails.name}</span> exercise videos
      </Typography>
      {    youtubeVideos.length===0?<Loader/>:
        (<Stack direction="row" sx={{
          flexWrap: "wrap",
          gap: "60px",
          alignItems: "center",
          justifyContent: "center",
          mt: "40px"

        }}>
          {
            youtubeVideos?.slice(0,3)?.map((item) => (
              <a
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target="_blank"
                rel="noreferrer"
                className="exercise-video"
              >
                <img src={item.video.thumbnails[0].url} className="youtube-image" />
                <Typography sx={{
                  color: "#000",
                  fontSize: "27px",
                  fontWeight: 500,
                  mt: "15px",
                  
                 
                }}>{item.video.title}</Typography>
                <Typography sx={{
                  color: "#000",
                  fontSize: "18px",
                  
                }} >
                  {item.video.channelName}
                </Typography>
              </a>
            ))
            
          }
        </Stack> )
       }
      
      
      
   </Box>
  )
}

export default YoutubeVideos
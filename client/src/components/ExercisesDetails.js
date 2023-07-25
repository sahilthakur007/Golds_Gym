import React, { useContext, useEffect } from "react";
import { detailsContext } from "../context";
import { useParams } from "react-router-dom";
import { fetchYoutubeData } from "../utils/fetchApi";
import { Stack, Box, Typography, Button } from "@mui/material";
import BodypartImage from "../assets/icons/body-part.png"
import equipmentImage from "../assets/icons/equipment.png"
import targetImage from "../assets/icons/target.png"

const imageList = [
    {
        name: "Cardio",
        image :BodypartImage
    },
    {
        name: "CardioCardiovascular System",
        image :equipmentImage
    },
    {
        name: "Body Weight",
        image :targetImage
    }
]
export default () => {
    const { exercisesDetails } = useContext(detailsContext);
    console.log(exercisesDetails);
    return (
        <>
            <Box id = "exercises">
                <Stack direction={{ lg: "row", xs: "column" }} sx={{
                    gap: "40px",
                    mt: "80px",
                    alignItems: "center"
                }}>
                    <img src={exercisesDetails.gifUrl} className="detail-image" />
                    <Stack sx={{
                        gap: { lg: "70px", xs: "40px" }

                    }}>
                        <Typography sx={{
                            textTransform: "capitalize",
                            fontWeight: 600,
                            fontSize: { lg: "64px", xs: "30px" },
                            mt: "40px"
                        }}>
                            {exercisesDetails.name}
                        </Typography>
                        <Typography sx={{
                            fontSize: { lg: "25px", xs: "19px" },
                        }}>
                            Exercises keep you strong.{exercisesDetails.name}  bup is one of the best
                            exercises to target your cardiovascular system. It will help you improve your
                            mood and gain energy.
                        </Typography>
                        {
                            imageList.map((item) => (
                                <Stack direction="row" spacing={5}>
                                    <Button sx={{
                                        borderRadius: "50%",
                                        backgroundColor:"#fff"
                                    }}>
                                        <img src={item.image} />
                                    </Button>
                                    <Typography sx={{
                                        fontSize: { lg: "30px", xs: "20px" }
                                    }}>{item.name}</Typography>
                                </Stack>

                            ))
                        }
                    </Stack>
                </Stack>
            </Box>
            
        </>
    )
}
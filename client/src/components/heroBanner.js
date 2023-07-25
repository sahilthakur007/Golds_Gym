import React from "react";
import { Box, Button, Typography,Stack } from "@mui/material"
import Banner from "../assets/images/banner.png"
import { useNavigate } from "react-router-dom";
import { flexbox } from "@mui/system";
// import "../App.css"
export default () => {
    const navigate = useNavigate();
    return (
        <>
            <Box  sx={{
                margin: "40px"
            }}>
               
                <Typography sx={{
                    color: "#FF2625",
                    fontWeight: 600,
                    fontSize: "25px",
                    mt: "13rem"
                }}>
                    Fitness Club
                </Typography>
                <Typography sx={{
                    fontSize: "40px",
                    fontWeight: 700,
                    mt: "2rem"
                }}>
                    Sweat, Smile <br />
                    And Repeat
                </Typography>
                
                <Typography sx={{
                    fontSize: "1.3rem",
                    mt: "1.6rem",
                    flex :"flexbox"
                }}>
                    Check out the most effective exercises personalized to you
                </Typography>
               
                    <Button variant="contained" sx={{
                        height: "4rem",
                        mt: "2rem",
                        width: { md: "200px", xs: "100px" },
                        fontSize: { md: "20px", xs: "12px" },
                        fontWeight: 400,
                        textTransform: 'none',
                        bgcolor: '#FF2625',
                        color: "white",

                    }}>Explore Exercises</Button>
               
                
                <Typography sx={{
                    fontSize: "13rem",
                    color: "#FF2625",
                    opacity: 0.2,
                    display: { lg: "block", xs: "none" },
                    fontWeight:500

                }}>
                    Exercise
                </Typography>
                <img className="banner" src={Banner} alt="Hero-banner" />
            </Box>
        </>
    )
}
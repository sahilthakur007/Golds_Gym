import { Typography, Stack, Button } from "@mui/material";
import { height } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom"
export default ({ exercise }) => {
    return (
        <>
            <Link to={`/exercises/${exercise.id}`} className="exercise-card">
                <img className= "cardImage" src={exercise.gifUrl} loading="lazy" />
                <Stack direction ="row" spacing = {2}>
                    <Button sx={{
                        color: '#fff',
                        background: '#FFA9A9',
                        borderRadius: "20px",
                        
                        textTransform: "capitalize",
                        // width: "35px",
                        // height:"35px"
                    }}>
                        {exercise.bodyPart}
                    </Button>
                    <Button sx={{
                        color: '#fff',
                        background: '#FCC757',
                        borderRadius: "20px",
                        textTransform: "capitalize",
                        // width: "35px",
                        // height: "35px"

                    }}>
                        {exercise.target}
                    </Button>
                </Stack>
                <Typography sx={{
                    fontSize: "25px",
                    color: "black",
                    textTransform: "capitalize",
                    fontWeight: 600,
                    mt: "30px",
                    mb: "15px",
                    ml:"12px"
                }}>{exercise.name}</Typography>
            </Link>
        </>

    )
}
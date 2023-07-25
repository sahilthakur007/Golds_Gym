import React from "react";
import Logo from "../assets/images/Logo.png"
import {Button, Stack, Toolbar, Typography} from "@mui/material"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
export default () => {
    const navigate = useNavigate();
    return (
        // <Toolbar>
        <Stack direction="row"  sx={{
            gap: 8
        }}>
            <img src={Logo} alt="gym logo" style={{
                width: "60px",
                height:"60px"
            }}></img>

            <Stack direction = "row" spacing ={4}>
                <Button onClick ={()=>navigate("/")} sx={{
                    fontSize: "1.5rem",
                    color: "#3A1212", borderBottom: '3px solid #FF2625'
                }}>Home</Button>
                <Button onClick={() => navigate("/exercises/:id")} sx={{
                    fontSize: "1.5rem",
                    color: "#3A1212"
                }}>Exercises</Button>
           </Stack>
            </Stack>
        
    )
}
import React, { useContext, useEffect, useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material"
import HorizontalScrollBar from "../components/horizontal";
import { exerciseOptions, fetchData } from '../utils/fetchApi';
import { bodyPartsContext } from "../context";
import { serchedExecisesContext } from "../context";
import Loader from "./loader";

export default () => {
    
    const { searchedexercise, setserchedexercise } = useContext(serchedExecisesContext)
    const {bodyParts, setBodyParts} = useContext( bodyPartsContext);
    const [search, setsearch] = useState(""); 
    const handleChange = (event) => {
        setsearch(event.target.value)
    }
    const handleClick = async () => {
   
        if (search)
        {
            const { data } = await fetchData('https://exercisedb.p.rapidapi.com/exercises')
            console.log(data);
            
            const searchedData = data.filter((item) => (item.name.toLowerCase().includes(search) ||
                item.bodyPart.toLowerCase().includes(search) ||
                item.equipment.toLowerCase().includes(search) ||
                item.target.toLowerCase().includes(search)))
            setserchedexercise(searchedData);
        }
        setsearch("")
    }
    useEffect(() => {
        const fetch = async () => {
            const {data} = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList');
            setBodyParts(["All",...data]);
        }
        fetch();
    }, [])
    return (<>
        <Typography sx={{
            fontSize: "3rem",
            fontWeight: 600,
            textAlign: "center",
            mt: "50px"
        }}>
            Awesome Exercises You <br />
            Should Know
            <Box mt="80px" position="relative"  sx={{
                mr:{xs:"80px",lg:"100px"}
            }}>
                <TextField placeholder="Search Exercises" sx={{
                    width: { lg: '1000px', xs: '250px' },


                }} onChange={handleChange} value = {search} />
                <Button   sx={{
                    textTransform: 'none',
                    bgcolor: '#FF2625',
                    color: "#fff",
                    height: "3.5rem",
                    width: { lg: '140px', sm: '140px' },
                    // width:"8rem",
                    position: "absolute",
                    fontSize: { lg: "20px", sm: "10px" },
                    fontWeight: 300,
                    '&:hover': {
                        color: "#FF2625",
                        border: "1px solid #FF2625"
                       }

                }} onClick = {handleClick}>Search</Button>
            </Box>
        </Typography>
        <Box sx={{
            position: "relative",
            width:"100%"
            }}>
            <HorizontalScrollBar isbodyPart={true} />
        </Box>

        
    </>)
}
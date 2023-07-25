import { Typography, Box, Stack } from "@mui/material";
import { exactProp } from "@mui/utils";
import { fetchData } from "../utils/fetchApi"
import React, { useContext, useEffect, useState } from "react";
import { serchedExecisesContext, selectedBodyPartContext } from "../context";
import ExerciseCard from "./ExercisesCard"
import Pagination from "@mui/material/Pagination"
import axios from "axios";
import Loader from "./loader"
export default () => {
    const { searchedexercise, setserchedexercise } = useContext(serchedExecisesContext)
    // console.log(searchedexercise);
    const [currentPage, setcurrentPage] = useState(1);
    const { bodyPart } = useContext(selectedBodyPartContext);
    const end = currentPage * 9;
    const start = end - 9
    const pageexercises = searchedexercise.slice(start, end);
    const paginate = (e, page) => {
        setcurrentPage(page);
        // console.log(page);
        window.scrollTo({ top: 1800, behavior: 'smooth' });

    }
    useEffect(() => {
        const fetchDataRequest = async () => {
            let exercisesData = [];
            if (bodyPart === "All") {
               const  { data } = await fetchData("https://exercisedb.p.rapidapi.com/exercises");
                exercisesData = data;
             }

            else {
                const { data } = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`)
                exercisesData = data;

            }
            console.log(exercisesData);
            setserchedexercise(exercisesData);
        }
        fetchDataRequest();
    }, [bodyPart])

    if (!pageexercises.length) return <Loader />;

    return (

        <Box justifyContent="center">
            <Typography variant="h3" sx={{
                fontWeight: 600,
                mt: "50px",
                ml: { lg: "40px", xs: "35px" }
            }}>Showing Results</Typography>

            <Stack direction="row" flexWrap="wrap" sx={
                {
                    mt: { lg: "100px", xs: "60px" },
                    justifyContent: "center",
                    gap: { lg: '107px', xs: '50px' },
                  
                }
            }
            >
                {
                    pageexercises.map((exercise) => (
                        <ExerciseCard exercise={exercise} />
                    ))
                }
            </Stack>
            <Stack sx={{
                alignItems: "center",
                mt: "120px"
            }}>
                {
                    searchedexercise.length > 9 && (
                        <Pagination
                            color="standard"
                            shape="rounded"
                            defaultPage={1}
                            count={
                                Math.ceil(searchedexercise.length / 9)
                            }
                            page={currentPage}
                            onChange={paginate}
                            size="large"
                        />

                    )
                }
            </Stack>
        </Box>
    )
}
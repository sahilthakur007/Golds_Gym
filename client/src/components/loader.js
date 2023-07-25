import { Box,Stack} from "@mui/material"
import React from "react"
import { InfinitySpin } from "react-loader-spinner"
import { Oval } from 'react-loader-spinner';

export default () => {
    return (
        <>
            <Stack direction= "row"sx={{
                justifyContent: "center",
                alignItems: "center",
                mt:"30px",
                width:"100%"
            }}>
                <Oval color = "gray"/>
        </Stack>
        </>
    )
}
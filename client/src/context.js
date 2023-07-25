import { create } from "@mui/material/styles/createTransitions";
import { createContext, useState } from "react";

export const  bodyPartsContext = createContext();
export const serchedExecisesContext = createContext(); 
export const selectedBodyPartContext = createContext(); 
export const detailsContext = createContext(); 
export const youtubeVideoscontext = createContext(); 
export const similarEquipmentExercisesContext = createContext(); 
export const similarTagetMusselExercisesContext = createContext(); 

const Context = ({children}) => {
    const [bodyParts, setBodyParts] = useState([]);
    const [bodyPart, setbodypart] = useState("All");
    const [searchedexercise, setserchedexercise] = useState([]);
   //->
    const [exercisesDetails, setexercisesDetails] = useState({}); 
    const [similarEquipmentExercises, setsimilarEquipmentExercises] = useState([]); 
    const [similarTargetMusselExercises, setsimilarTagetMusselExercises] = useState([]); 
    
    const [youtubeVideos, setyoutubeVideos] = useState([]); 
    return (<bodyPartsContext.Provider value={{ bodyParts, setBodyParts }}>
        <selectedBodyPartContext.Provider value={{ bodyPart, setbodypart }} >
            <serchedExecisesContext.Provider value={{ searchedexercise, setserchedexercise }}>
                
            <detailsContext.Provider value = {{exercisesDetails,setexercisesDetails}}>
                    <youtubeVideoscontext.Provider value={{ youtubeVideos, setyoutubeVideos }}>
                        <similarTagetMusselExercisesContext.Provider value={{ similarTargetMusselExercises, setsimilarTagetMusselExercises }}>
                            <similarEquipmentExercisesContext.Provider value={{ similarEquipmentExercises, setsimilarEquipmentExercises }}>
                                {children}
                            </similarEquipmentExercisesContext.Provider>
                        </similarTagetMusselExercisesContext.Provider>

                    </youtubeVideoscontext.Provider>
            </detailsContext.Provider>
        </serchedExecisesContext.Provider>
        </selectedBodyPartContext.Provider>
    </bodyPartsContext.Provider>)
}
export default Context; 
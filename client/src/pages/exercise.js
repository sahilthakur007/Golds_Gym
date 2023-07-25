import React from 'react'
import ExercisesDetails from '../components/ExercisesDetails'
import YoutubeSearch from "../components/youtubeVideos"
import SimilarExercises from '../components/SimilarExercises'
import { useParams } from 'react-router-dom'
import { useContext,useEffect } from 'react'
import { fetchYoutubeData,fetchData } from "../utils/fetchApi";
import { detailsContext,similarEquipmentExercisesContext,similarTagetMusselExercisesContext,youtubeVideoscontext } from '../context'
const Exercise = () => {

  const { exercisesDetails, setexercisesDetails } = useContext(detailsContext);
  const { setyoutubeVideos } = useContext(youtubeVideoscontext);
  const { setsimilarTagetMusselExercises } = useContext(similarTagetMusselExercisesContext);
  const { setsimilarEquipmentExercises } = useContext(similarEquipmentExercisesContext)
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const exercisesDbUrl = "https://exercisedb.p.rapidapi.com";
    const youtubeDburl = "https://youtube-search-and-download.p.rapidapi.com"
    const fetchAllDetails = async () => {
      const {data} = await fetchData(`${exercisesDbUrl}/exercises/exercise/${id}`)
      setexercisesDetails(data);
      const youtubeData = await fetchYoutubeData(`${youtubeDburl}/search?query=${data.name}`);
      setyoutubeVideos(youtubeData.data.contents);
      const serchByTarget = await fetchData(`${exercisesDbUrl}/exercises/target/${data.target}`)
      setsimilarTagetMusselExercises(serchByTarget.data)
     
      const searchByEquipment = await fetchData(`${exercisesDbUrl}/exercises/equipment/${data.equipment}`)
      setsimilarEquipmentExercises(searchByEquipment.data)
    }
    fetchAllDetails();
  }, [id])
  return (
    <>
      <ExercisesDetails />
      <YoutubeSearch />
      <SimilarExercises />
  </>
  )
}

export default Exercise
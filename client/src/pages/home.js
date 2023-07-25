import React, { useContext } from 'react'
import HeroBanner from '../components/heroBanner'
import  Search  from "../components/serchExercise"
import Exercises from "../components/Exercises"
import { serchedExecisesContext } from '../context'
import serchExercise from '../components/serchExercise'
import Loader from '../components/loader'
const Home = () => {
  const { searchedexercise} = useContext(serchedExecisesContext)
  return (
    <>
      <HeroBanner />
      <Search />
      
         <Exercises />
      
      
    </>
  )
}

export default Home
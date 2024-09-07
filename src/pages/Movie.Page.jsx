import React, {useContext, useEffect, useState} from 'react'
import MovielayoutHoc from '../layout/Movie.layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { MovieContext } from '../context/Movie.Context'
import Slider from 'react-slick'



const MoviePage = () => {

  const {id} = useParams ();

  const [movie, setMovie] = useContext(MovieContext)

  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    const requestCast = async () => {
      try {
        const getCast = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=0e45c5d5fadbd8e446fc70a77ea1e7af`
        );
        setCast(getCast.data.cast);
      } catch (error) {
        console.error('Error fetching top-rated movies:', error.message);
      }
    };
    requestCast();
  }, [id]);

  useEffect(() => {
    const requestSimilarMovies = async () => {
      try {
        const getSimilarMovies = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/similar?api_key=0e45c5d5fadbd8e446fc70a77ea1e7af`
        );
        setSimilarMovies(getSimilarMovies.data.results);
      } catch (error) {
        console.error('Error fetching similar movies:', error.message);
      }
    };
    requestSimilarMovies();
  }, [id]);

  useEffect(() => {
    const requestRecommendedMovies = async () => {
      try {
        const getRecommendedMovies = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=0e45c5d5fadbd8e446fc70a77ea1e7af`
        );
        setRecommendedMovies(getRecommendedMovies.data.results);
      } catch (error) {
        console.error('Error fetching recommended movies:', error.message);
      }
    };
    requestRecommendedMovies();
  }, []);

  const settingsCast ={}

  const settings = {}

  return (
    <div>
      Movie Page
    </div>
  )
}

export default MovielayoutHoc(MoviePage)

import React, { useEffect, useState } from 'react';
import axios from 'axios';

// HOCs
import DefaultlayoutHoc from '../layout/Default.layout';

// Components
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.Component';
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Component';
import PosterSlider from '../PosterSlider/PosterSlider.Component';

const HomePage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvent] = useState([]);

  useEffect(() => {
    const requestTopRatedMovies = async () => {
      try {
        const getTopRatedMovies = await axios.get(
          'https://api.themoviedb.org/3/movie/top_rated?api_key=0e45c5d5fadbd8e446fc70a77ea1e7af'
        );
        setRecommendedMovies(getTopRatedMovies.data.results);
      } catch (error) {
        console.error('Error fetching top-rated movies:', error.message);
      }
    };
    requestTopRatedMovies();
  }, []);

  useEffect(() => {
    const requestPopularMovies = async () => {
      try {
        const getPopularMovies = await axios.get(
          'https://api.themoviedb.org/3/movie/popular?api_key=0e45c5d5fadbd8e446fc70a77ea1e7af'
        );
        setPremierMovies(getPopularMovies.data.results);
      } catch (error) {
        console.error('Error fetching top-rated movies:', error.message);
      }
    };
    requestPopularMovies();
  }, []);

  useEffect(() => {
    const requestUpcomingMovies = async () => {
      try {
        const getUpcomingMovies = await axios.get(
          'https://api.themoviedb.org/3/movie/upcoming?api_key=0e45c5d5fadbd8e446fc70a77ea1e7af'
        );
        setOnlineStreamEvent(getUpcomingMovies.data.results);
      } catch (error) {
        console.error('Error fetching top-rated movies:', error.message);
      }
    };
    requestUpcomingMovies();
  }, []);
  return (
    <>
      <HeroCarousel />
      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2x1 font-bold text-gray-800 sm:ml-3 my-3">The Best of Entertainment</h1>
        <EntertainmentCardSlider />

        <div className="container mx-auto px-4 md:px-12 my-8">
          <PosterSlider
            title="Recommended Movies"
            subtitle="List of Recommended Movies"
            posters={recommendedMovies}
            isDark={false}
          />
        </div>

        <div className="bg-premier-800 py-12">
  <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
    <div className="hidden md:flex">
      <img
        src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-banner-web-collection-202208191200.png"
        alt=""
        className="w-full h-full"
      />
    </div>
    <div className="container mx-auto px-4 md:px-12 my-8 bg-premier-800 text-white">
      <PosterSlider
        title="Premiers"
        subtitle="Brand New Release Every Friday"
        posters={premierMovies}
        isDark={true} // Ensure this is true for a dark-themed PosterSlider
      />
    </div>
  </div>
</div>


        <div className="container mx-auto px-4 md:px-12 my-8">
          <PosterSlider
            title="Online Streaming Events"
            subtitle="Online Streaming Events"
            posters={onlineStreamEvents}
            isDark={false}
          />
        </div>
      </div>
    </>
  );
};

export default DefaultlayoutHoc(HomePage);

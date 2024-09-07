import React, { useState } from 'react';
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from './Arrows.Component';

const HeroCarousel = () => {
  const [images, setImages] = useState([
    {
      "adult": false,
      "backdrop_path": "/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg",
      "genre_ids": [16, 35, 10751, 14, 10749],
      "id": 976573,
      "original_language": "en",
      "original_title": "Elemental",
      "overview": "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy discover something elemental: how much they actually have in common.",
      "popularity": 2723.167,
      "poster_path": "/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg",
      "release_date": "2023-06-14",
      "title": "Elemental",
      "video": false,
      "vote_average": 7.8,
      "vote_count": 1526
    },
    {
      "adult": false,
      "backdrop_path": "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
      "genre_ids": [28, 12, 878],
      "id": 447365,
      "original_language": "en",
      "original_title": "Guardians of the Galaxy Vol. 3",
      "overview": "Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own - a mission that could mean the end of the Guardians if not successful.",
      "popularity": 1250.912,
      "poster_path": "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
      "release_date": "2023-05-05",
      "title": "Guardians of the Galaxy Vol. 3",
      "video": false,
      "vote_average": 8.0,
      "vote_count": 5400
    },
    {
      "adult": false,
      "backdrop_path": "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
      "genre_ids": [28, 12, 878],
      "id": 634649,
      "original_language": "en",
      "original_title": "Spider-Man: No Way Home",
      "overview": "Peter Parker's life and reputation are turned upside down.",
      "popularity": 4010.748,
      "poster_path": "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
      "release_date": "2021-12-15",
      "title": "Spider-Man: No Way Home",
      "video": false,
      "vote_average": 8.4,
      "vote_count": 14458
    },
  ]);

  const settingsLG = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1500,
    cssEase: "linear",
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1500,
    cssEase: "linear",
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
  };

  return (
    <>
      <div className='lg:hidden'>
        <HeroSlider {...settings}>
          {images.map((image) => (
            <div className='w-full h-56 md:h-80 py-3' key={image.id}>
              <img 
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} 
                alt={image.title} 
                className='w-full h-full rounded-md object-cover' 
              />
            </div>
          ))}
        </HeroSlider>
      </div>
      <div className='hidden lg:block'>
        <HeroSlider {...settingsLG}>
          {images.map((image) => (
            <div className='w-full h-96 px-2 py-3' key={image.id}>
              <img 
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} 
                alt={image.title} 
                className='w-full h-full rounded-md object-cover' 
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;

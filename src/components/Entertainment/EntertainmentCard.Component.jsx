import React from 'react';
import Slider from 'react-slick';

const EntertainmentCard = (props) => {
  return (
    <div className='md:h-80 h-45 px-2'>
      <img src={props.src} alt="Entertainment" className='w-full h-full rounded-lg object-cover'/>
    </div>
  );
};

const EntertainmentCardSlider = () => {

  // Updated image URLs
  const EntertainmentImage = [
    {
      id: 1,
      src: "https://image.tmdb.org/t/p/original/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg" // Elemental
    },
    {
      id: 2,
      src: "https://image.tmdb.org/t/p/original/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg" // Guardians of the Galaxy Vol. 3
    },
    {
      id: 3,
      src: "https://image.tmdb.org/t/p/original/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg" // New URL for The Flash
    },
    {
      id: 4,
      src: "https://image.tmdb.org/t/p/original/zEqyD0SBt6HL7W9JQoWwtd5Do1T.jpg" // New URL for Transformers: Rise of the Beasts
    },
    {
      id: 5,
      src: "https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg" // The Super Mario Bros. Movie
    }
  ];

  const settings = {
    infinite: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0, 
  };

  return (
    <Slider {...settings}>
      {EntertainmentImage.map((image) => (
        <EntertainmentCard key={image.id} src={image.src} />
      ))}
    </Slider>
  );
};

export default EntertainmentCardSlider;

import React from 'react'

// HOC's

import DefaultlayoutHoc from '../layout/Default.layout'

// Componets
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.Component'
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Component'
import PosterSlider from '../PosterSlider/PosterSlider.Component'



const HomePage = () => {
  return (
    <div>
      HomePage
    </div>
  )
}

export default DefaultlayoutHoc(HomePage)

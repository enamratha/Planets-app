import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div data-testid="planets" className="slider-container">
      <h1 className="main-heading">Planets</h1>
      <Slider {...settings}>
        {planetsList.map(planet => (
          <PlanetItem planet={planet} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider

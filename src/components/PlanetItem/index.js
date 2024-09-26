import './index.css'

const PlanetItem = props => {
  const {planet} = props
  const {name, imageUrl, description} = planet
  return (
    <div className="planet-item-container">
      <div>
        <img className="planet-image" src={imageUrl} alt={`planet ${name}`} />
      </div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default PlanetItem

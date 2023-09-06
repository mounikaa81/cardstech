// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={className}>
      <h1 className="card-heading">{title}</h1>
      <p className="card-description">{description}</p>
      <img className="card-img" alt={title} src={imgUrl} />
    </li>
  )
}

export default CardItem

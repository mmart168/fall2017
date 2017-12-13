import React, {Component} from 'react'
import CardHeader from './CardHeader'
import CardFooter from './CardFooter'
import styles from './Card.css'

export default class Card extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isFavorited: false
    }
  }

  toggleLike (e) {
    event.stopPropagation()
    this.setState({isFavorited: !this.state.isFavorited})
  }

  render () {
    const {name, avatar, timestamp, image} = this.props
    return (
      <div className={styles.card}>
        <CardHeader name={name} avatar={image} timestamp={timestamp}/>
        <img src={image} alt={image} />
        <CardFooter isFavorited={this.state.isFavorited} toggleLike={this.toggleLike.bind(this, event)} />
      </div>
    )
  }
}

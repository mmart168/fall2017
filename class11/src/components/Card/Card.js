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

  toggleLike () {
    this.setState({isFavorited: !this.state.isFavorited})
  }

  render () {
    const {name, avatar, timestamp, image} = this.props.post
    return (
      <div>
        <CardHeader name={name} avatar={avatar} timestamp={timestamp}/>
        <img src={image} alt={image} />
        <CardFooter isFavorited={this.state.isFavorited} toggleLike={this.toggleLike} />
      </div>
    )
  }
}

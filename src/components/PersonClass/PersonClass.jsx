import { Component } from 'react'

class PersonClass extends Component {
    render() {
      console.log(this.props.name)
    return (
      <span>Hi {this.props.name}, {this.props.surname}, {this.props.age}</span>
    )
  }
}

export default PersonClass

import { Component } from 'react'

class PersonClass extends Component {
    render() {
      console.log(this.props.name)
      //const {name, surname, age} = this.props; //BETTER, MORE CLEAN
    return (
      <span>{this.props.name} {this.props.surname} {this.props.age}</span>
      //<span>{name} {surname} {age}</span> //BETTER, MORE CLEAN
    )
  }
}

export default PersonClass


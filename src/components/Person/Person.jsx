import "./Person.css"

const Person = (props) => {
  return (
    <span className='personText'>{props.name}, {props.surname}, {props.age}</span>
  )
}

export default Person;
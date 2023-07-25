import './App.css'
import PersonClass from './components/PersonClass/PersonClass';
import Person from './components/Person/person';

const surname = 'Smith';
const name = 'Peter';
const age = 23;


function App() {
  return (
   
      <>
      <div>
    <Person surname={surname} name={name} age={age} />
    <Person surname='Watson' name='Mery' age={33}/>
    <Person surname='Phillips' name='John' age={41}/>
      </div>
      <div>
      
          <PersonClass name='Marc' surname='Lens' age={33}/>
          <PersonClass name='Yordan' surname='Lee' age={54}/>
          <PersonClass name='July' surname='Brown' age={66}/>

      </div>
      </>

      
    
  );
}
export default App;

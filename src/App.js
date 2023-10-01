
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
import { useState } from 'react';

function App() {

  const [name, setName] = useState("Kailas");
  const Company = "devTown";

  return (
    <div className="App" >
      <h1>Class Component</h1>
      <ClassComponent /><br />
      <h1>Functional Component</h1>
      <FunctionalComponent name={name} age={23} Intern={Company} changeName={setName} />
    </div>
  );
}

export default App;

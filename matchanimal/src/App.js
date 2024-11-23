import './App.css';
import {useState, useEffect} from 'react';
import AnimalName from './components/AnimalName';
import SelectAnimal from './components/SelectAnimal';
import {animals} from './data/animalDb'

function App() {
  const [displayedAnimal, setDisplayedani] = useState("");

  useEffect(()=>{
    const randomIndex = Math.floor(Math.random() * animals.length);
    setDisplayedani(animals[randomIndex].name)
  }, []);

  return (
    <div className="App">
       <AnimalName name={displayedAnimal} />
       <SelectAnimal />
    </div>
  );
}

export default App;

import {animals} from '../data/animalDb';

export default function SelectAnimal(){
    return(
        <div>
            <h2> Select the Animal </h2>
            <div>
                {animals.map((animal,index)=>(
                    <div key={index}>
                        <img
                            src={`../assests/img/${animal.img}`}
                            alt={animal.name}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
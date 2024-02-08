
import React, { useState } from 'react';


function App() {
  const [ temperatureValue, setTemperatureValue ] = useState(24);
  const [ temperatureColor, setTemperatureColor ] = useState('cold');

  const increaseTemp = () =>  {
    const newTemperature = temperatureValue + 1;
    setTemperatureValue(newTemperature);

    if (newTemperature > 26) {
      setTemperatureColor('hot');
    }
  }
  
  const decreaseTemp = () =>{
    const newTemperature =  temperatureValue - 1;
    setTemperatureValue(newTemperature);

    if (newTemperature < 27) {
      setTemperatureColor('cold');
    }
  }

  const onHighestValue = temperatureValue === 33;
  const onLowestValue = temperatureValue === 15;
  
  return (
    <div className="h-400 w-300 rounded-2xl shadow-2xl shadow-dark font-sans ">
      <h1 className=" text-xl font-bold text-color2 p-8 tracking-wide">TEMPERATURE CONTROL</h1>
      <div className="flex h-64 justify-center items-center">
          <div className= {`flex h-64 w-full rounded-md items-center justify-center tracking-wide text-2xl text-white transition-colors duration-300 ease-in-out ${temperatureColor}`}>{temperatureValue}°C</div>
      </div>
      <div class="flex justify-around p-8">
        <button onClick={ increaseTemp } className="h-16 w-20 rounded-xl text-2xl font-bold ring ring-3 ring-warm text-warm  hover:bg-warm hover:text-white cursor-pointer" disabled={onHighestValue}>+</button>
        <button onClick={ decreaseTemp } className="h-16 w-20 rounded-xl text-2xl font-bold ring ring-3 ring-cool text-cool hover:bg-cool hover:text-white cursor-pointer" disabled={onLowestValue}>-</button>
      </div>
    </div>
  );
}

export default App;
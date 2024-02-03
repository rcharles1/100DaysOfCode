
import React, { useState } from 'react';


function App() {
  const [ temperatureValue, setTemperatureValue ] = useState(24);
  const [ temperatureColor, setTemperatureColor ] =useState('cold');

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
    <div className="app-container">
      <h1 className='header'>TEMPERATURE CONTROL</h1>
      <div className="temperature-display-container">
          <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
      </div>
      <div className='button-container'>
        <button onClick={ increaseTemp } disabled={onHighestValue}>+</button>
        <button onClick={ decreaseTemp } disabled={onLowestValue}>-</button>
      </div>
    </div>
  );
}

export default App;
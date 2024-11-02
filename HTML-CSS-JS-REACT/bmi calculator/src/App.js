import React from 'react'
import { useState } from 'react'
import { useMemo } from 'react'
import './App.css'

const App = () => {
  const [height, setHeight] = useState(70);
  const [weight, setWeight] = useState(180);
  function onHeightChange(event) {
    setHeight(event.target.value)

  }
  function onWeightChange(event) {
    setWeight(event.target.value)

  }
  const output = useMemo(() => {
    const calculateHeight = (height / 100);
    return (weight / calculateHeight * calculateHeight)
  }, [weight, height]);

  return (
    <main>
      <h1>BMI CALCULATOR</h1>
      <div className='input-section'>
        <p className='slider-output'>Weight:{weight}kg</p>
        <input className='input-slider' type='range' step="1" min="40" max="200"
          onChange={onWeightChange}
        />
        <p className='slider-output'>Height:{height}cm</p>
        <input className='input-slider' type='range'
          min='140'
          max='220'
          onChange={onHeightChange} />
      </div>
      <div className='output-section'>
        <p>Your BMI is</p>
        <p className='output'>{output.toFixed(1)}</p>
      </div>

    </main>
  )
}

export default App

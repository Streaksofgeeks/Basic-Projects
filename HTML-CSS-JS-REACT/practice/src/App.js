import React from 'react'
import { useState } from 'react'

const App = () => {
  const [count, setcount] = useState(0);

  const handleClick = () => {
    setcount(count + 1);

  }
  const handleClickt = () => {
    setcount(count - 1);

  }


  return (
    <div>
      <h1>
        {count}
      </h1>
      <button onClick={handleClick}>+</button>
      <button onClick={handleClickt}>-</button>
    </div>
  )
}

export default App

import React from 'react'
import { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)

    
    function setCounter(value) {
        
        setCount(count+value);

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setCounter(parseInt(event.target[0].value));
    }

  return (
    <div>
        <h2> {count} </h2>
        <div>
            <button onClick={() => { setCounter(-1) }} > Decrement </button>
            <button onClick={() => { setCounter(1) }}> Increment </button>
        </div>

        <div>
            <form onSubmit={handleSubmit}>
                <label> Enter a value to increment by </label>
                <input type='number' />
                <button type='submit' > Submit </button>
            </form>
        </div>
    </div>
  )
}

export default Counter
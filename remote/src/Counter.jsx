import React,{useState} from 'react'

export default function Counter() {
    const [counter, setCounter] = useState(0);

  return (
    <div>
    <div>{counter}</div>
    <button onClick={() => setCounter(prevState => prevState + 1)}>Increment Counter</button>
    </div>
  )
}

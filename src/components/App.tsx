import React, { useState } from 'react'

type Props = {
  value?: number
}
const MyCounter = ({ value = 0 }: Props) => {
  const [counter, setCounter] = useState<number>(value)

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  )
}

export default MyCounter

import { useState } from 'react'

const states = [1, 'Anurag Singh']

export default function Counter({counterName}) {
  // state kisi bhi component ka local variable hota hai
  // us particular component mai hi uska state defined hota hai
  //state mutable hota hai yani change hota rhta hai
  const [count, setCount] = useState(0)
  const [name, setName] = useState(counterName)
  // props immutabale hota hai
  // hume kabhi props ko modify nhi krna chahiye bhut hi galat practice hai
  console.log('rendering');
  // ek coponent ke andr state bhi ho skta hai aur prop bhi ho skta hai
  // props apne parents ke dwara control kiya jata hai aur components apne aap khud hi control krta hai

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{count}</h1>
      <h2>{name}</h2>
      <button
        onClick={() => {
          setName('Anurag Singh')
          setCount((previousState) => previousState + 1)
          setCount((previousState) => previousState + 1)
          setCount((previousState) => previousState + 1)
        }}
      >
        Increase Count
      </button>
    </div>
  )
}
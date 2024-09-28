import { useState } from 'react'
// aise simply css ko import kre to yh ek baar load ho gyi aur ab yh khi dusre file 
// mai bhi use ho skti hai bina import kiye hue 
// iss cheez se bachne ke liye hum use krte hai module ke concept jise file ka couter.module.css se
// save krna hoga aur simply import jaise neeche kiya hai waise nhi kr skte
// import'./counter.css'
// yha pe styles ke jgh khuch bhi likh skte hai
import styles  from './counter.module.css'

console.log(styles);

const states = [1, 'Anurag Singh']

export default function Counter({counterName, children}) {
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
    {/* age classname mai- to aise likh kr style lagana hoga */}
      <h1 className={styles['text-xl']}>{count}</h1>
      <h2>{name}</h2>
      <button
      // className={styles.button}
      // ek saath multiple classes dekr style dene ka trika
      className={[styles.button, styles.show].join(' ')}
        onClick={() => {
          setName('Anurag Singh')
          setCount((previousState) => previousState + 1)
          setCount((previousState) => previousState + 1)
          setCount((previousState) => previousState + 1)
        }}
      >
      {/* rendering the child component */}
        Increase Count
      </button>
      {children}
    </div>
  )
}
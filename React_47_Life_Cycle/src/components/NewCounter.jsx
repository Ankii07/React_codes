import React, { useEffect } from 'react'
import { useState } from 'react'

export default function NewCounter({ name }) {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  //useEffect mai dom acess kr skte hai kyuki useeffect mount hone ke baad hi run hota hai..
  // useEffect{() => {
  //     console.log('useEffect');
  //     document.querySelector('#new-counter-title')
  //   },[]}
  
  // yh useeffect ek state ko monitor krega aur jb jb changes aayenge tb tb yh run krega..
  // yh dono trah se use kr skte hai componentdidMount aur componentDidUpdate ki trah   ..
    useEffect(() => {
      console.log('useEffect')
      document.querySelector('#new-counter-title')
    },[count])

    // unmount method run hota hai jb hum page se jane wale hote hai .
  return (
    <>
      <h1 className='mt-4'>{name}</h1>
      <div className="mt-6 flex items-center gap-4">
        <button
          className="rounded bg-blue-400 px-4 py-1"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <h2>{count}</h2>
        <button
          className="rounded bg-blue-400 px-4 py-1"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <button
          className="rounded bg-blue-400 px-4 py-1"
          onClick={() => setCount2(count2 - 1)}
        >
          -
        </button>
        <h2>{count2}</h2>
        <button
          className="rounded bg-blue-400 px-4 py-1"
          onClick={() => setCount2(count2 + 1)}
        >
          +
        </button>
      </div>
    </>
  )
}

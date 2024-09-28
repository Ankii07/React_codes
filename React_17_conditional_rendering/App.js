import AppleCounter from './components/AppleCounter'
import Counter from './components/Counter'

const App = () => {
  return (
    <div>
    {/* conditional rendering */}
       {/* agr false hai to counter component render kro nhi to apple counter ko render kro */}
      {false?<Counter counterName={"ankit Kumar"}></Counter>:<AppleCounter />}
    </div>
  )
}

export default App
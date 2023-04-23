import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Shiwei's tutoring portal</h1>
      <p>Currently under construction! Come back later! {`<3`}</p>
      <div className="card">
        <p>Click below!</p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App

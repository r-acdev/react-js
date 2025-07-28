import { useState } from 'react'
import { Header } from './components/Header'
import { Slider } from './components/Slider'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Slider/>
    </>
  )
}

export default App

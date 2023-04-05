import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HeaderSection from './components/HeaderSection'
import PresentationSection from './components/PresentationSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <HeaderSection/>
     <PresentationSection />
    </div>
  )
}

export default App

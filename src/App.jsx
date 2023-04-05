import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HeaderSection from './components/HeaderSection'
import PresentationSection from './components/PresentationSection'
import ContactSection from './components/ContactSection'

function App() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 5000)
  }, []);

  return (
    <div className="App">
     {!load ? <div className="loadingScreen"></div> : null}
     <HeaderSection/>
     <PresentationSection />
     <ContactSection />
    </div>
  )
}

export default App

{/* <HeaderSection/>
<PresentationSection />
<ContactSection />
<h1>cc</h1> */}
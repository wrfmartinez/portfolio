import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useState, useEffect } from 'react'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSwipeUp, setSwipeUp] = useState(false)
  const [isHidden, setHidden] = useState(false)

  useEffect(() => {
    // Trigger the animation after a short delays
    const timeout = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    const timeout2 = setTimeout(() => {
      setSwipeUp(true)
    }, 3000)

    const timeout3 = setTimeout(() => {
      setHidden(true)
    }, 4000)

    const timeout4 = setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100);

    return () => {
      clearTimeout(timeout)
      clearTimeout(timeout2)
      clearTimeout(timeout3)
      clearTimeout(timeout4)
    }
  }, [])

  return (
  <>
    <img className={`aura ${isVisible ? 'fadeIn' : ''} ${isSwipeUp ? 'swipeUp' : ''} ${isHidden ? 'hidden' : ''}`} src='../public/aura.svg' alt='an aura blob' />
    <Navbar></Navbar>
    <Header></Header>
    <About></About>
    <Projects></Projects>
    <Contact></Contact>
    <Footer></Footer>
  </>
  )
}

export default App

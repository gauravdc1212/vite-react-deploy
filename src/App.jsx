import { useState } from "react"
import Navbar from "./Components/Navbar"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Qualifications from "./Components/Qualifications";
import Contact from "./Components/Contact";
import Certificate from "./Components/Certificate";


function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black';
      setText("Enable Light Mode")

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      setText("Enable Dark Mode")
    }
  }
  const [text, setText] = useState('Enable Dark Mode')


  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode} text={text} />
        <Routes>
          <Route path='/' element={<Home mode={mode} />} />
          {/* <Route path='/qualification' element={<Qualification />} /> */}
          <Route path='/skills' element={<Skills />} />
          <Route path='/qualifications' element={<Qualifications />} />
          <Route path='/certificate' element={<Certificate />} />
          <Route path='/contact' element={<Contact mode={mode} />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App

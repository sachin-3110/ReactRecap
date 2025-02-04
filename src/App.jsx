import React, { useState } from 'react'
import ColorChanger from './components/Basic02/ColorChanger'
import Counter from './components/Basic02/Counter'
// import PuraComponent from './components/PropDrilling/PuraComponent'
import PasswordGenerator from './components/Basic03/PasswordGenerator'


const App = () => {
  let [color,setColor]=useState("bg-pink-300")
  const handleColorChange=(newColor)=>{
      setColor(newColor)
  }
  let[shadow,setShadow]=useState(false)
   const shadowButtonHandler=(currentState)=>{
      setShadow(currentState)
      
   }
  

  return (
    <div className={`h-screen w-full flex justify-center bg-black text-white text-2xl duration-300`}>
      {/* 
      Basic 02
      */}
      {/* <Counter shadowButtonHandler={shadowButtonHandler} shadow={shadow} /> */}
      {/* <PuraComponent/> */}
      {/* <ColorChanger onColorChange={handleColorChange} shadowButtonHandler={shadowButtonHandler} /> */}
    {/* Basic 03 */}
    <PasswordGenerator/>

      
      
      
      </div>
  )
}

export default App
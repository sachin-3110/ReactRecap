import React, { useState } from 'react'
import ColorChanger from './components/Basic02/ColorChanger'
import Counter from './components/Basic02/Counter'
// import PuraComponent from './components/PropDrilling/PuraComponent'



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
    <div className={`h-screen w-full flex justify-center items-center flex-col ${color} duration-300`}>
      <Counter shadowButtonHandler={shadowButtonHandler} shadow={shadow} />
      {/* <PuraComponent/> */}
      <ColorChanger onColorChange={handleColorChange} shadowButtonHandler={shadowButtonHandler} />
    </div>
  )
}

export default App
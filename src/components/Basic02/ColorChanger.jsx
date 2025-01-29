import React, { useState } from 'react'



// prop hamesha curly braces mai aaeinge dhyaan rakhna padega ye to ****
const ColorChanger = ({ onColorChange, shadowButtonHandler }) => {


    let colors = ["bg-green-400", "bg-blue-400", "bg-orange-400", "bg-yellow-400", "bg-cyan-400"]
    const [color, setColor] = useState(" ")
    let newColor = colors[null]
    const colorCatcher = (index) => {
        newColor = colors[index]
        onColorChange(newColor)

    }
    let [currentState, setCurrentState] = useState(false)
    const shadowonAndOff = () => {
        setCurrentState(prevState => !prevState)
        shadowButtonHandler(currentState)

    }


    







    return (
        <>
            <div className='m-2 bg-black/60 text-white px-5 py-2 font-semibold rounded-2xl'>
                <h2 className='text-xl py-2'>Click to Change the color</h2>
                <div className='flex justify-between gap-2'>

                    {colors.map((colors, index) => {
                        return (
                            <button
                                onClick={() => colorCatcher(index)}
                                key={index} className={`h-10 hover:cursor-pointer rounded-full w-10 ${colors}`}></button>
                        )
                    })}

                </div>

            </div>
            <button
                onClick={() => shadowonAndOff()}
                className={`p-2 duration-200 ${currentState?"bg-white text-black":"text-white bg-black"} rounded-full font-bold`}>{currentState?"Shadow On":"Shadow Off"}</button>
        </>

    )
}

export default ColorChanger
import React, { useState } from 'react'
import { use } from 'react'

const Counter = ({ shadow }) => {

    let [count, setCount] = useState(0)
    let MaxLimit=20
    const addvalue = () => {
        if (count >= MaxLimit) {
            alert("max limit reached")
        }
        if(count<MaxLimit){
            count++
        }
        /* what if mera funciton ye na hoke kuch aur to kya hota, maan lo ki ye hota multipletimes 
        
        setCount(count+1)
        setCount(count+1)
        setCount(count+1)
        setCount(count+1)
        
        tab iska kya result ho sakta tha iska result esa rahega jese isko jo cheej update krni hai vo to ek hi aur jese ki humko pata hai react same data ko bundle krke bhejta to isiliye saare counts bundle hokr single setCount(count+1) ho jaega {according to react fiber} like isko aur elaborate karein to hum isko kuch ese bhi likh sakte hainjese 
        setCount(prevCounter => prevCounter+1)
        setCount(prevCounter => prevCounter+1)
        setCount(prevCounter => prevCounter+1)
    
        jab isko run karenge tab vo separetely run hoga fir ek click pr sab add ho jaega
        or
        setCount((prevCount)=>{ return (prevCount+1})
        
        */

        setCount(count)

    }

    const removeValue = () => {
        if (count <= 0) {
            alert("value should be positive")
            setCount(count)
        }
        else count--
        setCount(count)
    }
    const add5 = () => {
        if (count >= MaxLimit) {
            alert("max limit reached")
        }
        if (count <= MaxLimit) {
            count = count + 5
            if(count===MaxLimit+5){
                count=MaxLimit
            }
        }
        setCount(count)
    }
    const sub5 = () => {
        if (count < 0) {
            alert("Count is zero")
        }
        else if(count>0|| count<3){
            count=0
        }
        
        else {
            count = count - 5
            if (count === -5) {
                count = 0
                alert("count reached zero")
                return
            }
        }
        setCount(count)
    }
    const counterReset = () => {
        if (count == 0) {
            alert("Count is already zero")
        }
        count = count - count
        setCount(count)
    }

    const countChecker = () => {
        if (count < 0)
            count = 0
    }


    return (
        <div className={`w-fit p-10 rounded-2xl bg-black/20 border-white justify-center flex flex-col border-2 items-center h-fit ${shadow ? "shadow-[0px_6px_100px_-22px_rgba(0,_0,_0,_0.7)]" : ""} duration-700`}>
            <h1 className='text-black/90 text-2xl bg-white p-2 rounded-full font-extrabold'>Counter</h1>
            <h2 className='flex justify-center items-center gap-2 text-black/90 text-xl capitalize font-bold'>Counter value <span className='text-white text-2xl'>{count}</span></h2>

            <div className='flex w-fit rounded-2xl gap-5 my-5 overflow-hidden bg-black/20 justify-center'>
                <button className='hover:cursor-pointer pl-5'
                    onClick={addvalue}
                >Add</button><button
                    onClick={removeValue}
                    className='bg-amber-100 px-5 hover:cursor-pointer'>Sub</button>

            </div>
            <div className='bg-black text-white font-semibold rounded-full overflow-hidden flex'>
                <button onClick={add5} className='bg-white text-black hover:bg-black hover:text-white border-r-2 px-2'>Add By 5</button>
                <button
                    button onClick={sub5} className='bg-white text-black px-2 hover:bg-black hover:text-white duration-200'>Sub by 5</button></div>
            <button
                onClick={counterReset}
                className='font-bold my-5 hover:scale-105 duration-200 text-blue-600'>Reset Count
            </button>
        </div>

    )
}

export default Counter

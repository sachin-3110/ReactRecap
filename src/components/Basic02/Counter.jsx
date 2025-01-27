import React, { useState } from 'react'
import { use } from 'react'

const Counter = () => {

    let [count, setCount] = useState(0)
    const addvalue = () => {
        if (count >= 20) {
            alert("max limit reached")
        }
        count++
        setCount(count)

    }

    const removeValue = () => {
        if (count < 0) {
            alert("value should be positive")
        }
        count--
        setCount(count)
    }
    const add5 = () => {
        if (count >= 20) {
            alert("max limit reached")
        }
        count++
        setCount(count)
    }
    const sub5 = () => {
        if (count < 0) {
            
        }
        else {
            count = count - 5
            if (count === -5) {
                alert("count reached zero")
                return 
            }
        }
        setCount(count)
        countChecker
    }
    const counterReset = () => {
        if (count == 0) {
            alert("Count is already zero")
        }
        count = count - count
        setCount(count)
    }

    const countChecker=()=>{
        if(count<0)
            count=0
    }
    return (
        <div className='w-fit p-10 rounded-2xl bg-black/20 border-white justify-center flex flex-col border-2 items-center h-fit'>
            <h1 className='text-black/90 text-2xl bg-white p-2 rounded-full font-extrabold'>Counter</h1>
            <h2 className='flex justify-center items-center gap-2 text-black/90 text-xl capitalize font-bold'>Counter value <h1 className='text-red-400 text-2xl'>{count}</h1></h2>

            <div className='flex w-fit rounded-2xl gap-5 my-5 overflow-hidden bg-black/20 justify-center'>
                <button className='hover:cursor-pointer pl-5'
                    onClick={addvalue}
                >Add</button><button
                    onClick={removeValue}
                    className='bg-amber-100 px-5 hover:cursor-pointer'>Sub</button>

            </div>
            <div className='bg-black text-white font-semibold rounded-full overflow-hidden flex'><button onClick={add5} className='bg-white text-black hover:bg-black hover:text-white border-r-2 px-2'>Add By 5</button><button onClick={sub5} className='bg-white text-black px-2 hover:bg-black hover:text-white duration-200'>Sub by 5</button></div>
            <button
                onClick={counterReset}
                className='font-bold my-5 hover:scale-105 duration-200 text-blue-600'>Reset Count</button>
        </div>

    )
}

export default Counter
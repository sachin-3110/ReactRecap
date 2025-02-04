import React, { useState, useCallback, useEffect,useRef } from 'react'

const PasswordGenerator = () => {
    let [length, setLength] = useState(8)
    const [allowedNumber, setNumberAllowed] = useState(true)
    const [includeChar, setIncludeChar] = useState(true)
    const [password, setPassword] = useState("")
    const[copy,setCopied]=useState(false)
    const passwordGenerator = useCallback(
        () => {
            let pass = ""
            let str =
                "ABCDEFGHIJKLMNOPQRSTRUVWXYZabcdefghijklmnopqrstuvwxyz "
            // string jisse password banaeing vo aayega useme
            // conditions 
            if (allowedNumber) str += "0123456789"
            if (includeChar) str += "!@#$%^&*"

            for (let i = 1; i <= length; i++) {
                let char = Math.floor(Math.random() * str.length + 1);
                // pass = str.charAt(char)  
                // upar galti hai jese ki vo sirf ek charachter show kar rha kyunki usme concatenation nahi ho raha vo sirf reupdate ho raha hai sirf + add krne se vo string judne lag jaegi
                pass += str.charAt(char)

            }
            setPassword(pass)


        }
        , [length, allowedNumber, includeChar, setPassword]
    )
    // passwordGenerator()
    // jese ki humne ise seedhe call krke dekha to yahan react apni rerendering limit pr pahonch chuka hai jiske kaaran hum ise kabhi bhula nahi paaenge iske liye hume kuch to use karna padega to isko overconme karne ke liye humare pass hai useEffect hai joki seedha use hota uske liye hume koi variable assign nahi karna padta aur use use krna ke liye useEffect(()=>{},[dependencies])
    
    let passwordRef=useRef(null)
    const copyToClipboardButtonHandler=useCallback(()=>{
        passwordRef.current?.select()
        passwordRef.current?.setSelectionRange(0,999)
        passwordRef?.setCopied((prevState)=>!prevState)
        window.navigator.clipboard.writeText(password)
        
    },[password])

    useEffect(() => {
        passwordGenerator()
    }, [length, allowedNumber, includeChar])
    // usecallback ki dependencies sirf aur optimization ke liye hote hai jabke useEffect ki dependencies use rerender krne ke liye use hote hain never compare there dependencies equally they are totally different so......



    return (
        // length ko track krna hoga jiske liye useSTate lagega
        // 
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-2 text-orange-500 bg-gray-800 h-fit'>
            Password Generator
            <div className='flex gap-2 my-2'>
                <input type="text"
                    value={password}
                    className='bg-white placeholder:text-black/50 outline-none w-full m-2 py-1 px-3'
                    placeholder='password'
                    ref={passwordRef}
                /> <button
                    onClick={copyToClipboardButtonHandler}
                    className='text-white rounded-2xl p-2 bg-black' >copy</button>
            </div>
            <div className='flex flex-wrap justify-center'>
                <input
                    type="range"
                    min={6}
                    max={100}
                    value={length}
                    className='cursor-pointer'
                    onChange={(e) => {
                        setLength(e.target.value)
                    }}
                /><label className='p-2'>
                    length: {length}
                </label>
                <div className="flex justify-center gap-2 w-full items-center">
                    <input type="checkbox" name="" id="numberInput"
                        defaultChecked={allowedNumber}
                        onChange={() => {
                            setNumberAllowed((prevState) => !prevState)
                        }}

                    /><label htmlFor="numberInput">Number</label>
                    <input type="checkbox" name="" id="charInput"
                        defaultChecked={includeChar}
                        onChange={() => {
                            setIncludeChar((prevState) => !prevState)
                        }}

                    /><label htmlFor="charInput">Character</label>
                </div>
            </div>
        </div>
    )
}

export default PasswordGenerator
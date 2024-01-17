import  React, { useState , useEffect } from 'react'
import '../App.css'

export const Time = () => {

    let [date, setDate] = useState(new Date());
    
    useEffect(() => {
        let timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    })

    return(
        <div className="right time">
            <p> {date.toLocaleTimeString()}</p>
        </div>
    )
}

export default Time;
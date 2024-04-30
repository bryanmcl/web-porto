import styles from './Clock.module.css'
import {useState, useEffect, useRef} from 'react'

function Clock() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        console.log('Component rerendered')
    })
    function preZero(num) {
        return num < 10 ? `0${num}` : num
    }
    function mappedTime() {
        const hours = preZero(time.getHours())
        const minutes = preZero(time.getMinutes())
        const seconds = preZero(time.getSeconds())
        const meridiem = hours >= 12 ? 'PM' : 'AM'
        return `${hours%12}:${minutes}:${seconds} ${meridiem}`
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, []);
    return (
        <>
            <div className={styles['clock-container']}>
                <h1>{mappedTime()}</h1>
            </div>
        </>
    )
}

export default Clock
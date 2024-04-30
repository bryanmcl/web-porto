import styles from './Stopwatch.module.css'
import { useState, useEffect, useRef } from 'react'

function Stopwatch() {
    const [time, setTime] = useState(0)
    const startTimeRef = useRef(Date.now())
    const timerInterval = useRef(null)
    const [stopwatchState, setStopwatchState] = useState('stop')
    useEffect(() => {
        if(stopwatchState === 'start') {
            start()
        } else if (stopwatchState === 'stop') {
            stop()
        }
        console.log(stopwatchState)
    }, [stopwatchState])

    function start () {
        startTimeRef.current = Date.now() - time
        console.log(startTimeRef.current)
        timerInterval.current = setInterval(() => {
            setTime(Date.now() - startTimeRef.current)
        }, 10)
    }

    function stop () {
        clearInterval(timerInterval.current)
    }

    function reset () {
        changeAction('stop')
        setTime(0)
    }

    function formatTime () {
        return new Date(time).toISOString().slice(11, -2)
    }
    function changeAction(act) {
        setStopwatchState(act)
    }
    return (
        <>
            <div className={styles['stopwatch-container']}>
                <h1 className={styles['stopwatch-time']}>{formatTime()}</h1>
                <div className={styles['stopwatch-control']}>
                    <button
                        className={styles['success']}
                        onClick={() => changeAction('start')}
                    >
                        Start
                    </button>
                    <button
                        className={styles['danger']}
                        onClick={() => changeAction('stop')}
                    >
                        Stop
                    </button>
                    <button
                        onClick={() => reset()}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </>
    )
}

export default Stopwatch
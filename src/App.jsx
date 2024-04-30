import Header from './Header.jsx'
import Footer from './Footer.jsx'
import List from '@/components/List/List.jsx'
import CardComponent from '@/components/CardComponent/CardComponent.jsx'
import { useState, useEffect, useRef, createContext } from 'react'
import Clock from '@/components/Clock/Clock.jsx'
import Stopwatch from '@/components/Stopwatch/Stopwatch.jsx'

export const ColorContext = createContext()
function App() {
    const food = [
        { name: "Apple", color: "Red" },
        { name: "Banana", color: "Yellow" },
        { name: "Cherry", color: "Red" },
        { name: "Date", color: "Brown" },
        { name: "Elderberry", color: "Purple" },
        { name: "Fig", color: "Purple" },
        { name: "Grape", color: "Purple" },
        { name: "Honeydew", color: "Green" },
        { name: "Ice Cream", color: "White" },
        { name: "Jackfruit", color: "Yellow" },
    ]

    const [text, setText] = useState('#000000')
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    const handleResize = () => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    useEffect(() => {
        document.title = `Color: ${text} | Width: ${width} | Height: ${height}`
    }, [text, width, height])

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);
    const handleInput = (e) => {
        setText(e.target.value)
    }
    return (
        <>
            <Stopwatch/>
            <Clock/>
            <Header/>
            <List items={food}/>
            <h1>{width}px X {height}px</h1>
            <h1 style={{color: text}}>{text}</h1>
            <input type="color" onChange={handleInput} value={text}/>
            <div className="card-container">
                <ColorContext.Provider value={{text}}>
                    <CardComponent title="Card 1" description="desc1, lorem ipsum" available={true}/>
                </ColorContext.Provider>
                <CardComponent title="Card 2" description="desc2, lorem ipsum" available={true}/>
                <CardComponent title="Card 3" description="desc3, lorem ipsum"/>
                <CardComponent title="Card 4" description="desc4, lorem ipsum"/>
                <CardComponent title="Card 4"/>
            </div>

            <Footer/>
        </>
    );
}

export default App

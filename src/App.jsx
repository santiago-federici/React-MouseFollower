import { useState, useEffect } from 'react'
import './App.css'

function App() {
    const [enabled, setEnabled] = useState(false)
    const [cursor, setCursor] = useState(false)
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    })

    useEffect(() => {
        const handleMove = (event) => {
            const {clientX, clientY} = event
            setPosition({x: clientX, y: clientY})
        }
        
        
        if(enabled){
            window.addEventListener("pointermove", handleMove)
        }
        
        return () => {window.removeEventListener("pointermove", handleMove)}
    }, [enabled]);



    useEffect(() => {
        document.body.classList.toggle('no-cursor', cursor)
        return () => {
            document.body.classList.remove('no-cursor')
        };
    }, [cursor]);
    
    return (
        <main className='app-main'>
            <div className='mouse-follower' style={{transform: `translate(${position.x}px, ${position.y}px)`}}></div>

            <button onClick={() => setEnabled(!enabled)}>{enabled ? 'Disable' : 'Enable'} mouse follower</button>

            <button onClick={() => setCursor(!cursor)}>{cursor ? 'Show' : 'Hide'} cursor</button>
        </main>
    )
}

export default App

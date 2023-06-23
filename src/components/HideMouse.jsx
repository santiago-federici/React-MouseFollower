
import { useState, useEffect } from 'react'

export const HideMouse = () => {
    const [cursor, setCursor] = useState(false)

    useEffect(() => {
        document.body.classList.toggle('no-cursor', cursor)
        return () => {
            document.body.classList.remove('no-cursor')
        };
    }, [cursor]);
    
    return(
        <button onClick={() => setCursor(!cursor)}>{cursor ? 'Show' : 'Hide'} cursor</button>

    )
}
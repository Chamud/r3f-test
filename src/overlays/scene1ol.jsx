import React, { useState, useEffect } from 'react';

const Scene1OL = () => {
    const [displayedText, setDisplayedText] = useState('')
    const fullText = 'Drag to rotate the globe, and click on image to view. Click again to close the image!'

    useEffect(() => {
        let index = 0
        const interval = setInterval(() => {
            setDisplayedText(fullText.substring(0, index + 1))
            index++
            if (index === fullText.length) {
                clearInterval(interval)
            }
        }, 50); 
        return () => clearInterval(interval)
    }, [fullText])

    return (
        <div className="scene1-ol">
            <p>{displayedText}</p>
        </div>
    )
}

export default Scene1OL

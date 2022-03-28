import React, {useEffect, useState} from 'react'

function TestEffect() {

    const [gg, setGg] = useState(0)
    const [ee, setEe] = useState(0)
    useEffect(() => {
        function changeGG() {
            console.log('this is effect running')
        }
    },[gg])
    return (
        <div>
            <span>{gg}</span>
            <span>{ee}</span>
            <button onClick={()=> setGg(gg+1)}>Test Effect</button>
            <button onClick={()=> setEe(ee+1)}>Test EE</button>
        </div>
    )
}

export default TestEffect;
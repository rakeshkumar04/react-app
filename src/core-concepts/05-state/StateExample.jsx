import { useState } from "react"

export default function StateExample() {

    const[count, setCount] = useState(0);
    console.log("Component Rendered")
    //It Renders Every Time State Changes - It renders two times because of StrictMode

    const handleClick = () =>{
        setCount(count+1);
    }

    const resetButtonClick = () => {
        setCount(0)
    }

    return (
        <>
        <h1>State Example</h1>
        <h3>Count {count}</h3>
        {/* Increment Button Logic*/}
        <button onClick={handleClick} style={{
            backgroundColor: "black",
            color: "yellow"
        }}>Increase</button>
        <hr />
        {/* Reset Button Logic*/}
        <button onClick={resetButtonClick} style={{
            backgroundColor: "lightgrey",
            color: "black"
        }}>Reset</button>
        </>
    )
}
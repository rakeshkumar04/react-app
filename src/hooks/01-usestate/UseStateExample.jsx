import { useState } from "react"

export default function UseStateExample() {

    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!(isVisible)) //Toggle
    }

    return <div>
        <button onClick={handleClick}>
            Show Text
        </button>
        {isVisible && <p>
            This is the Text that gets toggled
        </p> }
    </div>
};

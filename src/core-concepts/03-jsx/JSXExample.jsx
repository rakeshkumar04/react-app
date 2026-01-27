import "../../App.css"

export default function JSXExample() {
    // embedded expressions
    const name = "Rakesh"


    return (
        <>
        <h1 style={
            {backgroundColor: "yellow", border: "6px solid black"}
        }>JSX Example by {name}</h1>
    <p>This is a Sample Text</p>
    </>
    )

}
export default function ListExample() {
    const items = ['Apple', 'Banana', 'Grapes'];
    return (
        <>
        <h1>List Example</h1>
        <ul>
            {items.map((item, index) => <li key={index}>{item}</li> )}
        </ul>
        </>
    )
};

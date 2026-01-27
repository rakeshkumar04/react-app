export default function PropsExample({title, tech}) {
    return (
        <>
        <h1>Props Example</h1>
        <p>{title}</p>
        <p>This App is based on {tech}</p>
        </>
    )
}

// (title) - {title} or (props) - {props.title}
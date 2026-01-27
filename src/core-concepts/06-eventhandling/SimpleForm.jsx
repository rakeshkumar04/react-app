export default function SimpleForm(params) {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.name.value)
        console.log(event.target.email.value)
    }
    
    return (
        <>
        <h1>Simple Form</h1>
        <form onSubmit={handleSubmit}> 
            <input type="text" name="name" placeholder="Enter Name" />
            <input type="text" name="email" placeholder="Enter Email" />
            <button type="submit" style={{
            backgroundColor: "cyan",
            color: "black"
        }}>Submit</button>
        </form>
        </>
    )
};

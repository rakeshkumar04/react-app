import { useActionState } from "react"

export default function UseActionStateExample() {

    const submitForm = async (previousState, formdata) => {
        await new Promise((res, rej) => setTimeout(res, 5000)) //Simulating API Calls
        if(formdata.get("username") == "logesh" && formdata.get("password") == "1234"){
            if(previousState == "Login Success") {
                return "You Already Logged In"
            }
            return "Login Success"
        }
        return "Invalid Credential"
    }

    const [state, formAction, isPending] = useActionState(submitForm, "Fill the Form Fields")

    return <div>
        <h2>UseActionState Example</h2>
        <form action= {formAction}>
            <div style={{
                display: "flex", flexDirection: "column"
            }}>
                <label htmlFor=""> UserName
                    <input type="text" name="username" id="" />
                </label>
                <label htmlFor=""> Password
                    <input type="text" name="password" id="" />
                </label>
                <button type="submit">Submit</button>
            </div>
        </form>

        <p>{isPending ? "Loading..." : state}</p>
    </div>
};

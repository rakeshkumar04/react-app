import { useFormStatus } from "react-dom";

function SubmitButton() {
    const {pending} = useFormStatus()
    return <button type="submit">{pending ? "Submitting..." : "Submit"}</button>
}

export default function UseFormStatusExample(params) {

    async function handleSubmit(formData) {
        await new Promise((resolve) => setTimeout(resolve, 5000));
        console.log("Form Submitted", formData)
    }

    return <div>
        <h2>UseFormStatus Example</h2>

        <form action= {handleSubmit}>
            <div style={{
                display: "flex", flexDirection: "column"
            }}>
                <label htmlFor=""> UserName
                    <input type="text" name="username" id="" />
                </label>
                <label htmlFor=""> Password
                    <input type="text" name="password" id="" />
                </label>
                <SubmitButton/>
            </div>
        </form>
    </div>
};

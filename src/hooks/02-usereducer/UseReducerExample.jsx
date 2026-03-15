import { useReducer } from "react"

const initialState = { count: 0 }

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
            break;
        
        case 'decrement':
            return { count: state.count - 1 }
            break;
    
        default:
            break;
    }
}

export default function UseReducerExample() {

    const [state, dispatch] = useReducer(reducer, initialState)

    return <div>
        <h2>UseReducer Example</h2>
        <h3>Count: {state.count}</h3>
        <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
        <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
    </div>
};

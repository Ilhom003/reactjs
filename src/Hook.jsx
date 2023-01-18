import React, { useState, useReducer } from "react";

const Hooks = (props) => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('webbrain');
    const [option,setOption]= useState(1)

    const reducer = (state, action) => {
        console.log(state, action);
        switch (action.type) {
            case 'plus':
                return state + 1
            case 'minus':
                return state - 1
            case 'byamout':
                return state + action.payload
            default:
                return state
        }
    }

    const [counter, dispatch] = useReducer(reducer, 0)
    const onSelect =(e)=>{
        setOption(Number(e.target.value))
    }
    
  
    return (
        <div style={{ flex: 1 }}>
            <h1>Hooks Component</h1>
            <h1>Count: {count}</h1>
            <h1>Counter: {counter}</h1>
            <button onClick={() => dispatch({ type: 'plus' })}>+</button>
            <button onClick={() => dispatch({ type: 'minus' })}>-</button>
            <select defaultValue={1}  onChange={onSelect} name="" id="">
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <button onClick={() => dispatch({ type: 'byamout', payload: option })}>{option}</button>
            {/* <button onClick={() => dispatch({ type: 'byamout', payload: 50 })}>50</button> */}
            <input onChange={(e) => setName(e.target.value)} type="text" value={name} />
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}

export default Hooks; 
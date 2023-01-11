import React, { useState } from "react";

const Hooks = () => {
    const [count, setCount] = useState(10);
    const [name, setName] = useState('webbrain');
    const [data, setData] = useState({ count: 0 ,name:'webbrain'})
    console.log(data);
    return (
        <div style={{ flex: 1 }}>
            <h1>Hooks Component</h1>
            <h1>Count: {data.count}</h1>
            <h1>Name: {data.name}</h1>
            <input onChange={(e) => setData({...data,name:e.target.value})} type="text" value={data.name} />
            <button onClick={() => setData({...data,count:data.count - 1})}>-</button>
            <button onClick={() => setData({...data,count:data.count + 1})}>+</button>
        </div>
    )
}

export default Hooks; 
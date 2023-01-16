import React, { useState, useEffect } from "react";


const UseState = (props) => {
   // const [count, setCount] = useState(0);
   // const [resourceType, setResourceType] = useState('posts')

   // console.log('render');
   // useEffect(()=>{
   //    console.log('onmount');
   // },[resourceType])

   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

   const handleResize = ()=>{
      setWindowWidth(windowWidth.innerWidth)
   }
   useEffect(() => {
      window.addEventListener('resize', handleResize)
   },[])
   return (
      <div>
         {/* <h1>Count: {count}</h1>
         <button onClick={() => setCount(count + 1)}>+</button>
         <button onClick={() => setCount(count - 1)}>-</button>
         <hr/>
         <button onClick={() => setResourceType('posts')}>Post</button>
         <button onClick={() => setResourceType('users')}>Users</button>
         <button onClick={() => setResourceType('comments')}>Comments</button>
         <hr/>
         <h1>{resourceType}</h1> */}

         {windowWidth}
      </div>
   )
}

export default UseState
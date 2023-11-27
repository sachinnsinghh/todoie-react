import React , {useState} from "react";

const CounterComponent = () => {
  const [count, setCount]= useState(0);



  // console.log("hello", count);
  return (
    <div>
      <p>Count Component - {count }</p>
      <p>number is - {count% 2 ===0  ? "Even" : "Odd" }</p>
      <button onClick={()=> setCount(count+1)}>increment</button>
      <button onClick={()=> setCount(count -1)}>decrement</button>
      {/* <button onClick={()=> setCount(count%2? even : odd)}>decrement</button> */}

    </div>
  )
}

export default CounterComponent;

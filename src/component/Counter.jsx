import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/slice";


export const Counter = ()=>{
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();

    const { counter } = useSelector((state) => ({
		counter : state.counter
	}))

    return (
        <div>
            <h3>hii wel in our counter app</h3>
            <p>counter : <span>{counter}</span></p>
            <button onClick={()=>dispatch(increment(1))}>add +</button>
            <button disabled={counter<=0} onClick={()=>dispatch(decrement(-1))}>subb -</button>
        </div>
        
    )
}
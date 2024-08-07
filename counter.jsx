import React from 'react'
import './style.css';



import { useState } from 'react'




const Counter = () => {


    const [count, setCount] = useState(5)
    //count_function  new_value    intial value



    function decrement() {
        setCount(count - 1)

    }
    function increment() {
        setCount(count + 1)
    }
    return (
        <div>
            <div className='center'>
                <h1>Counter</h1>
                <div className='row'>
                    <button onClick={decrement}>-</button>
                    <h2>{count}</h2>
                    <button onClick={increment}>+</button>
                </div>

            </div>

            <div>
                <input type="text" placeholder='Enter your name' />
                <button>Submmit</button>
            </div>

        </div>
    )
}

export default Counter

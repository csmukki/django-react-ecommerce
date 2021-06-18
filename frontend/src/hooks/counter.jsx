import React, {useState, useEffect} from 'react';


function Counter(props) {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        document.title = `${name} clicked ${counter} times`;

        return () => {
            console.log("ComponentWillUnmount");
        };
    }, [name]);

    return(
        <div className="container">
            <h1 style={{color: "green"}}>React Hooks</h1>
            <div className="input">
                <input type="text" onChange={e => setName(e.target.value)} />
            </div>
            <div className="counter" style={{marginTop: 30}}>
                <h3>{name} pressed {counter} times!</h3>
                <button 
                    onClick={() => setCounter(counter+1)}>Increment</button>
                <span 
                    style={{paddingLeft: 20, paddingRight: 20}}>{counter}</span>
                <button 
                    onClick={() => setCounter(counter-1)}>Decrement</button>
            </div>
        </div>
    );
}

export default Counter;
import React, { useState } from "react";

function FunctionalComponent(props) {

    const [count, setCount] = useState(0);
    const [inputName, setInputName] = useState("");

    const SubtractFn = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <p><i>This component is using functional component</i></p>
            <button onClick={() => { setCount(count + 1) }}>Click me to add 1</button> <br />
            <button onClick={SubtractFn}>Click me to subtract 1</button>
            {/* we could also pass a function into a onclick through a variable also */}
            <p>Result : {count}</p>

            <p>Myself {props.name}, Iam {props.age} years old and I work in {props.Intern} </p>
            {/* the onChange function could track all the changes making in the input field */}
            <input onChange={(e) => setInputName(e.target.value)} />
            <button onClick={() => props.changeName(inputName)}>Change name</button>
            {/* <button onClick={() => props.changeName("Kalki")}>Change name to kalki</button> */}
        </div>
    );
}

export default FunctionalComponent; //we could only export one function as default if we have multiple functions to export we could use "export {FunctionalComponent, ...}"
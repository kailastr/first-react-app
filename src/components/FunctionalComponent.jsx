import React, { useState, useEffect, useRef } from "react";

function FunctionalComponent(props) {

    const [count, setCount] = useState(0);
    const [inputName, setInputName] = useState("");

    const SubtractFn = () => {
        setCount(count - 1);
    };

    useEffect(() => {
        console.log("Component did mount");
    }, []); //the [] is known as the dependency array which tells the useEffect when to run.In this case the array tells that only run when the array is empty ie; when the page is initially loading

    useEffect(() => {
        console.log("Component did Update");
    }); //this useEffect run only when any update happens to the component

    useEffect(() => {
        console.log("Component did update on inputName variable");
    }, [inputName]); //this function is used to track changes happens to the inputName variable

    useEffect(() => {
        console.log("Component change happen to the props");
    }, [props]);

    useEffect(() => {
        return console.log("Component did Unmount");
    }, []); //this useEffect uses 'return' which helps to get the unmount(deletion) of components when we go from one page to another page or for some other reasons

    const prevRef = useRef(); //useRef is used to use the refference of any variable so that we could check that the change is required or not

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
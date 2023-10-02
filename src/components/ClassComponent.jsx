import React from "react";

class ClassComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "Kailas",
            age: 23
        };
        console.log("This is constructor section ");
    }

    componentDidMount() {
        console.log("This is ComponentDidMount section and fetching of data from the BackEnd happens here");
    }

    componentDidUpdate() {
        console.log("Component did update only");
    }

    componentWillUnmount() {
        console.log("Component did Unmount here");
    }

    render() {
        console.log("This is render section");
        return (
            <div>
                <p><mark>This component is using class component</mark></p>
                <br />
                <button onClick={() => {
                    this.setState({
                        ...this.state,
                        age: this.state.age + 1,
                    });
                }}>Click to add age</button>
                <p>Myself {this.state.name}, Im {this.state.age} years old</p>
            </div >
        )
    }
}

export default ClassComponent;
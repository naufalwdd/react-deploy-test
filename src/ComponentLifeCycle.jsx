import React from 'react';

class ComponentLC extends React.Component {

    componentWillMount() {
        console.log("Will Mount")
    }

    componentDidMount() {
        console.log("Did Mount")
    }

    render() {
        console.log("Render")
        return (
            <h1>Component LifeCycle</h1>
        )
    }
}

export default ComponentLC
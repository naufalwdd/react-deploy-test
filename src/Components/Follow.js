import React, { Component } from 'react'

class Follow extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Follow our social media by clicking this button'
        }
    }

    changeMessage() {
        this.setState ({
            message: 'Thank you for following our social media! :)'
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button onClick = {() => this.changeMessage()}>Follow</button>
            </div>
        )
    }
}
export default Follow
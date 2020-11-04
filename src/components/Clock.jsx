import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
        this.timer = null;
    }

    componentDidMount() {
        this.timer = window.setInterval(() => {
            this.setState({
                date: new Date()
            })
        })
    }
    componentWillUnmount() {
        window.clearInterval(this.timer)
    }
    render() {
        return (
            <div>
                <h5 style={{ textAlign: 'right' }}>
                    {this.state.date.toLocaleString()}
                </h5>
            </div>
        )
    }
}

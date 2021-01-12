import React, { Component } from 'react';
import Marker from './Marker';

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({ 
            date: new Date()
        });
    }

    render() {
        const { date } = this.state;
        return (
            <>
            <div className="shadow-clock">
                <div className="shape-clock">
                    <div className="content-clock" style={{backgroundImage: 'url(/clock.png)'}}>
                        <Marker date={date.getSeconds()} coefficient={60} w={0.1} h={4} c={'#f00'}/>
                        <Marker date={parseFloat(date.getMinutes() + date.getSeconds()/60)} coefficient={60} w={0.25} h={3} c={'#fff'}/>
                        <Marker date={parseFloat(date.getHours() + date.getMinutes()/60 + date.getSeconds()/3600)} coefficient={12} w={0.3} h={2} c={'#fff'}/>
                        <div className="dot-clock"></div>
                    </div>
                </div>
            </div>
            <h3>{date.toLocaleTimeString()}</h3>
            <h3>{date.toDateString()}</h3>
            </>
        );
    }
}
import React, { Component } from 'react';


export default class Marker extends Component {
    render() {
        const { date, coefficient, w, h, c } = this.props;
        const style = {
            width: `${w}em`,
            height: `${h}em`,
            backgroundColor: `${c}`,
            margin: 'auto',
            borderRadius: '0.25em'
        };
        return (
            <div className="marker" style={
                { transform: `rotate(calc(360deg/${coefficient} * ${date}))`,
                  height: `${h*2}em`,
                  width: `${h*2}em`      
                }
                }>
                <div style={style}></div>
            </div>
        );
    }
} 
import React from 'react';
import './App.css';


export default class Main extends React.Component {


    render() {
        let colorMain = this.props.counter === this.props.maxCounter ? "Five" : "";
        return (

            <div className="main">
                <h1 className={colorMain}>{this.props.counter}</h1>
            </div>
        )
            ;
    }
}


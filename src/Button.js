import React from 'react';
import './App.css';


export default class Button extends React.Component {


    Setting = () => {
        switch (this.props.name) {
            case 'Up':
                this.props.clickUp();
                break;
            case 'Reset':
                this.props.clickReset();
                break;
            case 'Setting':
                this.props.isSet();
                break;
            default:
                alert('Нет');
        }
    };

    render() {
        debugger
        return (
            <div className="button">
                <button onClick={this.Setting} >{this.props.name}</button>
            </div>
        )
            ;
    }
}


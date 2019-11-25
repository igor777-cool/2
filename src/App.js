import React from 'react';
import './App.css';
import Main from "./Main";
import Button from "./Button";
import MainSetting from "./MainSetting";


export default class App extends React.Component {
    componentDidMount() {
        this.restoreState();
    };
    saveState = () => {
        let asString = JSON.stringify(this.state);
        localStorage.setItem('ourState', asString)
    };
    restoreState = () => {
        let state = {
            counter: 0,
            maxCounter: 5,
            dis: false
        };
        let asString = localStorage.getItem('ourState');
        if (asString != null){
            state = JSON.parse(asString)
        };
        this.setState(state);
    }
    state = {
        nameButton: ['Up', 'Reset', 'Setting'],
        resetCounter: 0,
        counter: 0,
        dis: false,
        maxCounter: 5,
        set: true
    };

    clickUp = () => {
        if (this.state.counter < this.state.maxCounter) {
            this.setState({
                counter: this.state.counter + 1,
            }, () => {this.saveState()})
        } else {
            return this.setState({dis: true}, () => {this.saveState()})
        }
    };
    clickReset = () => {
        this.setState({
                counter: Number(this.state.resetCounter),
                dis: false,
            }, () => {this.saveState()}
        )
    };
    AddSetting = (NewMaxValue, NewStart) => {
        if (NewMaxValue <= 0) {
            this.setState({
                counter: "Введите число больше 0",
                maxCounter: 0
            })
        } else {
            this.setState({
                maxCounter: Number(NewMaxValue),
                counter: Number(NewStart),
                dis: false,
                resetCounter: NewStart
            });
        }
    };
    isSet = () => {
            this.setState(({set})=>{
                return{
                    set: !set
                }
            }
            )
    };

    render() {
        let button = this.state.nameButton.map(el => <Button state={this.state} isSet={this.isSet}
                                                             clickReset={this.clickReset} clickUp={this.clickUp}
                                                             name={el} />);
        debugger
        return (
            <div className="AppStart">
                <div className="App">
                    {this.state.set && <Main counter={this.state.counter} maxCounter={this.state.maxCounter}/>}
                    {!this.state.set && <MainSetting AddSetting={this.AddSetting} maxCounter={this.state.maxCounter}
                                                     counter={this.state.counter}/>}
                    <div className={'button'}>
                        {button}
                    </div>

                </div>
            </div>
        )
            ;
    }
}



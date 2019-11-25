import React from 'react';
import './App.css';


export default class MainSetting extends React.Component {
    state = {
        NewSetMax: "",
        NewStartV: ""
    }
    NewMaxSet = (e) => {
        this.setState({
            NewSetMax: e.currentTarget.value
        })
    };
    NewStartSet = (e) => {
        this.setState({
            NewStartV: e.currentTarget.value
        })
    }
    AddClickSet = () => {
        this.props.AddSetting(this.state.NewSetMax, this.state.NewStartV);
        this.state.NewSetMax = "";
        this.state.NewStartV = "";
    };

    render() {
        let error = this.props.maxCounter === 0 ? 'error' : "";
        return (
            <div className='main'>
                <div className="mainSetting">
                    <div className='MainSet'>
                        <p>Max Value :</p>
                        <input className={error} onChange={this.NewMaxSet} type="text"
                               placeholder={this.props.counter} value={this.state.NewSetMax}/>
                    </div>
                    <div className='MainSet'>
                        <p>Start Value :</p>
                        <input onChange={this.NewStartSet} type="text" placeholder={this.props.maxCounter}
                               value={this.state.NewStartV}/>
                    </div>
                </div>
                <div><button onClick={this.AddClickSet}>save</button></div>

            </div>

        )
            ;
    }
}


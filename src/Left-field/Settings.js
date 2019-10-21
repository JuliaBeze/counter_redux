import React from 'react';
import './Settings.css'
import {connect} from "react-redux";


class Settings extends React.Component {

    render() {

        let showErrorStart = this.props.errorStartValue? "errorInputSettings": "settings"
        let showErrorMax = this.props.errorMaxValue? "errorInputSettings": "settings"

        let {maxValue, startValue} = this.props;
        return (
                <div className="settings" >
                    <div> Max value
                        <input className={showErrorMax} onChange={this.props.changeMaxValue}
                                           type="number" placeholder="Enter value"
                                           value={maxValue}/>
                    </div>
                    <div> Start value
                        <input className={showErrorStart} onChange={this.props.changeStartValue}
                                             type="number" placeholder="Enter value"
                                             value={startValue}/>
                    </div>
                </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        maxValue: state.maxValue,
        startValue: state.startValue,
        errorStartValue: state.errorStartValue,
        errorMaxValue: state.errorMaxValue

    }
}


export default connect (mapStateToProps,{})(Settings);

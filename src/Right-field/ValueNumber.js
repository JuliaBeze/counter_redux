import React from 'react';
import './ValueNumber.css'
import {connect} from "react-redux";


class ValueNumber extends React.Component {

    render() {

        let {numbers, maxValue} = this.props;
        return (

            !this.props.errorMaxValue || !this.props.errorStartValue?
                <div className={numbers === maxValue ? "valueNumberMax" : "value-number"}>
                    {this.props.numbers}
                </div>
                : <div className={"error"} >
                    Incorrect value
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        numbers: state.numbers,
        maxValue: state.maxValue,
        error: state.error,
        errorMaxValue: state.errorMaxValue,
        errorStartValue: state.errorStartValue
    }
}


export default connect(mapStateToProps, {})(ValueNumber);

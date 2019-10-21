import React from 'react';
import './App.css';
import ValueNumber from "./Right-field/ValueNumber";
import Button from "./Right-field/Button";
import Header from "./Header"
import Settings from "./Left-field/Settings";
import ButtonSettings from "./Left-field/ButtonSettings";
import {connect} from "react-redux";
import {
    activateEditMode,
    addNumberClick,
    changeMaxValue,
    changeStartValue,
    deactivateEditMode,
    onResetButtonClick,
    setErrorMaxValue,
    setErrorStartValue,
    setNewValues
} from "./redux/reducer";


class App extends React.Component {

    onAddClick = () => {
        if (this.props.numbers < this.props.maxValue) {
            this.props.addNumberClick()
        } else {
            alert('Stop')
        }
    }

    changeMaxValue = (e) => {

        let newMaxValue = Number(e.target.value);
        this.activateEditMode()
        if (newMaxValue <= this.props.startValue) {
            this.props.setErrorMaxValue(true)
            this.props.changeMaxValue(this.props.startValue)
        } else {
            this.props.setErrorMaxValue(false)
            this.props.changeMaxValue(newMaxValue)
        }
    };

    changeStartValue = (e) => {
        debugger
        let newStartValue = Number(e.target.value);
        this.activateEditMode();
        if (newStartValue >= this.props.maxValue) {
            this.props.setErrorStartValue(true)
            this.props.changeStartValue(this.props.maxValue)
        } else if (newStartValue < 0) {
            this.props.setErrorStartValue(true)
        } else {
            this.props.setErrorStartValue(false);
            this.props.changeStartValue(newStartValue)
        }
    };

    onResetButtonClick = () => {
        this.props.onResetButtonClick()
    };

    activateEditMode = () => {
        this.props.activateEditMode()
    };

    deactivateEditMode = () => {

        this.props.deactivateEditMode()
        if (this.props.numbers === this.props.maxValue) {
            alert('Incorrect Value')
        } else {
            this.props.setNewValues()
        }

    }


    render = () => {
        return (

            <div className="counter-page">
                <Header/>
                <div className="left-display">
                    <Settings changeStartValue={this.changeStartValue}
                              changeMaxValue={this.changeMaxValue}/>
                    <ButtonSettings errorMaxValue={this.props.errorMaxValue}
                                    errorStartValue={this.props.errorStartValue}
                                    error={this.props.error}
                                    deactivateEditMode={this.deactivateEditMode}
                                    editMode={this.props.editMode}/>
                    <div className="value">
                        <ValueNumber/>
                        <Button editMode={this.props.editMode}
                                name='Increase'
                                onAddClick={this.onAddClick}/>}
                        <Button editMode={this.props.editMode}
                                name='Reset'
                                onAddClick={this.onResetButtonClick}/>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        numbers: state.numbers,
        maxValue: state.maxValue,
        startValue: state.startValue,
        editMode: state.editMode,
        errorMaxValue: state.errorMaxValue,
        errorStartValue: state.errorStartValue
    }
}


export default connect(mapStateToProps, {
    addNumberClick,
    changeMaxValue,
    activateEditMode,
    changeStartValue,
    deactivateEditMode,
    setErrorStartValue,
    setErrorMaxValue,
    onResetButtonClick,
    setNewValues
})(App);

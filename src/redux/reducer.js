export const ADD_CLICK = "App/Reducer/ADD-CLICK";
export const CHANGE_MAX_VALUE = "App/Reducer/CHANGE-MAX-VALUE";
export const CHANGE_START_VALUE = "App/Reducer/CHANGE-START-VALUE";
export const ACTIVATE_EDIT_MODE = "App/Reducer/ACTIVATE_EDIT_MODE";
export const DEACTIVATE_EDIT_MODE = "App/Reducer/DEACTIVATE_EDIT_MODE";
export const SET_ERROR_MAX_VALUE = "App/Reducer/SET_ERROR_MAX_VALUE";
export const SET_ERROR_START_VALUE = "App/Reducer/SET_ERROR_START_VALUE";
export const RESET_BUTTON_CLICK = "App/Reducer/RESET_BUTTON_CLICK";
export const SET_NEW_VALUES = "App/Reducer/SET_NEW_VALUES";

const initialState = {
    numbers: 0,
    maxValue: 2,
    startValue: 0,
    editMode: false,
    errorMaxValue: false,
    errorStartValue:false
};


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_CLICK:
            debugger
            return {
                ...state,
                numbers: state.numbers + 1
            };

        case ACTIVATE_EDIT_MODE:
            return {
                ...state,
                editMode: true,

            };
        case RESET_BUTTON_CLICK:
            return {
                ...state,
                numbers: 0
            };
        case DEACTIVATE_EDIT_MODE:
            return {
                ...state,
                editMode: false,

            };
        case  CHANGE_MAX_VALUE:
            debugger
            return {
                ...state,
                maxValue: action.maxValue,

            };
        case CHANGE_START_VALUE:
            return {
                ...state,
                startValue: action.startValue
            };
        case SET_ERROR_MAX_VALUE:
            return {
                ...state,
                errorMaxValue:action.value
            }
        case SET_ERROR_START_VALUE:
            debugger
            return {
                ...state,
                errorStartValue:action.value
            }

        case SET_NEW_VALUES:
            return {
                ...state,
                numbers: state.startValue
            }
    }

    return state
}

// ACTIONS CREATORS
export const addNumberClick = () => ({type: ADD_CLICK});
export const changeMaxValue = (maxValue) => ({type: CHANGE_MAX_VALUE, maxValue});
export const changeStartValue = (startValue) => ({type: CHANGE_START_VALUE, startValue});
export const activateEditMode = () => ({type: ACTIVATE_EDIT_MODE});
export const deactivateEditMode = () => ({type: DEACTIVATE_EDIT_MODE});
export const setErrorStartValue = (value) => ({type: SET_ERROR_START_VALUE, value});
export const setErrorMaxValue = (value) => ({type: SET_ERROR_MAX_VALUE, value});
export const onResetButtonClick = (numbers) => ({type: RESET_BUTTON_CLICK, numbers});
export const setNewValues = () => ({type: SET_NEW_VALUES});


export default reducer;
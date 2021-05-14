import {
    TOGGLE_DARK_MODE,
    GET_DARK_MODE
}
from "../../constants/appSettings"

const initialState = {
    isDarkMode: true
}

export default function appSettings(state = initialState, action){
    switch (action.type) {
        case GET_DARK_MODE:
            return (state.isDarkMode)
        case TOGGLE_DARK_MODE: 
            return {...state, isDarkMode: !state.isDarkMode}
        default: 
            return state;
    }

}
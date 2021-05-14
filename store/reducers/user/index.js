import { setAnalyticsCollectionEnabled } from "expo-firebase-analytics"
import {
    GET_USER,
    UPDATE_USER_FIELD
}
from "../../constants/user"

const initialState = {
    name: '',
    phone: '',
    email: '',
}

export default function user(state = initialState, action){    
    switch (action.type) {
        case GET_USER:
            return state
        case UPDATE_USER_FIELD:            
            return {
                ...state,
                [action.payload[0]]: action.payload[1]                
            }                 
        default: 
            return state;
    }

}
import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action){
    console.log('Action Received', action)
    switch (action.type) {
        case FETCH_WEATHER:
        // return state.concat([action.payload.data]);
        // similar to above line in es6 syntax. add an array and the '...' just means to a variable that is the same data type (maybe).
        return [action.payload.data, ...state];
    }
    return state;   
}
import { combineReducers } from "redux"

export default combineReducers({
    counter: CounterReducer
})

function CounterReducer(state = 0, action) {
    console.log(action)
    switch (action.type) {
        case "CLICK_PLUS":
            return state + action.payload
        case "CLICK_MINUS":
            return state + action.payload
        default:
            return state
    }
}

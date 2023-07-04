import { createStore } from 'redux'

const storeReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return { counter: state.counter + action.value }
    } else if (action.type === 'decrement') {
        return { counter: state.counter - action.value }
    } else {
        return state
    }
}

const store = createStore(storeReducer)

export default store
